# Asdeoccidente — Domain knowledge

Fuente única de producto: qué es, qué hacen, quiénes, datos, textos y cómo presentamos la escuela. Camino principal de contacto: WhatsApp. Fecha de referencia: 18 de noviembre de 2026.

**CMS (obligatorio):** todo texto, imagen, PDF, tarifa y menú editable vive en Sanity. El código no rellena seeds: sin documento publicado la sección/página queda vacía. PDFs en Studio; Directorio = un Excel por tipo → «Procesar Excel» → Publicar. Contacto/nav/formulario en `siteSettings` → grupo «Textos de interfaz».

Visual: [`docs/design/DESIGN.md`](../../design/DESIGN.md). Specs y build: `docs/specs/` y `docs/context/phase-*`.

**Regla de datos:** la KB + la guía de Studio son la **base publicable** (cada campo del CMS lleva un valor listo para pegar). Si un dato cambia después, se corrige en Sanity. Si dos fuentes chocan, se publica una base y la junta ajusta en Studio.

---

## 1. Qué es y para quién

Asociación de criadores y aficionados del caballo criollo colombiano en el Valle del Cauca. Escuela de chalanería, equinoterapia, ferias, registros de ejemplares y alquiler de sede.

Nombre largo (sitio): Asociación de Criadores de Caballos de Paso y Fomento Equino del Occidente.

**Quién llega y qué necesita**

| Quién | Necesidad |
| --- | --- |
| Quiere aprender a montar | Escuela de chalanería |
| Familia con necesidad terapéutica | Equinoterapia |
| Aficionado a ferias | Ferias |
| Criador o expositor | Registros · Hazte socio |
| Organiza un evento | Sede y eventos |

**Sede (canónica para UI)**  
Transversal 5 # 1 - 60, Recta Cali-Palmira, Corregimiento La Dolores, Palmira – Valle del Cauca.

**Variante mapa/Google (no usar como display principal):** Vereda La Dolores Lote No. 12, Recta Cali-Palmira, Cauca Seco, Cali, Valle del Cauca.

**Contacto general (página de contacto oficial)**  
PBX (+57)(2) 666 96 22 / 23 / 24 · Cel 318 666 96 22 / 318 269 86 93  
Correo: asdeoccidente@asdeoccidente.org.co  
Instagram: [@asdeoccidente.oficial](https://www.instagram.com/asdeoccidente.oficial/)  
YouTube: [@asdeoccidente.oficial](https://www.youtube.com/@asdeoccidente.oficial)  
TikTok: [@asdeoccidente](https://www.tiktok.com/@asdeoccidente?lang=es)  
WhatsApp principal (sitio): 573186669622  

**Directorio (contacto oficial)** — sección en `/directory` (fijo en código: `contact-team.ts`)

| | |
| --- | --- |
| **Título** | En que te podemos servir? |
| **Subtítulo** | Recuerda, Asdeoccidente Su Casa !!! |

| Rol | Nombre | Correo | Teléfono |
| --- | --- | --- | --- |
| Presidente | Diego Fernando García G. | presidencia@asdeoccidente.org.co | — |
| Director ejecutivo | María Luisa Daza Díaz | directorejecutivo@asdeoccidente.org.co | (+57) 318 397 4134 |
| Director comercial | Steet Achury Mendoza | comercial@asdeoccidente.org.co | (+57) 300 3223066 |
| Comunicaciones | Sofía Mera E. | comunicaciones@asdeoccidente.org.co | (+57) 311 437 7960 |
| Registros | Cristian Castro | registros@asdeoccidente.org.co | Cel. 318 666 96 22 · Tel. 032 666 96 22 Ext. 110 |
| Contadora | Nubia Avendaño | contabilidad@asdeoccidente.org.co | Cel. 318 666 93 22 · Tel. 032 666 96 22 Ext. 107 |
| Analista administrativa | Paola Andrea Martínez R. | asdeoccidente@asdeoccidente.org.co | (+57) 318 666 96 22 |
| Coordinador chalanería | Diego Fernando Hincapié | escueladechalaneria@asdeoccidente.org.co | (+57) 318 666 96 22 |

Datos globales de UI viven en Sanity (`siteSettings`). `.env` solo guarda URL del sitio y credenciales de Sanity.

---

## 2. Escuela de chalanería (foco fase 1)

Ruta: `/escuela-de-chalaneria`

### 2.1 Enfoque (cómo lo contamos)

La escuela no se vende como párrafo institucional. Se presenta así:

1. **Beneficio claro** — montas con un maestro a tu lado; aprendes con seguridad y método.
2. **Para quién** — niños, jóvenes y adultos; con o sin experiencia.
3. **Método** — clases **totalmente personalizadas** (un alumno con su instructor).
4. **Qué incluye** — matrícula (seguro, gorra, buzo) + en clase te dan caballo, montura y lo necesario.
5. **Primer paso** — primera clase gratuita → WhatsApp.
6. **Tarifas en palabras** — cada precio dice qué pack es (4 / 3 / 2 / 1 clases) y si es socio o no.
7. **Quién te enseña** — director y docentes visibles.
8. **Contacto** — WhatsApp / teléfono de informes de la escuela.

Prioridad del mensaje (orden de verdad): primero el caballo y montar bien; formar jinetes íntegros antes de empujar competencia.

### 2.2 Hechos de la escuela

| Hecho | Detalle | Fuente |
| --- | --- | --- |
| Clases | **Totalmente personalizadas** — seguimiento cercano, un alumno con su instructor | Confirmado (equipo) |
| Qué lleva el alumno | Actitud y ganas de aprender. **No** necesita traer caballo ni montura | Confirmado (equipo) + Agronegocios |
| Qué pone la escuela | Caballo, monturas, cascos y equipo necesario para la clase | Confirmado (equipo) |
| Matrícula incluye | **Seguro**, **gorra** y **buzo** de la escuela | Confirmado (equipo) |
| Primera clase | Gratuita | Sitio |
| Pensum (4 ejes) | Equilibrio, conducción, concentración, preparación física y técnica | Agronegocios `[por confirmar]` |
| Edades | Desde ~2 hasta ~59 años; agrupan por nivel/habilidad, no solo por edad | Agronegocios `[por confirmar]` |
| Evaluación previa | Clase de evaluación para ver disciplina, concentración y seguimiento de instrucciones | Agronegocios `[por confirmar]` — ¿es la misma que la clase gratis? |
| Profesores | Certificados Fedequinas; formación en primeros auxilios | Agronegocios `[por confirmar]` |
| Director | Diego Hincapié; acreditación MinDeporte como entrenador `[por confirmar]` | Sitio + Agronegocios |
| Docentes (sitio) | Rubén Aparicio, Yudi Mendoza, Yadi Sánchez | Sitio `[por confirmar]` vigencia |
| Alumnos / trayectoria | Sitio habla de “más de 200 alumnos” históricos; Agronegocios cita ~63 activos (ene 2026) | UI Home usa **+200** (histórico sitio) por decisión de producto 2026-11; Agronegocios ~63 sigue `[por confirmar]` si se quiere “activos” |
| Año en brand lockup | `Fomento equino del Valle · 1975` | Publicado en header/footer/Home stats “Desde 1975” (lockup de marca) |
| Google (listing) | **4,6** · **299** opiniones | Badge hero + cifra `299` (“Personas que nos recomiendan”); rating 4,6 solo en hero |
| Socios (UI Home) | **+180** | Provisional en franja cifras hasta confirmar con la asociación |
| Logros / nombres | Campeones y podios regionales/nacionales/internacionales citados en prensa | Agronegocios `[por confirmar]` antes de publicar nombres |

**Contacto escuela**  
Coordinador: Diego Fernando Hincapié · Cel (+57) 318 666 96 22 · escueladechalaneria@asdeoccidente.org.co

### 2.3 Tarifas

**Incluye matrícula (confirmado):** seguro + gorra + buzo de la escuela.

**Valores numéricos:** hay choque entre fuentes. Hasta confirmar 2026 con la escuela, **no fijar un solo número** en copy final.

#### A) Tabla publicada en el sitio actual `[por confirmar vigencia]`

**Clases personalizadas (mensualidad según cantidad de clases)**

| | 4 clases | 3 clases | 2 clases | 1 clase |
| --- | --- | --- | --- | --- |
| Socios | $310.000 | $234.000 | $156.000 | $80.000 |
| No socios | $345.000 | $261.000 | $174.000 | $90.000 |
| Hijo de montador o funcionario OCC | $173.000 | $130.000 | $87.000 | $90.000 |

El sitio también lista una fila “clases grupales” con otros montos. **Para el producto nuevo el mensaje es clases totalmente personalizadas**; no empujar “grupales” hasta que la escuela diga si esa fila sigue vigente o se retira.

**Matrícula (sitio):** $100.000 (socios / no socios / hijo montador).  
**Renovación alumnos nuevos después de un año (sitio):** socios/no socios $50.000 — la fila “hijo de montador $500.000” en el sitio parece error tipográfico `[por confirmar]`.

#### B) Cifras citadas en Agronegocios (valores 2025; ene 2026) `[por confirmar]`

- Matrícula alrededor de $165.000 (uniforme + seguro, según la nota)
- Plan básico 4 clases al mes ≈ $350.000

**Acción:** pedir tabla oficial 2026 alineada con “matrícula = seguro + gorra + buzo” y solo packs personalizados.

### 2.4 Copy de la página Escuela

**Dirección elegida (recomendada):** seguridad + clase personalizada + todo incluido + primera clase gratis.

| | |
| --- | --- |
| **Título** | Aprende a montar con un maestro solo para ti. |
| **Subtítulo** | Clases totalmente personalizadas para niños y adultos. Traemos el caballo, la montura y el equipo; tú llegas con ganas. Tu primera clase es gratis. |
| **Botón** | Quiero mi clase gratis |
| **Apoyo corto** | La matrícula incluye seguro, gorra y buzo de la escuela. |

**Variantes (si se prueba otro ángulo)**

| Ángulo | Título | Subtítulo |
| --- | --- | --- |
| Formación integral | Forma equilibrio, conducción y confianza en cada clase. | Un pensum claro y un instructor a tu lado. Caballo y equipo los pone la escuela. |
| Comunidad / Valle | Empieza tu camino de chalanería en el Valle del Cauca. | De la primera clase a la pista, con maestros que te acompañan uno a uno. |

**Microcopy útil en Escuela**

- “¿La clase es para ti o para otra persona?”
- “No necesitas caballo ni montura: te los damos en cada clase.”
- “La matrícula incluye seguro, gorra y buzo.”
- Confirmación: “¡Gracias, {nombre}! Recibimos tu mensaje. Te escribimos por WhatsApp en un día hábil para agendar tu clase gratis.”

### 2.5 Bloques recomendados de la página Escuela

Misma URL en celular y escritorio; celular con menos secciones.

**Celular**

1. Hero (título, subtítulo, CTA clase gratis)
2. Para quién (edades / sin experiencia)
3. Cómo es una clase (personalizada + qué incluye el equipo)
4. Matrícula: qué incluye (seguro, gorra, buzo)
5. Tarifas en pestañas o lista clara (packs en palabras)
6. Qué llevar / qué no hace falta
7. Preguntas frecuentes (acordeón)
8. WhatsApp fijo

**Escritorio suma**

- Director y docentes (foto + nombre cuando estén confirmados)
- Testimonios o logros solo con datos aprobados
- Nota bajo tarifas (socio vs no socio en lenguaje claro)

**No va aquí:** mapa largo de sede, junta completa, Instagram en el primer pintado, promesas de competencia garantizada.

---

## 3. Otras páginas fase 1 (copy base)

### Inicio `/`

| | |
| --- | --- |
| **Título** | Aprende, compite y celebra con el caballo criollo colombiano. |
| **Subtítulo** | Clases de chalanería personalizadas para niños y adultos, y ferias en el Valle del Cauca. Te acompañamos desde el primer paso. |
| **Botones** | Quiero mi clase gratis (WhatsApp escuela) · Ver el próximo evento (`/events`) — ambos en Sanity `home.hero` |

**Bloques de la página (orden):**

1. Hero — banner, Google opiniones + Fedequinas, título, subtítulo, CTAs  
2. Esencia — cuatro beats + mosaico fotográfico  
3. Cifras — 1975 · +200 alumnos · opiniones Google · +180 socios  
4. Servicios — tarjetas CMS (escuela, trámites, equinoterapia, alquiler, socios, directorio)  
5. Galería — carrusel de fotos  
6. Reseñas — testimonios CMS  
7. Videos — hasta cuatro reels (marco 9:16)  
8. Contacto y ubicación (layout) — mapa + video cómo llegar + mini formulario correo  
9. Pie — dirección, teléfonos, WhatsApp, redes  

**Histórico:** la sección “Cuatro andares” ya no va en Home.  
**No va aquí:** tarifas completas, junta, “¿Qué quieres hacer?”, detalle de instalaciones.

### Nosotros `/about` (diferido)

| | |
| --- | --- |
| **Título** | Somos una comunidad de criadores, jinetes y familias. |
| **Subtítulo** | Desde 1975 cuidamos y promovemos el caballo criollo colombiano en el Valle del Cauca. `[por confirmar año de fundación]` |
| **Regla** | La junta completa solo vive aquí. Voz propia. Ruta y nav comentadas hasta que exista el spec. |

### Eventos `/events` (+ `/events/[slug]`)

| | |
| --- | --- |
| **Título (ejemplo de evento)** | XXXIV Copa América Equina · 29 de octubre al 1 de noviembre. `[ajustar fechas]` |
| **Subtítulo** | Cuatro días de competencia y ambiente de feria. Entradas desde $10.000. `[por confirmar]` |
| **Botones** | Ver entradas · Inscribir mi ejemplar |
| **Regla** | Listado con hero de evento destacado **o** banner de `eventsPage` si no hay calendario. Detalle por slug. Sin ruta `/fairs`. |

### Ofertas (fase 1 specs / stubs; hechos cortos)

| Oferta | Ruta app | Nota |
| --- | --- | --- |
| Servicios (registros/trámites) | `/services` | Secciones con tarifas socio/no socio + PDFs (base en guía Studio; editar en Sanity si cambian) |
| Equinoterapia | `/equinotherapy` | Sin promesas de cura; lenguaje médico validado por terapeutas. |
| Socios | `/membership` | Quiénes somos, misión/visión, ser socio, ser afiliado, costos, requisitos + formato. CTA “Quiero ser socio”. |
| Alquiler sede | `/venue` | Cotización por WhatsApp (mensaje sede). Espacios y medidas abajo. |
| Directorio equino | `/directory` | Excel por tipo → tabla con scroll; debajo, equipo de contacto (8 cards fijas en `contact-team.ts`). |

#### Socios / afiliación (`/membership`)

Seed de producto (editable en Sanity `membershipPage`).

**Quiénes somos**  
Fundada en 1975, más de 45 años trabajando en pro del caballo criollo colombiano. Asociación sin ánimo de lucro que promueve la cría, el desarrollo y la cultura del caballo criollo colombiano en el Valle del Cauca.

**Visión (Objetivo en mockup)**  
Promover, desarrollar y mejorar la raza del caballo criollo colombiano, fortaleciendo a criadores y aficionados.

**Misión**  
Representar a los criadores y promover la cultura y la pasión por el caballo criollo colombiano a través de servicios, eventos y comunidad.

**Ser socio — derechos / beneficios (seed)**

1. Voz y voto en las asambleas de la asociación  
2. Elegir y ser elegido para cargos directivos  
3. Uso de las instalaciones de la sede según reglamento  
4. Participar en eventos y competencias oficiales  
5. Acceso preferente a registros y trámites  
6. Tarifas preferenciales en escuela y servicios  
7. Representación gremial ante Fedequinas y entidades afines  
8. Recibir información y comunicados de la asociación  
9. Participar en actividades formativas y culturales  
10. Uso del departamento veterinario según disponibilidad  
11. Categorías de socio (incl. vitalicio) según reglamento interno  

**Ser afiliado — beneficios (seed)**

1. Registro de ejemplares ante la asociación  
2. Uso del departamento veterinario  
3. Participación en eventos y ferias  
4. Acceso a trámites de registros y homologaciones  
5. Información de la asociación y agenda  
6. Condiciones preferenciales en servicios según categoría  

**Costos (seed UI)**

| Tipo | Cuota de sostenimiento | Valor |
| --- | --- | --- |
| Afiliado | $0 | $0 |
| Socio | $0 | $0 |
| Socio afiliado | $1.500.000 | $5.000.000 |
| Socio vitalicio | $1.500.000 | Traspasable |

**Requisitos**

- Diligenciar el formato de Asdeoccidente con dos registros originales  
- Presentar dos cartas de recomendación de socios de Asdeoccidente  
- El ingreso está sujeto a aprobación por la junta directiva en el mes en curso  
- Copia de la C.C.  

**Hero:** Fedequinas arriba · título “Quiero ser socio” · subtítulo “Únete a la casa del caballo criollo colombiano. Beneficios, voz en la asociación y comunidad.”  
**CTA:** Quiero ser socio → WhatsApp tema `membership`. Botón de descarga del formato PDF (archivo en Sanity).

#### Alquiler sede — espacios (medidas confirmadas)

| Lugar | Medidas |
| --- | --- |
| Coliseo Principal | 1250 m² |
| Coliseo Alterno | 546 m² |
| Salón Nelson Garcés | 425 m² |
| Parqueadero | ~800 vehículos |
| Zonas verdes | ~600 m² aprox. c/u |

**Cotización:** WhatsApp principal del sitio + mensaje sede. Contacto comercial (KB directorio): Steet Achury Mendoza · (+57) 300 3223066 · comercial@asdeoccidente.org.co.

**Copy UI de espacios:** descripciones cortas de producto en Sanity (medidas confirmadas arriba). Cotización por WhatsApp (sin lista de precios de alquiler en la web).

**Aún diferido:** página About; tarifas de alquiler de sede en el sitio (cotización WhatsApp).

---

## 4. Voz y textos

- Habla de la persona, no de la institución. Tutea.
- Frases de máximo 20 palabras. Botones en primera persona (“Quiero mi clase gratis”).
- Cada cifra con contexto. Antes de un formulario, di qué pasa después.
- Mayúsculas solo en etiquetas pequeñas. Botones en mayúscula inicial.

| Evitar | Preferir |
| --- | --- |
| Radicar solicitud | Envíanos tu solicitud |
| Trámites genealógicos | Registra a tu ejemplar |
| Hitos que forjaron nuestro gremio | Nuestra historia |
| Garantía institucional / Avales oficiales | Quiénes nos respaldan |
| Portafolio institucional | Qué puedes hacer en Asdeoccidente |
| Postular como socio | Quiero ser socio |
| Palco Diamante (10 pax) | Palco para 10 personas |
| Tarifa Socio / No Socio | Precio para socios · Precio para público general |
| Clases grupales *(si ya no aplican)* | Clases personalizadas |

**Microcopy general**

- Campos: “¿Cómo te llamas?”, “¿A qué número te escribimos por WhatsApp?”
- Casilla: “Acepto que Asdeoccidente use mis datos para contactarme. Ver política de datos.” (Ley 1581; si el alumno es menor, datos del acudiente.)
- Error: “Revisa tu número: parece que falta un dígito.”

**WhatsApp por tema (mensaje ya escrito)**

| Tema | Mensaje |
| --- | --- |
| Escuela | Hola, quiero información sobre la clase gratis de chalanería. |
| Ferias | Hola, quiero información sobre entradas y palcos para la Copa América Equina. |
| Registros | Hola, tengo una consulta sobre registros y trámites de ejemplares. |
| Sede | Hola, quiero cotizar un evento en la sede. |
| Socios | Hola, quiero información para ser socio de Asdeoccidente. |
| General | Hola, quiero hacer una consulta. |

---

## 5. Criterios de copy (base CMS)

| Riesgo | Qué hacer |
| --- | --- |
| Precios distintos entre fuentes | Publicar la base de la guía Studio; corregir en Sanity si la junta cambia un monto |
| Decir “grupales” si el producto es personalizado | Usar “clases totalmente personalizadas” |
| Matrícula sin decir qué incluye | Siempre: seguro, gorra y buzo |
| “Trae tu equipo” | No: la escuela pone caballo, montura y equipo |
| Programación de eventos | Pegar la base del calendario en la guía; ajustar fechas en Studio si el afiche cambia |
| Mapas o videos | Pegar URL/archivo en Configuración general (base en la guía) |

Los ajustes posteriores (horarios finos, fotos nuevas de docentes, montos 2026 actualizados) se hacen **editando y publicando en Studio**, no dejando campos vacíos.

---

## 6. Redes

Objetivo: pasar seguidores de Instagram al sitio (enlace de la bio). Pilares: educativo, detrás de cámaras, eventos, testimonios, cupos. Medir clics a la bio y visitas desde Instagram.
