# Project overview — Asdeoccidente

Sitio web de la asociación de criadores del caballo criollo colombiano en el Valle del Cauca.

Fuentes: [`docs/asdeoccidente.md`](../asdeoccidente.md) · [`architecture.md`](architecture.md) · [`progress-tracker.md`](progress-tracker.md).

## Qué construimos ahora (fase 1)

Sitio informativo en Next.js + Sanity. La asociación edita sin código. El camino principal es WhatsApp. Páginas: Inicio, Escuela, Equinoterapia, Ferias, Hazte socio, Registros, Sede y eventos, Nosotros, Contacto.

## Fuera de esta entrega de código

- Chatbot (fase 2 de producto)
- Pagos del curso, base de alumnos, bot con IA (fase 3)
- Directorio equino y tienda

## Flujo objetivo

1. Persona llega desde Google o Instagram (casi siempre en celular).
2. Encuentra en pocos toques la página de su necesidad.
3. Ve precio o fecha claros, sin datos inventados.
4. Toca WhatsApp con un mensaje ya escrito según el tema.
5. La asociación actualiza textos y tarifas en `/studio` y el sitio se refresca sin redesplegar.

## Éxito

- Recorrido en celular: Inicio → Escuela (o Ferias) → WhatsApp, sin trabas.
- Un solo `<h1>` y metadatos por página.
- LCP razonable en móvil (foto del hero priorizada; resto perezoso).
- Tarifas, dirección y junta editadas en un solo lugar del CMS.
- Sin textos de ejemplo ni precios de prueba en lo que se muestre a la junta.
