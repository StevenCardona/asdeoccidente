# Spec: Fundación

> Estado: **abierto**. Sin código de app todavía.

## Identificación

| Campo | Valor |
| --- | --- |
| Id | `00` |
| Proyecto | `web` |
| Dependencias | Ninguna |
| Ruta | — (cascarón) |

## Objetivo

Crear la app Next.js con layout, navegación mobile-first, tokens de diseño, SEO base, cliente Sanity, esquemas compartidos y documento `configuracion`. Sin cuerpos de página de contenido.

## Resultado esperado

- `web/` arranca en local.
- Layout raíz: `lang="es-CO"`, fuentes, `metadataBase`.
- Grupo `(site)` con Encabezado, Pie y BarraInferior.
- `/studio` fuera del layout del sitio.
- `sitemap.ts`, `robots.ts`, helpers `buildMetadata` / `JsonLd` / `cmsFetch` / `urlFor` / `formatCOP` / `enlaceWhatsApp` / `SoloEscritorio`.
- `api/revalidate` listo (probado cuando haya webhook).
- Esquemas objeto: `imagenConAlt`, `seo`, `boton`, `acceso`, `cifra`. Documento único `configuracion`.
- `.env.example` con los nombres de architecture.

## Alcance

App, tokens (paleta decidida en architecture), navegación escritorio + barra inferior, pie, SEO técnico base, Sanity embebido, estructura del panel en español.

## Fuera de alcance

Cuerpos de Inicio…Contacto. Seed con contenido de páginas. Chatbot. Analytics reales. Cuenta Sanity en la nube (puede quedar documentado; valores reales después).

## Celular

Barra inferior de 5 ítems (Inicio, Escuela, Ferias, Socios, Más). WhatsApp encima de la barra. Targets ≥ 44 px. “Más” puede enlazar a rutas aún vacías o a placeholders según se implementen las páginas.

## Escritorio

Barra superior con menús Escuela y Criadores y socios. Botón WhatsApp visible.

## Contenido y CMS

Solo `configuracion` (nombre sede, dirección, teléfonos, WhatsApp por tema, horarios, redes). Sin documentos `home` / `escuela` hasta sus specs.

## SEO

`robots` bloquea `/studio` y `/api/`. Sitemap puede listar solo `/` hasta que existan más rutas. Preview no indexable.

## Criterios de aceptación

1. `npm run dev` (o equivalente) sirve el layout sin errores.
2. Navegación móvil y escritorio visibles según breakpoint.
3. `/studio` carga el panel (con env configurado).
4. Una visita a una ruta de página aún no creada no rompe el layout global.
5. Naming y paquetes alineados a architecture.
