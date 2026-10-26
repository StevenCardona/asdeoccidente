# Reglas de trabajo con IA

## Enfoque

Fuente de producto → context → spec. **Una fase = un spec = una página** (salvo `00` fundación). No adelantar la siguiente página.

## Alcance

- Un solo spec por paso. Un solo proyecto (`web/` cuando exista).
- UI: esqueleto → vacíos → CMS. Sin payloads de ejemplo presentados como datos reales.
- Siguiente trabajo: el primer spec abierto en [`progress-tracker.md`](progress-tracker.md).
- No inventar producto. Textos literales de [`asdeoccidente.md`](../asdeoccidente.md). Si el PNG y la guía chocan, manda la guía.

## Antes de implementar

1. Leer: [`project-overview.md`](project-overview.md) → [`architecture.md`](architecture.md) → [`ai-workflow-rules.md`](ai-workflow-rules.md) (este archivo) → el **spec** de la página → [`progress-tracker.md`](progress-tracker.md).
2. Confirmar secciones de **celular** y de **escritorio** en el spec.
3. No tocar specs futuros ni rutas de otras páginas.

## Mientras implementas

- Celular con menos secciones; espacio primero.
- Una sola imagen con `priority` (hero). Resto perezoso.
- Precios, fechas y dirección en HTML, desde el CMS o marcados “[ejemplo]”.
- No inventar precios, nombres, teléfono ni sede.
- Junta solo en Nosotros. Formulario largo solo en Contacto. Tarifas desde la tabla única.
- Naming y paquetes: solo lo definido en [`architecture.md`](architecture.md).

## Archivos protegidos

- [`asdeoccidente.md`](../asdeoccidente.md) y [`design/DESIGN.md`](../design/DESIGN.md): no reescribir salvo pedido explícito.
- No introducir paquetes fuera de la lista de architecture.
- No crear chatbot, pagos ni portal vacío “porque el diseño lo muestra”.

## Docs al día

Al cerrar un spec: actualizar [`progress-tracker.md`](progress-tracker.md). Al Gate de fase 1: también [`estado-actual.md`](../estado-actual.md).

## Después del spec

Criterios de aceptación del spec en verde. Invariantes de architecture intactas. Tracker actualizado. Listo el siguiente número abierto en el build plan.
