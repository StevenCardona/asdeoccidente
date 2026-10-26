# Spec: Contacto

> Estado: **abierto**. Depende de `00`.

## Identificación

| Campo | Valor |
| --- | --- |
| Id | `09` |
| Proyecto | `web` |
| Dependencias | `00` |
| Ruta | `/contacto` |

## Objetivo

Único lugar del sitio con formulario largo, mapa real y WhatsApp por tema. “¿Hablamos?” con expectativa de respuesta en un día hábil.

## Resultado esperado

Formulario con casilla de datos personales (Ley 1581). Confirmación y error según microcopy de la guía. Mapa o enlaces reales. Canales WhatsApp por tema desde `configuracion`.

## Alcance

Hero corto, selector de tema / WhatsApp por tema, formulario, dirección y mapa, teléfonos desde config.

## Fuera de alcance

Repetir junta completa (enlace a Nosotros). Formularios largos en otras páginas. Chatbot (fase 2).

## Celular

1. Hero  
2. WhatsApp por tema (lista de botones)  
3. Formulario (campos esenciales; teclado adecuado en móvil)  
4. Dirección + abrir en Maps/Waze  
5. Teléfonos  

## Escritorio

Misma información en dos columnas si cabe (formulario | dirección/mapa). Sin inventar un directorio institucional enorme; “quién te atiende” puede ser 1–3 personas o solo WhatsApp por tema.

## Contenido y CMS

Textos de la guía §3. Microcopy de campos, aceptación de datos, confirmación y error. Envío: al menos mailto/API route o integración simple documentada; en fase 1 es aceptable notificar por email o copiar a WhatsApp si se acuerda — **dejar la decisión en implementación sin inventar CRM**. Tags: `configuracion`.

## SEO

Title/description de contacto. Canonical. `SportsActivityLocation` o `Organization` con teléfono y dirección. Breadcrumbs.

## Criterios de aceptación

1. Es el único formulario largo del sitio.  
2. Casilla de tratamiento de datos obligatoria.  
3. Mapa/enlaces reales o el bloque no se muestra.  
4. WhatsApp por tema usa números y mensajes de Configuración.  
5. Dirección idéntica a la de Configuración / Sede.
