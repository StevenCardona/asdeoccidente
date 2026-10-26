# Spec: Sede y eventos

> Estado: **abierto**. Depende de `00`.

## Identificación

| Campo | Valor |
| --- | --- |
| Id | `06` |
| Proyecto | `web` |
| Dependencias | `00` |
| Ruta | `/sede-y-eventos` |

## Objetivo

Mostrar la sede para alquiler y eventos sociales. Celular: tres espacios y cotizar. Escritorio: más instalaciones y video de llegada al tocar.

## Resultado esperado

Nombre y dirección **únicos** desde `configuracion`. CTA WhatsApp tema `sede`. Sin cajas grises vacías de mapa/video.

## Alcance

Hero, instalaciones (3 en móvil), bloque de alquiler/recepciones, cotización.

## Fuera de alcance

Detalle de 6+ instalaciones en Inicio. Trámites Fedequinas (Registros). Escuela completa.

## Celular

1. Hero  
2. Tres instalaciones (coliseo, alterno/paddock, salón — o las que confirme la junta)  
3. Bloque cotizar (WhatsApp)  

## Escritorio (suma)

4. Resto de espacios  
5. Video “cómo llegar” (poster + carga al tocar)  
6. Mapa o enlaces Waze/Maps reales (no placeholder vacío)

## Contenido y CMS

Textos de la guía §3. Una dirección. Capacidades y metros confirmados o “[ejemplo]”. Tags: documento de página + `configuracion`.

## SEO

Title/description orientados a alquiler / sede campestre. Canonical. Local business hints vía dirección compartida.

## Criterios de aceptación

1. Dirección igual que en Configuración / Contacto.  
2. Celular no descarga el video ni todas las fotos de instalaciones extra.  
3. CTA abre WhatsApp con mensaje de sede.  
4. No hay mapa vacío.
