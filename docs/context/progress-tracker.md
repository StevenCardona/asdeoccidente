# Progress tracker

Actualizar al cerrar cada spec. Fuente: [`docs/asdeoccidente.md`](../asdeoccidente.md). Secuencia: [`build-plan.md`](build-plan.md).

## Estado actual

**Fase activa:** Fase 1 de producto — documentación lista; **cero código de app**.  
**Siguiente:** Spec `00` Fundación, cuando se pida implementar.  
**Código:** no existe `web/` todavía.

## Progreso definición

- [x] Fuente de producto reordenada (`asdeoccidente.md`)
- [x] Context (overview, architecture, build-plan, ai-workflow, tracker)
- [x] Specs 00–09 escritos
- [ ] App Next.js / Sanity
- [ ] Contenido real confirmado por junta y profesores

## Specs — Fase 1

| Spec | Estado |
| --- | --- |
| 00 Fundación | Abierto |
| 01 Inicio | Abierto |
| 02 Escuela | Abierto |
| 03 Ferias | Abierto |
| 04 Hazte socio | Abierto |
| 05 Nosotros | Abierto |
| 06 Sede y eventos | Abierto |
| 07 Registros | Abierto |
| 08 Equinoterapia | Abierto |
| 09 Contacto | Abierto |

## Preguntas abiertas

- Dirección oficial única y nombre de la sede
- Año de fundación (¿1975? → “más de 50 años”)
- Precios y qué incluye cada tarifa (escuela, registros, membresías, palcos)
- WhatsApp y asesora por tema
- Programación y entradas de la Copa confirmadas con eventos
- Contenido de equinoterapia validado por terapeutas

## Decisiones

- Un solo sitio Next.js; celular = misma URL, menos secciones.
- Sanity embebido en `/studio`; revalidación por webhook + tags.
- Sin SanityLive en fase 1.
- Paleta: `#C5161D` / `#0F172A` / ámbar solo detalle; no tokens YAML `#9C000F` / `#565E74`.
- Dominio actual se conserva; hosting pasa a Vercel.
- Chatbot y pagos fuera de los specs 00–09.
