# Spec: Registros y trámites

> Estado: **abierto**. Depende de `00`.

## Identificación

| Campo | Valor |
| --- | --- |
| Id | `07` |
| Proyecto | `web` |
| Dependencias | `00` |
| Ruta | `/registros-y-tramites` |

## Objetivo

Dejar claro cada trámite: qué es, cuánto cuesta, cuánto demora, qué papeles. Precios desde la tabla única de tarifas (`servicio: registro`).

## Resultado esperado

Lista o cards de trámites (registro, traspaso, ADN, duplicado, etc.). CTA “Iniciar mi trámite” → WhatsApp tema `registros`.

## Alcance

Hero, listado de trámites con precio y requisitos, nota de demoras, WhatsApp.

## Fuera de alcance

Portal de radicación online completo (fase 3). Tarifas de escuela o membresía en esta página. Precios distintos a los de otras páginas.

## Celular

1. Hero  
2. Cada trámite: nombre, precio, unidad, para quién, incluye / papeles (acordeón si es largo)  
3. CTA WhatsApp  

## Escritorio

Misma tabla con más columnas o detalle (demora, notas). Sin cambiar los valores.

## Contenido y CMS

Textos de la guía §3. Tarifas solo por referencia a documentos `tarifa`. Explicar descuentos en una frase si aplican. Confirmar valores con junta; hasta entonces “[ejemplo]”.

## SEO

Title/description para registro / traspaso / ADN equino. Canonical. Precios en HTML.

## Criterios de aceptación

1. Un cambio de tarifa en Studio se refleja aquí y no hay un segundo precio hardcodeado.  
2. Celular legible sin tabla de 6 columnas.  
3. WhatsApp con mensaje de registros.  
4. No se muestran tarifas de chalanería ni membresías aquí.
