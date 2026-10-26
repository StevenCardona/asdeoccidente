# Spec: Nosotros

> Estado: **abierto**. Depende de `00`.

## Identificación

| Campo | Valor |
| --- | --- |
| Id | `05` |
| Proyecto | `web` |
| Dependencias | `00` |
| Ruta | `/nosotros` |

## Objetivo

Quiénes somos con voz propia. Junta completa solo aquí. Celular corto; escritorio suma historia y respaldos.

## Resultado esperado

Página institucional sin copiar manifiestos de la competencia. Cifras coherentes con el año de fundación confirmado (o “[ejemplo]”).

## Alcance

Hero, texto breve, cifras, hitos, junta (personas), respaldos en escritorio.

## Fuera de alcance

Formulario largo (Contacto). Tarifas. Repetir junta en Inicio/Contacto. Directorio de trámites.

## Celular

1. Hero  
2. Quiénes somos (corto)  
3. Cifras (pocas)  
4. Hitos (lista vertical)  
5. Junta en corto (cards; sin directorio telefónico enorme)

## Escritorio (suma)

6. Historia / más detalle de hitos  
7. Quiénes nos respaldan  
8. Más detalle de junta si hace falta (sigue siendo esta página la única)

## Contenido y CMS

Textos de la guía §3. Reescribir cualquier bloque que suene a La Bonanza. Personas reales o “[ejemplo]”. Año de fundación: confirmar antes de “+45” / “más de 50”.

## SEO

Title/description institucionales. Canonical. Un `h1`. Breadcrumbs. Organization puede reutilizarse o enlazarse desde Inicio.

## Criterios de aceptación

1. No hay copy calcado de competencia.  
2. Junta no se renderiza en otras rutas.  
3. Celular no carga timeline horizontal pesado ni grillas enormes de escritorio.  
4. Fotos de junta con `alt` obligatorio.
