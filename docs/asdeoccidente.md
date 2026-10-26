# Asdeoccidente — Fuente de producto

Sitio claro, humano y profesional. La asociación edita sin tocar código. El camino principal es WhatsApp. Fecha de referencia: 23 de octubre de 2026.

**Jerarquía:** este archivo manda en producto y textos. Lo visual sigue [`design/DESIGN.md`](design/DESIGN.md). Stack, carpetas, paquetes y SEO técnico viven en [`context/architecture.md`](context/architecture.md). Secuencia de trabajo: [`context/build-plan.md`](context/build-plan.md).

---

## 1. Qué es y para quién

Asociación de criadores y aficionados del caballo criollo colombiano en el Valle del Cauca. Escuela de chalanería, equinoterapia, ferias, registros de ejemplares y alquiler de sede.

**Cinco entradas según quién llega**

| Quién | Página |
| --- | --- |
| Quiere aprender a montar | Escuela de chalanería |
| Familia con necesidad terapéutica | Equinoterapia |
| Aficionado a ferias | Ferias |
| Criador o expositor | Registros · Hazte socio |
| Organiza un evento | Sede y eventos |

**Por qué reconstruir.** El WordPress actual (BeTheme, Elementor, Slider Revolution, PHP 7.4) está desactualizado. Se conserva el dominio, el posicionamiento en Google y las analíticas. Se cambia el hosting a Vercel.

---

## 2. Fases de producto

| Fase | Entrega |
| --- | --- |
| 0 | Prototipo de diseño (hecho) |
| 1 | Sitio nuevo: Next.js + Sanity, páginas informativas, SEO |
| 2 | Chatbot básico: árbol de botones y aviso a la asesora por WhatsApp |
| 3 | Pagos del curso, base de alumnos, bot con IA |

Esta documentación y los specs cubren la **fase 1**, página por página. Chatbot y redes: apartado 9.

---

## 3. Páginas

Misma URL en celular y escritorio. El celular lleva menos secciones. Detalle de implementación: `docs/specs/`.

### Inicio `/`

| | |
| --- | --- |
| **Título** | Aprende, compite y celebra con el caballo criollo colombiano. |
| **Subtítulo** | Clases de chalanería para niños y adultos, ferias en el Valle del Cauca y trámites para tu ejemplar. Te acompañamos desde el primer paso. |
| **Botones** | Quiero mi clase gratis · Ver la próxima feria |
| **Celular** | Hero, dos botones, próximo evento (desde el CMS), tarjetas “¿Qué quieres hacer hoy?” |
| **Escritorio suma** | Escuela en breve, hasta 3 testimonios, cifras (una sola vez), una línea de ubicación |
| **No va aquí** | Tarifas, junta completa, detalle de instalaciones, Instagram en el primer pintado |

### Escuela `/escuela-de-chalaneria`

| | |
| --- | --- |
| **Título** | Aprende a montar con maestros que te acompañan en cada clase. |
| **Subtítulo** | Para niños y adultos, sin experiencia previa. Tu primera clase es gratis y te contamos exactamente qué llevar. |
| **Botón** | Quiero mi clase gratis |
| **Celular** | Hero, clase gratis, para quién (niveles), 3 pasos de la primera clase, tarifas en pestañas, qué llevar y preguntas en acordeón, WhatsApp fijo |
| **Escritorio suma** | Maestros, testimonios, nota bajo tarifas |
| **No va aquí** | Mapa, video “cómo llegar”, junta |

### Equinoterapia `/equinoterapia`

| | |
| --- | --- |
| **Título** | Terapia con caballos, acompañada por profesionales. |
| **Subtítulo** | Un espacio pensado para niños y adultos que necesitan apoyo en su desarrollo físico, emocional o social. |
| **Botón** | Hablar con la asesora |
| **Celular** | A quién va, cómo es una sesión, WhatsApp |
| **Escritorio suma** | Quién la dirige (con foto, cuando esté confirmado) |
| **Regla** | Sin promesas de cura. Beneficios y lenguaje médico los validan los terapeutas. |

### Ferias `/ferias`

| | |
| --- | --- |
| **Título** | XXXIV Copa América Equina · 29 de octubre al 1 de noviembre. *(ajustar fechas desde el CMS)* |
| **Subtítulo** | Cuatro días de competencia y ambiente de feria. Entradas desde $10.000. |
| **Botones** | Ver entradas · Inscribir mi ejemplar |
| **Celular** | Próximo evento arriba, pestañas “Voy a ver” / “Participo”, programación por día, entrada general primero y luego palcos |
| **Escritorio suma** | Calendario anual, requisitos ICA, resultados, cómo llegar |
| **Regla** | Cuenta regresiva desde `fechaInicio` del evento. Mostrar “Última actualización”. |

### Hazte socio `/hazte-socio`

| | |
| --- | --- |
| **Título** | Hazte socio y ahorra en todo lo que ya haces aquí. |
| **Subtítulo** | Descuentos en clases, registros y ferias, y voz en las decisiones de la asociación. |
| **Botón** | Quiero ser socio |
| **Celular** | Dos membresías una bajo la otra, 4 pasos, formulario corto |
| **Escritorio** | Misma comparación en tabla lado a lado |
| **No va aquí** | Tarifas de trámites (van a Registros) |

### Registros `/registros-y-tramites`

| | |
| --- | --- |
| **Título** | Registra a tu ejemplar sin vueltas. |
| **Subtítulo** | Registro, traspaso, prueba de ADN y duplicado. Te decimos cuánto cuesta, cuánto demora y qué papeles necesitas. |
| **Botón** | Iniciar mi trámite |
| **Celular** | Qué trámite, precio, demora, papeles |
| **Escritorio** | Misma tabla con más detalle |
| **Regla** | Una sola tabla de tarifas en el CMS; esta página la lee, no la duplica. |

### Sede y eventos `/sede-y-eventos`

| | |
| --- | --- |
| **Título** | Celebra en nuestra sede campestre. |
| **Subtítulo** | Bodas, ferias y reuniones con coliseo, salón y parqueadero. Cuéntanos qué tienes en mente y te cotizamos. |
| **Botón** | Quiero una cotización |
| **Celular** | Tres instalaciones, botón de cotización |
| **Escritorio suma** | Resto de espacios, video de llegada (carga al tocarlo) |

### Nosotros `/nosotros`

| | |
| --- | --- |
| **Título** | Somos una comunidad de criadores, jinetes y familias. |
| **Subtítulo** | Desde 1975 cuidamos y promovemos el caballo criollo colombiano en el Valle del Cauca. *(confirmar el año)* |
| **Celular** | Quiénes somos, cifras, hitos, junta en corto |
| **Escritorio suma** | Historia, respaldos oficiales |
| **Regla** | La junta completa solo vive aquí. Texto con voz propia; no copiar manifiestos de la competencia. |

### Contacto `/contacto`

| | |
| --- | --- |
| **Título** | ¿Hablamos? |
| **Subtítulo** | Elige el tema y escríbenos por WhatsApp. Te respondemos en un día hábil. |
| **Celular y escritorio** | Formulario largo (único en el sitio), mapa, WhatsApp por tema |

**Fuera de fase 1:** directorio equino, tienda, portal de trámites vacío. Resultados van como pestaña en Ferias. Noticias, página simple dentro de Nosotros si hace falta.

---

## 4. Voz y textos

- Habla de la persona, no de la institución. Tutea.
- Frases de máximo 20 palabras. Botones en primera persona (“Quiero mi clase gratis”).
- Cada cifra con contexto. Antes de un formulario, di qué pasa después.
- Mayúsculas solo en etiquetas pequeñas. Botones en mayúscula inicial, no en mayúsculas sostenidas.

| Hoy (evitar) | Mejor |
| --- | --- |
| Radicar solicitud | Envíanos tu solicitud |
| Trámites genealógicos | Registra a tu ejemplar |
| Hitos que forjaron nuestro gremio | Nuestra historia |
| Garantía institucional / Avales oficiales | Quiénes nos respaldan |
| Portafolio institucional | Qué puedes hacer en Asdeoccidente |
| Postular como socio | Quiero ser socio |
| Palco Diamante (10 pax) | Palco para 10 personas |
| Tarifa Socio / No Socio | Precio para socios · Precio para público general |

**Microcopy**

- Campos: “¿Cómo te llamas?”, “¿A qué número te escribimos por WhatsApp?”, “¿La clase es para ti o para otra persona?”
- Casilla obligatoria: “Acepto que Asdeoccidente use mis datos para contactarme. Ver política de datos.” (Ley 1581; si el alumno es menor, datos del acudiente.)
- Confirmación: “¡Gracias, {nombre}! Recibimos tu mensaje. {asesora} te escribirá por WhatsApp en un día hábil.”
- Error: “Revisa tu número: parece que falta un dígito.”

**WhatsApp por tema (mensaje ya escrito)**

| Tema | Mensaje |
| --- | --- |
| Escuela | Hola, quiero información sobre la clase gratis de chalanería. |
| Ferias | Hola, quiero información sobre entradas y palcos para la Copa América Equina. |
| Registros | Hola, tengo una consulta sobre registros y trámites de ejemplares. |
| Sede | Hola, quiero cotizar un evento en la sede. |
| General | Hola, quiero hacer una consulta. |

---

## 5. Datos que no se inventan

Un dato equivocado visto por la junta quita credibilidad. Lo no confirmado se marca “[ejemplo]”.

| Problema | Qué hacer |
| --- | --- |
| Cuenta regresiva escrita a mano (ej. “184 días”) | Calcular desde la fecha del evento en el CMS |
| Programación distinta al afiche / Instagram | Copiar del afiche oficial; mostrar “Última actualización” |
| Solo palcos; falta entrada general; nombre incompleto | Entrada general primero. Nombre: **XXXIV Copa América Equina** |
| Sede con 5 km y nombres distintos | Un solo nombre y una sola dirección en Configuración general |
| Mismo precio = “16 clases” en móvil y “4” en escritorio | Una tabla de tarifas; cada precio explica qué incluye en palabras |
| Tarifas de socios / ferias / registros distintas entre páginas | Una sola tabla en el CMS; todas las páginas la leen |
| “+45 años” con fundación 1975 | Confirmar año; preferir “más de 50 años” si aplica |
| Textos parecidos a La Bonanza | Reescribir con voz propia |
| Nombres, correos y fotos sin confirmar | Verificar; marcar “[ejemplo]” hasta tener datos reales |
| Mapas / videos vacíos | Mapa real o quitar el bloque |
| “12.000 aficionados” vs aforo “4.000” | Aclarar: asistentes de toda la feria vs capacidad del coliseo |

**Teléfonos del sitio actual (confirmar):** PBX (2) 666 96 22/23/24 · 318 666 9622 · 318 269 8693.

---

## 6. Qué pedirles

| A quién | Qué |
| --- | --- |
| Profesores de chalanería | Niveles (edades, duración, cupo, tipo de caballo), precios y qué incluye cada uno en palabras, matrícula y seguro, requisitos, horarios, certificado, qué llevar, fotos y videos reales, testimonios |
| Equinoterapia | A quién va, cómo es una sesión, precio, certificado médico, quién la dirige (con foto) |
| Eventos y sede | Programación oficial de la Copa, entradas generales, qué incluye el alquiler y tarifas, anticipación para reservar, fechas ocupadas |
| Junta | Dirección oficial y un solo nombre de sede, año de fundación, correo y teléfonos reales, asesora por tema y WhatsApp, quién aprueba contenido, NIT y cuenta (fase 3), cómo manejan hoy inscritos |

---

## 7. Navegación

**Escritorio:** Inicio · Escuela ▾ (Chalanería, Equinoterapia) · Ferias · Criadores y socios ▾ (Registros y trámites, Hazte socio) · Sede y eventos · Nosotros · **[Escríbenos por WhatsApp]**

**Celular (barra inferior, 5 ítems):** Inicio · Escuela · Ferias · Socios · Más. “Más” abre Equinoterapia, Registros, Sede, Nosotros y Contacto. WhatsApp fijo encima de la barra.

---

## 8. Orden de trabajo

1. Completar docs y specs (esta entrega).
2. Pedir la información de la sección 6.
3. Fundación del proyecto (spec `00`): app, layout, navegación, SEO base, Sanity.
4. Páginas en orden: Inicio → Escuela → Ferias → Hazte socio → Nosotros → Sede → Registros → Equinoterapia → Contacto.
5. Redirecciones 301 desde WordPress, velocidad en móvil, pruebas con la junta, capacitación del administrador.
6. Lanzamiento: DNS al dominio actual (no cambiar de dominio), Search Console, GA4.
7. Después: chatbot (fase 2) y pagos (fase 3).

**Migración:** construir en URL de pruebas de Vercel (no indexable) mientras WordPress sigue en línea. El día del lanzamiento, apuntar el DNS del dominio actual a Vercel.

---

## 9. Después del sitio (resumen)

**Chatbot (fase 2).** El usuario elige botones, sin texto libre. Respuestas escritas por nosotros. Si quiere algo personalizado, abre WhatsApp con el mensaje del tema. Sin IA ni base de datos al inicio.

**Redes.** Objetivo: pasar seguidores de Instagram al sitio (enlace de la bio con UTM). Pilares: educativo, detrás de cámaras, eventos, testimonios, cupos. Medir clics a la bio y visitas desde Instagram.

**Manual del administrador (fase 1, al cerrar).** Entrar a `/studio`, editar, Publicar. Tarifas en un solo lugar. Fotos con texto alternativo. No tocar Configuración general sin avisar.
