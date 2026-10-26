# Spec: Inicio

> Estado: **abierto**. Depende de `00`.

## Identificación

| Campo | Valor |
| --- | --- |
| Id | `01` |
| Proyecto | `web` |
| Dependencias | `00` |
| Ruta | `/` |

## Objetivo

Home clara en celular: hero, dos CTAs, próximo evento y caminos (“¿Qué quieres hacer hoy?”). Escritorio suma escuela breve, testimonios, cifras y ubicación en una línea.

## Resultado esperado

Documento único `home` + query que trae `proximoEvento` y `config`. Metadatos y `Organization` JSON-LD. Hero con una sola imagen `priority`.

## Alcance

Secciones listadas abajo. Esquema `home`. Referencias a testimonios (máx. 3). Tags de caché: `home`, `evento`, `testimonio`, `configuracion`.

## Fuera de alcance

Tarifas, junta, galería de instalaciones, feed de Instagram, mapa embebido, video.

## Celular

1. Hero (título, subtítulo, imagen, 2 botones)  
2. Próximo evento (si hay `fechaFin` ≥ now)  
3. Tarjetas de acceso (máx. 6)  

## Escritorio (suma)

4. Escuela en breve  
5. Hasta 3 testimonios  
6. Cifras (máx. 4)  
7. Una línea de ubicación (texto; sin mapa)

## Contenido y CMS

Textos de hero según `asdeoccidente.md` §3. Botones: clase gratis → Escuela; próxima feria → Ferias. Accesos hacia Escuela, Ferias, Registros, Hazte socio, Sede. Datos no confirmados: “[ejemplo]”.

## SEO

Fallback title/description de la guía. Canonical `/`. Un solo `h1`. `Organization` + redes desde config.

## Criterios de aceptación

1. En viewport móvil no aparecen secciones de solo escritorio ni sus imágenes.  
2. Hero: una imagen con `priority`.  
3. Si no hay evento futuro, el bloque próximo evento no se muestra.  
4. Código fuente: title, description, og, JSON-LD Organization.  
5. Clic en CTA principal lleva a Escuela o abre el flujo definido en el CMS.
