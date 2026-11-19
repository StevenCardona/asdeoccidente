"use client";

import { useCallback, useState } from "react";
import { useClient, useFormValue } from "sanity";
import type { StringInputProps } from "sanity";
import * as XLSX from "xlsx";

type ParsedTable = {
  headers: string[];
  rows: Array<{ _type: "directoryRow"; _key: string; cells: string[] }>;
};

function parseWorkbook(buffer: ArrayBuffer): ParsedTable {
  const workbook = XLSX.read(buffer, { type: "array" });
  const sheetName = workbook.SheetNames[0];
  if (!sheetName) return { headers: [], rows: [] };

  const sheet = workbook.Sheets[sheetName];
  const matrix = XLSX.utils.sheet_to_json<
    Array<string | number | boolean | null>
  >(sheet, { header: 1, defval: "", raw: false });

  if (!matrix.length) return { headers: [], rows: [] };

  const headerRow = matrix[0] ?? [];
  const headers = headerRow.map((cell, index) => {
    const text = String(cell ?? "").trim();
    return text || `Columna ${index + 1}`;
  });

  const rows = matrix.slice(1).reduce<ParsedTable["rows"]>((acc, row, rowIndex) => {
    const cells = headers.map((_, colIndex) =>
      String(row?.[colIndex] ?? "").trim(),
    );
    if (cells.every((cell) => !cell)) return acc;
    acc.push({
      _type: "directoryRow",
      _key: `r${rowIndex}-${Math.random().toString(36).slice(2, 8)}`,
      cells,
    });
    return acc;
  }, []);

  return { headers, rows };
}

/** Studio control: process uploaded Excel into headers + rows. */
export function ProcessExcelInput(_props: StringInputProps) {
  const client = useClient({ apiVersion: "2025-01-01" });
  const documentId = useFormValue(["_id"]) as string | undefined;
  const sourceFile = useFormValue(["sourceFile"]) as
    | { asset?: { _ref?: string } }
    | undefined;
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);

  const onProcess = useCallback(async () => {
    const id = documentId?.replace(/^drafts\./, "");
    const draftId = documentId?.startsWith("drafts.")
      ? documentId
      : id
        ? `drafts.${id}`
        : undefined;
    const patchId = draftId || documentId;
    const assetRef = sourceFile?.asset?._ref;

    if (!patchId) {
      setStatus("Guarda el documento antes de procesar.");
      return;
    }
    if (!assetRef) {
      setStatus("Sube un archivo Excel primero.");
      return;
    }

    setBusy(true);
    setStatus("Procesando…");
    try {
      const asset = await client.fetch<{ url?: string } | null>(
        `*[_id == $id][0]{ url }`,
        { id: assetRef },
      );
      if (!asset?.url) {
        setStatus("No se pudo leer la URL del archivo.");
        return;
      }
      const response = await fetch(asset.url);
      if (!response.ok) {
        setStatus(`Error al descargar el Excel (${response.status}).`);
        return;
      }
      const parsed = parseWorkbook(await response.arrayBuffer());
      if (!parsed.headers.length) {
        setStatus("El Excel no tiene columnas en la primera hoja.");
        return;
      }

      await client
        .patch(patchId)
        .set({ headers: parsed.headers, rows: parsed.rows })
        .commit({ autoGenerateArrayKeys: true });

      setStatus(
        `Listo: ${parsed.headers.length} columnas · ${parsed.rows.length} filas. Revisa y pulsa Publicar.`,
      );
    } catch (error) {
      console.error("[directory] excel parse failed", error);
      setStatus("No se pudo procesar el Excel. Revisa el formato.");
    } finally {
      setBusy(false);
    }
  }, [client, documentId, sourceFile?.asset?._ref]);

  return (
    <div
      style={{
        padding: "0.75rem 1rem",
        border: "1px solid var(--card-border-color, #e2e8f0)",
        borderRadius: 6,
      }}
    >
      <p style={{ margin: "0 0 0.75rem", fontSize: 13, lineHeight: 1.45 }}>
        1) Sube el Excel arriba · 2) Pulsa procesar (primera hoja) · 3) Publica el
        documento. La web muestra exactamente esas columnas.
      </p>
      <button
        type="button"
        onClick={onProcess}
        disabled={busy}
        style={{
          cursor: busy ? "wait" : "pointer",
          padding: "0.5rem 0.9rem",
          borderRadius: 4,
          border: "none",
          background: "#c5161d",
          color: "#fff",
          fontWeight: 600,
          fontSize: 13,
        }}
      >
        {busy ? "Procesando…" : "Procesar Excel"}
      </button>
      {status ? (
        <p style={{ margin: "0.75rem 0 0", fontSize: 13 }}>{status}</p>
      ) : null}
    </div>
  );
}
