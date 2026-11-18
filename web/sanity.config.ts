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
              .title("Eventos")
              .id("events")
              .child(
                S.list()
                  .title("Eventos")
                  .items([
                    S.listItem()
                      .title("Página")
                      .id("eventsPage")
                      .child(
                        S.document()
                          .schemaType("eventsPage")
                          .documentId("eventsPage"),
                      ),
                    S.listItem()
                      .title("Calendario")
                      .id("eventsCalendar")
                      .child(
                        S.documentTypeList("event")
                          .title("Calendario")
                          .defaultOrdering([
                            { field: "startDate", direction: "desc" },
                          ])
                          .initialValueTemplates([
                            S.initialValueTemplateItem("event-new"),
                          ]),
                      ),
                  ]),
              ),
            S.listItem()
              .title("Servicios")
              .id("servicesPage")
              .child(
                S.document()
                  .schemaType("servicesPage")
                  .documentId("servicesPage"),
              ),
            S.listItem()
              .title("Alquiler")
              .id("venuePage")
              .child(
                S.document()
                  .schemaType("venuePage")
                  .documentId("venuePage"),
              ),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
    templates: (prev) => [
      ...prev.filter(
        (template) =>
          template.id !== "event" && template.id !== "fair",
      ),
      {
        id: "event-new",
        title: "Nuevo evento",
        schemaType: "event",
        value: {
          featured: false,
          ticketNotes:
            "Entrada general, palcos e inscripción de ejemplares por WhatsApp.",
        },
      },
    ],
  },
});
