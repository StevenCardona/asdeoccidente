# Spec: School (phase 1)

> Status: **open**  
> Path: `/school`  
> Domain: [`../../context/knowledge-base/asdeoccidente.md`](../../context/knowledge-base/asdeoccidente.md) § Escuela

## Identification

| Field | Value |
| --- | --- |
| Id | `school` |
| Phase | 1 |
| Depends on | `foundation` (ideally after `home`) |
| Feature folder | `features/school` |

## Goal

Convert interest into a free first class via WhatsApp. Explain personalized teaching, what enrollment includes, and what the school provides — with institutional clarity, no invented prices.

## Expected result

- Page `/school` with sections below
- Primary CTA: Quiero mi clase gratis → WhatsApp school template
- Fees shown only with confirmed numbers; otherwise structure + `[por confirmar]` in CMS draft, hidden or labeled in prod
- Skeletons; shared UI; layout ContactLocation/Footer unchanged
- SEO for `/school`

## Scope / out of scope

**In:** school story, method, inclusions, FAQ, staff if confirmed, fee tables when confirmed.

**Out:** About, full map (global ContactLocation handles location), chatbot, promising competition titles without approval.

## Copy base (KB recommended)

| | |
| --- | --- |
| **Title** | Aprende a montar con un maestro solo para ti. |
| **Subtitle** | Clases totalmente personalizadas para niños y adultos. Traemos el caballo, la montura y el equipo; tú llegas con ganas. Tu primera clase es gratis. |
| **Button** | Quiero mi clase gratis |
| **Support** | La matrícula incluye seguro, gorra y buzo de la escuela. |

## Confirmed facts (must appear)

- Classes are **fully personalized** (one student with instructor)
- School provides horse, saddle, and needed equipment
- Student brings attitude — not horse/saddle
- Enrollment includes **insurance, cap (gorra), and school hoodie (buzo)**
- First class free (site)

## Sections

### Mobile (priority)

1. **Hero** — title, subtitle, CTA
2. **Para quién** — children, youth, adults; with/without experience (ages `[por confirmar]` if used)
3. **Cómo es la clase** — personalized method; optional 4 axes if confirmed (equilibrio, conducción, concentración, preparación física y técnica)
4. **Matrícula incluye** — seguro, gorra, buzo (icons Lucide, same style)
5. **Equipo incluido** — caballo, montura, casco/equipo
6. **Tarifas** — packs in words (4/3/2/1); socio vs no socio wording; **numbers only if confirmed 2026**
7. **Qué llevar / qué no** — short list
8. **FAQ** — accordion (shared component)
9. Sticky or recurring WhatsApp CTA

### Desktop adds

- Director / teachers (Diego Hincapié; Rubén Aparicio, Yudi Mendoza, Yadi Sánchez) — photos only when approved
- Note under fees clarifying packs
- Optional testimonials if approved

## Fees note

KB has conflicting site vs Agronegocios figures. Until the association signs off 2026:

- UI can show fee **structure** (personalized packs)
- Do not hardcode contested amounts in production copy
- Prefer single CMS fee table read by this page only

## CMS

| Field | Notes |
| --- | --- |
| hero*, cta | |
| audience, method, enrollmentIncludes[], equipmentIncludes[] | |
| feeTable | rows; publish flag |
| faq[] | |
| staff[] | name, role, photo, bio short |
| seo | |

## SEO

- One h1; title/description emphasizing chalanería personalizada + clase gratis
- No medical/cure claims

## Acceptance criteria

- [ ] Free-class WhatsApp path works with school message
- [ ] Enrollment inclusions (seguro, gorra, buzo) visible
- [ ] Personalized classes + school-provided horse/equipment clear
- [ ] No unverified fee numbers in prod
- [ ] Shared components only; skeletons on load
- [ ] ContactLocation not duplicated
