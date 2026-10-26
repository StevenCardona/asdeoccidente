# Architecture — Asdeoccidente

Fuente de producto: [`docs/asdeoccidente.md`](../asdeoccidente.md). Diseño visual: [`docs/design/DESIGN.md`](../design/DESIGN.md).

Un solo proyecto web. Celular y escritorio son la misma URL, con distintas listas de secciones.

## Stack

| Pieza | Herramienta | Rol |
| --- | --- | --- |
| Sitio | Next.js (App Router) + TypeScript + React | Páginas, SEO, API de revalidación |
| Estilos | Tailwind CSS | Tokens y layout mobile-first |
| Contenido | Sanity Studio embebido en `/studio` | La asociación edita sin código |
| Hosting | Vercel | Deploy desde Git; preview no indexable |
| Videos | YouTube o Vimeo no listados | Embebidos; sin alojar video propio al inicio |
| Imágenes | CDN de Sanity + `next/image` | Formato automático, tamaños por viewport |

No hay backend aparte en fase 1. No hay app móvil nativa. Chatbot y pagos vienen después.

## Proyecto y carpetas

Código de la app (cuando se cree) en `web/`. El grupo de rutas `(site)` lleva Header y Footer del sitio público; `/studio` queda fuera de ese grupo.

```text
web/
  sanity.config.ts
  scripts/seed.mjs                    ← solo local, contenido de prueba
  src/
    app/
      layout.tsx                      ← html lang="es-CO", fuentes, metadataBase
      (site)/
        layout.tsx                    ← Encabezado + Pie + barra inferior móvil
        page.tsx                      ← Inicio
        escuela-de-chalaneria/
        equinoterapia/
        ferias/
        hazte-socio/
        registros-y-tramites/
        sede-y-eventos/
        nosotros/
        contacto/
      studio/[[...tool]]/page.tsx
      api/revalidate/route.ts
      sitemap.ts
      robots.ts
    components/                       ← Encabezado, BarraInferior, SoloEscritorio, JsonLd…
    lib/seo.ts
    sanity/
      lib/client.ts · fetch.ts · image.ts · queries.ts
      structure.ts
      schemaTypes/
```

## Paquetes

Instalar con versiones exactas (`--save-exact`). Referencia de octubre 2026: Next.js 16.x, `next-sanity` 12 o 13, Sanity Studio v5. Fijar versiones y leer la guía de migración antes de subir mayor.

**Producción / runtime**

- `next`, `react`, `react-dom`
- `next-sanity`, `@sanity/image-url`, `@portabletext/react`, `sanity`
- `typescript`, `tailwindcss`, `eslint` (y el toolchain de create-next-app)

**Solo desarrollo / scripts**

- `@sanity/client` — seed local; el token de escritura no va a Vercel ni a Git

**No entran en fase 1**

- Framer Motion, carruseles de terceros, librería grande de iconos
- Chatbot, pasarela de pagos, ORM, Clerk u otro auth de usuarios finales
- `<SanityLive>` / `defineLive` (riesgo de exceso de peticiones con Next 16)

**Variables de entorno** (nombres; valores reales cuando exista el proyecto Sanity)

```text
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-03-01
NEXT_PUBLIC_SITE_URL=https://asdeoccidente.org.co
SANITY_REVALIDATE_SECRET=
SANITY_WRITE_TOKEN=          ← solo local, para seed; nunca a Vercel
```

`images.remotePatterns` debe permitir `cdn.sanity.io`.

## Naming

| Qué | Convención | Ejemplo |
| --- | --- | --- |
| URLs | Español, sin tildes, guiones | `/escuela-de-chalaneria` |
| Campos CMS / GROQ | camelCase en español | `heroTitulo`, `fechaInicio` |
| Documentos únicos | id = nombre del tipo | `home`, `escuelaChalaneria`, `configuracion` |
| Componentes UI | PascalCase en español | `BarraInferior`, `Encabezado`, `Hero` |
| Helpers de la guía | No rebautizar | `cmsFetch`, `urlFor`, `buildMetadata`, `formatCOP` |
| WhatsApp | Función fija | `enlaceWhatsApp(tema)` |
| Bloque solo escritorio | Componente fijo | `SoloEscritorio` |
| Archivos de componentes | kebab-case | `barra-inferior.tsx` |

Textos de interfaz en español (Colombia). Comentarios de código: español o inglés, consistentes dentro del archivo.

## Funciones y piezas fijas

| Pieza | Dónde | Qué hace |
| --- | --- | --- |
| `cmsFetch` | `sanity/lib/fetch.ts` | Lee el CMS con `cache: 'force-cache'` y `tags` por tipo de documento |
| `client` | `sanity/lib/client.ts` | Cliente next-sanity; `useCdn: false` (Next cachea) |
| `urlFor` | `sanity/lib/image.ts` | URL optimizada del CDN; alt obligatorio vía esquema |
| `buildMetadata` | `lib/seo.ts` | title, description, canonical, Open Graph, robots |
| `formatCOP` | `lib/seo.ts` | Precio en pesos colombianos sin decimales |
| `JsonLd` | `components/JsonLd.tsx` | JSON-LD seguro en el HTML inicial |
| `enlaceWhatsApp` | util compartido | `wa.me` + mensaje del tema desde Configuración |
| `SoloEscritorio` | componente cliente | No pinta bajo 1024 px; no pide imágenes del bloque en móvil |
| Webhook | `api/revalidate` | Firma secreta → `revalidateTag(_type, { expire: 0 })` |

**CMS.** Documentos únicos para páginas fijas (Inicio, Escuela, Configuración): no se duplican ni se borran desde el panel. Tarifas, personas, testimonios, FAQs y eventos son documentos repetibles. Las páginas referencian tarifas; no escriben el precio a mano.

**Etiquetas de caché.** El nombre del tag es el `_type` del documento. Cada página declara las tags que lee. El filtro del webhook en Sanity debe incluir esos mismos tipos.

## Paleta y tipografía

Decisión: paleta del **texto** de DESIGN.md (no los tokens YAML del inicio del mismo archivo).

| Token | Valor | Uso |
| --- | --- | --- |
| Primario | `#C5161D` | CTA, acentos de navegación |
| Noche | `#0F172A` | Header oscuro, texto fuerte, footer |
| Ámbar | `#F59E0B` | Solo detalle (badge, tab activo); no fondos grandes |
| Ámbar texto | `#92400E` | Cuando el ámbar tiene que ser texto legible |
| Neutros | `#64748B`, bordes `#E2E8F0`, fondos `#F8FAFC` / blanco | Cuerpo y cards |

No usar `#9C000F` ni `#565E74` del bloque YAML inicial de DESIGN.md.

Fuentes con `next/font`: **Plus Jakarta Sans** (títulos, labels) e **Inter** (cuerpo). Solo los pesos necesarios para hero y texto. Botones ≥ 44 px de alto. Labels ≥ 12–13 px.

## Carga (LCP) y mobile-first

```text
Usuario → ruta
  → HTML inicial: h1, primera frase, precio o fecha, botón
  → una sola imagen con priority (hero)
  → secciones móvil siempre
  → SoloEscritorio (≥ 1024 px): monta bloques extra y sus imágenes
```

1. Misma URL en celular y escritorio. El celular **no** es otra app.
2. En el primer HTML van el `h1`, la primera frase útil, precios y fechas en texto, y el CTA principal.
3. Solo la foto del hero lleva `priority` + `sizes`. El resto es perezoso; proporción fija para no mover el layout (CLS).
4. Un bloque “solo escritorio” no se pinta en el celular y sus fotos no se piden.
5. Video: imagen quieta; el `iframe` carga al tocar.
6. Sin feed de Instagram, mapa embebido ni analytics en el primer pintado. Mapa en Contacto y Sede. Analytics con `next/script` (`afterInteractive`) cuando se instalen.
7. Fuentes solo vía `next/font`.

## Navegación

**Escritorio:** Inicio · Escuela ▾ (Chalanería, Equinoterapia) · Ferias · Criadores y socios ▾ (Registros, Hazte socio) · Sede y eventos · Nosotros · botón WhatsApp.

**Celular:** barra inferior fija, 5 ítems, alto táctil ≥ 44 px: Inicio · Escuela · Ferias · Socios · Más. “Más” abre Equinoterapia, Registros, Sede, Nosotros, Contacto. Botón WhatsApp **encima** de la barra, no detrás.

## SEO técnico

- `lang="es-CO"`, `metadataBase` = `NEXT_PUBLIC_SITE_URL`.
- Un `h1` por página; title ≈ 60 caracteres; description 120–160; bloque `seo` en el CMS.
- Canonical en todas las páginas públicas. Un solo host (www o no; el otro 301).
- `sitemap.ts` solo con rutas que existan. `robots.ts`: allow `/`, disallow `/studio` y `/api/`.
- Preview y `/studio` fuera de Google.
- JSON-LD en el HTML inicial: `Organization` (Inicio), `SportsActivityLocation` (Escuela/Contacto), `Event` (ferias), `BreadcrumbList` (páginas internas). FAQPage opcional (Google ya no lo destaca; el contenido sí importa).
- Redirecciones 301 desde WordPress el día del lanzamiento. Dominio actual se mantiene.

## Flujo de contenido

```text
Administrador → /studio → Publicar
                 ↓ webhook firmado
           /api/revalidate → revalidateTag
                 ↓
           Next vuelve a pedir ese contenido
```

## Invariantes

1. No inventar precios, nombres, dirección ni año de fundación. Lo no confirmado: “[ejemplo]”.
2. Una sola dirección y un solo nombre de sede (Configuración general).
3. Una sola tabla de tarifas; las páginas referencian, no duplican.
4. Junta completa solo en Nosotros.
5. Formulario largo solo en Contacto.
6. Cuenta regresiva desde fechas del evento, nunca hardcodeada.
7. Textos de la guía de producto mandan sobre los PNG cuando choquen.
8. Celular: menos secciones que escritorio; espacio primero.
9. Una imagen con `priority` por página (el hero).
10. `/studio` y `/api` no indexables.
