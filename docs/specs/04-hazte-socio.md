# Spec: Hazte socio

> Estado: **abierto**. Depende de `00`.

## Identificación

| Campo | Valor |
| --- | --- |
| Id | `04` |
| Proyecto | `web` |
| Dependencias | `00` |
| Ruta | `/hazte-socio` |

## Objetivo

Dos membresías claras, cuatro pasos y un formulario corto (o WhatsApp). En celular apiladas; en escritorio, comparación lado a lado.

## Resultado esperado

Página con beneficios y precios desde tarifas `membresia` (o campos del singleton si se define así). Sin duplicar tabla de trámites.

## Alcance

Hero, dos membresías, pasos de admisión, CTA / formulario corto, contacto de quien resuelve dudas.

## Fuera de alcance

Tarifas de registros/traspasos (van a Registros). Pago en línea (fase 3). Carné digital.

## Celular

1. Hero + CTA  
2. Membresía A (completa)  
3. Membresía B (completa)  
4. Cuatro pasos  
5. Formulario corto o “Escríbele a {nombre}” por WhatsApp  

## Escritorio

Misma información: las dos membresías **en una tabla lado a lado** (o dos columnas). Formulario corto visible sin scroll excesivo.

## Contenido y CMS

Textos de la guía §3. Precios y beneficios confirmados o “[ejemplo]”. Explicar descuentos en una frase si se muestran. Tags: documento de página + `tarifa` + `configuracion`.

## SEO

Title/description de la guía. Canonical. Un `h1`. Breadcrumbs.

## Criterios de aceptación

1. No aparecen precios de registro/traspaso en esta página.  
2. En móvil las membresías no quedan en una tabla ancha ilegible.  
3. Casilla de tratamiento de datos si hay formulario.  
4. CTA principal en primera persona (“Quiero ser socio”).
