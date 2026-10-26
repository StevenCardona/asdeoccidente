# Build plan — secuencia de specs

Solo la secuencia. Detalle en [`docs/specs/`](../specs/) y en [`docs/asdeoccidente.md`](../asdeoccidente.md).

Un proyecto: el sitio Next.js. **Una fase = una página** (excepto `00`, que es el cascarón). No adelantar la siguiente.

## Fase 1 (sitio)

| # | Spec | Ruta |
| --- | --- | --- |
| 00 | Fundación | — (app, layout, navegación, SEO base, Sanity, `configuracion`) |
| 01 | Inicio | `/` |
| 02 | Escuela de chalanería | `/escuela-de-chalaneria` |
| 03 | Ferias | `/ferias` |
| 04 | Hazte socio | `/hazte-socio` |
| 05 | Nosotros | `/nosotros` |
| 06 | Sede y eventos | `/sede-y-eventos` |
| 07 | Registros y trámites | `/registros-y-tramites` |
| 08 | Equinoterapia | `/equinoterapia` |
| 09 | Contacto | `/contacto` |

**Gate fase 1 de producto:** specs 00–09 cerrados + redirecciones 301 + velocidad móvil + contenido confirmado + capacitación `/studio`. Luego chatbot (fase 2 de producto) fuera de esta secuencia de páginas.

## Reglas

- Contrato de contenido y reglas técnicas: [`architecture.md`](architecture.md).
- Producto y textos: [`asdeoccidente.md`](../asdeoccidente.md).
- UI: esqueleto → estados vacíos → cableado al CMS. Sin inventar datos reales.
- Celular primero; escritorio suma secciones según el spec.
- Actualizar [`progress-tracker.md`](progress-tracker.md) al cerrar cada spec.
