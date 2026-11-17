import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./src/sanity/schemaTypes";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export default defineConfig({
  name: "asdeoccidente",
  title: "Asdeoccidente",
  projectId,
  dataset,
  basePath: "/studio",
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Contenido")
          .items([
            S.listItem()
              .title("Configuración general")
              .id("siteSettings")
              .child(
                S.document()
                  .schemaType("siteSettings")
                  .documentId("siteSettings"),
              ),
            S.listItem()
              .title("Inicio")
              .id("home")
              .child(
                S.document().schemaType("home").documentId("home"),
              ),
            S.listItem()
              .title("Escuela")
              .id("school")
              .child(
                S.document().schemaType("school").documentId("school"),
              ),
            S.listItem()
              .title("Ferias")
              .id("fairs")
              .child(S.documentTypeList("fair").title("Ferias")),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
});
