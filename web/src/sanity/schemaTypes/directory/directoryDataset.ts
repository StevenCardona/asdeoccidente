import { defineArrayMember, defineField, defineType } from "sanity";
import { ProcessExcelInput } from "@/sanity/components/process-excel-input";

export const directoryRow = defineType({
  name: "directoryRow",
  title: "Fila",
  type: "object",
  fields: [
    defineField({
      name: "cells",
      title: "Celdas",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
  preview: {
    select: { cells: "cells" },
    prepare({ cells }) {
      const list = Array.isArray(cells) ? cells : [];
      return {
        title: String(list[0] ?? "Fila vacía"),
        subtitle: list.slice(1, 4).filter(Boolean).join(" · "),
      };
    },
  },
});

export const directoryDataset = defineType({
  name: "directoryDataset",
  title: "Tipo de directorio",
  type: "document",
  description:
    "Un documento = un tipo (p. ej. Escuelas). Sube un Excel; las columnas de la primera hoja se convierten en la tabla pública. Pulsa Publicar después de cargar.",
  fields: [
    defineField({
      name: "title",
      title: "Nombre del tipo",
      type: "string",
      validation: (rule) => rule.required(),
      description: "Ej. Escuelas, Pesebreras, Veterinarios",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 64 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "sortOrder",
      title: "Orden en el filtro",
      type: "number",
      initialValue: 0,
    }),
    defineField({
      name: "published",
      title: "Publicado en el sitio",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "sourceFile",
      title: "Archivo Excel",
      type: "file",
      options: {
        accept:
          ".xlsx,.xls,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel",
      },
      description:
        "Sube el Excel (.xlsx). Luego usa el botón Procesar Excel. La web lee columnas/filas publicadas.",
    }),
    defineField({
      name: "processExcel",
      title: "Procesar Excel",
      type: "string",
      components: { input: ProcessExcelInput },
      readOnly: true,
    }),
    defineField({
      name: "headers",
      title: "Columnas (desde Excel)",
      type: "array",
      of: [{ type: "string" }],
      description: "Se llenan al procesar el Excel.",
    }),
    defineField({
      name: "rows",
      title: "Filas (desde Excel)",
      type: "array",
      of: [defineArrayMember({ type: "directoryRow" })],
      description: "Datos publicados. Se regeneran al procesar un Excel nuevo.",
    }),
  ],
  orderings: [
    {
      title: "Orden",
      name: "sortOrderAsc",
      by: [{ field: "sortOrder", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      published: "published",
      headers: "headers",
      rows: "rows",
    },
    prepare({ title, published, headers, rows }) {
      const cols = Array.isArray(headers) ? headers.length : 0;
      const count = Array.isArray(rows) ? rows.length : 0;
      return {
        title: title || "Sin título",
        subtitle: `${published === false ? "Borrador · " : ""}${cols} cols · ${count} filas`,
      };
    },
  },
});
