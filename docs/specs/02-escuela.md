# Spec: Escuela de chalanería

> Estado: **abierto**. Depende de `00`; ideal después de `01`.

## Identificación

| Campo | Valor |
| --- | --- |
| Id | `02` |
| Proyecto | `web` |
| Dependencias | `00` |
| Ruta | `/escuela-de-chalaneria` |

## Objetivo

Página de conversión a la clase gratis: clara en celular, tarifas explicadas en palabras, WhatsApp con mensaje del tema escuela.

## Resultado esperado

Documento único `escuelaChalaneria`. Tarifas por referencia a `tarifa` (servicio escuela). JSON-LD `SportsActivityLocation` + `BreadcrumbList`. Botón WhatsApp fijo sobre la barra inferior en móvil.

## Alcance

Niveles, primera clase (pasos), tarifas, qué llevar, horarios, FAQs. Esquema y query con maestros, tarifas, testimonios, faqs.

## Fuera de alcance

Mapa, video “cómo llegar”, junta, equinoterapia (página propia), compra en línea.

## Celular

1. Hero + CTA clase gratis  
2. Para quién (niveles)  
3. Tres pasos de la primera clase  
4. Tarifas (pestañas o acordeón: criterio claro, una tabla)  
5. Qué llevar + horarios (acordeón si es largo)  
6. Preguntas frecuentes (acordeón)  
7. WhatsApp fijo  

## Escritorio (suma)

8. Maestros (foto, nombre, frase)  
9. Testimonios  
10. Nota bajo tarifas (matrícula, seguro, cómo pagar)

## Contenido y CMS

Textos de la guía §3. Cada tarifa: valor, unidad, para quién, incluye en palabras. Mensaje WhatsApp del documento o de config tema `escuela`. Lo no confirmado: “[ejemplo]”.

## SEO

Title/description de la guía. Canonical de la ruta. Un `h1`. Precios en HTML, no solo en imagen.

## Criterios de aceptación

1. Celular no muestra maestros/testimonios si el spec los marca solo escritorio (o los degrada a resumen si se decide lo contrario en implementación: **por defecto no se muestran en móvil**).  
2. Cambiar una `tarifa` en Studio actualiza la página (con webhook en deploy).  
3. CTA abre `wa.me` con mensaje de escuela.  
4. FAQ en `<details>` o equivalente accesible.  
5. Sin mapa ni video en esta ruta.
