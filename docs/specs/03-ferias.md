# Spec: Ferias

> Estado: **abierto**. Depende de `00`.

## Identificación

| Campo | Valor |
| --- | --- |
| Id | `03` |
| Proyecto | `web` |
| Dependencias | `00` |
| Ruta | `/ferias` (detalle de evento opcional `/ferias/[slug]` si el spec de contenido lo pide) |

## Objetivo

Próximo evento arriba, programación correcta, entrada general antes que palcos. Cuenta regresiva desde la fecha del CMS, nunca hardcodeada.

## Resultado esperado

Listado / destacado del próximo `evento`. JSON-LD `Event` + breadcrumbs. “Última actualización” visible cuando haya programación.

## Alcance

Hero de ferias, próximo evento, pestañas “Voy a ver” / “Participo”, programación por día, entradas y palcos, CTA WhatsApp tema ferias.

## Fuera de alcance

Tienda de boletería con pago (fase 3). Directorio equino. Instagram embebido en LCP.

## Celular

1. Hero (nombre oficial del evento cuando sea el destacado)  
2. Próximo evento + cuenta regresiva (cliente; fecha desde CMS)  
3. Pestañas: voy a ver / participo  
4. Programación por día  
5. Entrada general primero; luego palcos  

## Escritorio (suma)

6. Calendario anual  
7. Requisitos ICA / inscripción  
8. Resultados (o pestaña; eventos pasados no se borran)  
9. Cómo llegar (mapa o enlace; no caja vacía)

## Contenido y CMS

Nombre: **XXXIV Copa América Equina** cuando aplique. Fechas y programación del afiche oficial. Precios de entrada general del afiche. Datos de ejemplo marcados. Tags: `evento`, `tarifa` (si hay precios de inscripción), `configuracion`.

## SEO

Title/description orientados a Copa / ferias. `Event` con `startDate`, `endDate`, `location`. Contenido de programación en HTML.

## Criterios de aceptación

1. Cuenta regresiva coincide con `fechaInicio` (no un número fijo en el diseño).  
2. Evento con `fechaFin` pasada no aparece como “próximo”.  
3. Entrada general visible antes que palcos VIP.  
4. Celular no carga el calendario anual ni galerías pesadas de solo escritorio.  
5. WhatsApp usa mensaje tema `ferias`.
