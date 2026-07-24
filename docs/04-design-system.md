# 04 — Design System

Build this in Figma **before** touching hi-fi screens. Create it on a dedicated `🎨 UI Kit` page in your Figma file, and use Figma's Styles feature (color swatch → 4-dot icon → Create Style) so every value below is reusable and updates everywhere at once.

---

## 4.1 Color Palette

Keeps Pag-IBIG's recognizable navy/blue brand identity (so it still feels trustworthy and official) but fixes the contrast and semantic-meaning gaps in the current product.

| Token | Hex | Use |
|---|---|---|
| `Primary/900` | `#0B2C6B` | Headers, primary nav background, main brand color |
| `Primary/700` | `#1B5FAE` | Primary buttons, links, active states |
| `Primary/100` | `#E8F0FB` | Light backgrounds, selected/hover states |
| `Accent/Gold` | `#FDB913` | Sparingly — highlights, badges, the Pag-IBIG logo accent color |
| `Success/600` | `#2E7D32` | "Posted," "Verified," "Active" status |
| `Success/100` | `#E8F5E9` | Success badge background |
| `Warning/600` | `#F9A825` | "Pending," "Processing" status |
| `Warning/100` | `#FFF8E1` | Warning badge background |
| `Error/600` | `#D32F2F` | "Issue detected," failed states — used sparingly and never for routine security messages (fixes the "alarming failed login" issue) |
| `Error/100` | `#FDECEA` | Error badge background |
| `Neutral/900` | `#1A1A1A` | Primary text |
| `Neutral/600` | `#5F6368` | Secondary text, captions |
| `Neutral/300` | `#D1D5DB` | Borders, dividers |
| `Neutral/100` | `#F5F6F8` | Page background |
| `White` | `#FFFFFF` | Cards, surfaces |

**Contrast check:** verify all text/background pairs at [webaim.org/resources/contrastchecker](https://webaim.org/resources/contrastchecker/) — aim for AA minimum (4.5:1 for body text).

**Key rule this redesign introduces:** read-only data fields get a distinct neutral style (`Neutral/100` background, no border) — visually different from actual input fields (`White` background, `Neutral/300` border) — this directly fixes heuristic issue #8.

---

## 4.2 Typography

**Font family:** [Inter](https://fonts.google.com/specimen/Inter) (free on Google Fonts, available directly in Figma) — clean, highly legible at small sizes, good for both Filipino and English text, works well on low-end Android devices common among the user base.

| Style | Size | Weight | Use |
|---|---|---|---|
| `H1` | 28px | Bold (700) | Page titles (fixes the "no page title" issue) |
| `H2` | 20px | Semibold (600) | Section headers |
| `H3` | 16px | Semibold (600) | Card titles |
| `Body` | 14px | Regular (400) | Default text |
| `Body/Bold` | 14px | Semibold (600) | Emphasized values (e.g., peso amounts) |
| `Caption` | 12px | Regular (400) | Timestamps, helper text |
| `Label` | 12px | Medium (500), uppercase, letter-spacing 0.5px | Field labels above data rows |

Line height: 1.4x font size for body text, 1.2x for headings.

---

## 4.3 Spacing & Layout

- Base unit: **8px grid** (all spacing/padding in multiples of 8: 8, 16, 24, 32, 40...)
- Mobile app frame: 390×844 (iPhone 14/15 baseline)
- Web frame: 1440×1024 desktop, with a defined content max-width of 1200px centered
- Card padding: 16px mobile, 24px desktop
- Section spacing: 24px mobile, 32px desktop

---

## 4.4 Iconography

Pick **one** icon set and use it everywhere — this fixes heuristic issue #6 (inconsistent icon language between sidebar text and app icon grid).

- Recommended: [Lucide Icons](https://lucide.dev) (free, consistent stroke width, available as a Figma plugin/asset) or [Phosphor Icons](https://phosphoricons.com)
- Use **outline style** consistently (not a mix of outline + filled + wordmarks like the current MP2 logo-as-icon)
- Standard stroke width: 1.5–2px
- Icon size: 24px in navigation, 20px inline with text

---

## 4.5 Core Components to Build

Build each once as a Figma Component (select layers → right-click → Create Component, or `Cmd/Ctrl+Alt+K`):

1. **Page Header** — title (H1) + optional breadcrumb + optional back button. Every screen uses this. *(Fixes issue #1)*
2. **Masked Data Field** — shows `••••••1249` by default with an eye icon to reveal. *(Fixes issue #2)*
3. **Security Status Card** — neutral-toned, dismissible, plain-language wording (e.g., "Your account is secure. Last successful login: July 11, 2:42 PM" — never lead with failure info). *(Fixes issue #3)*
4. **Read-only Info Row** — label + value, `Neutral/100` background, no border, no input-like styling. *(Fixes issue #8)*
5. **Task Card/Tile** — icon + title + action verb badge ("View" / "Apply" / "Manage"), grouped by task type in layout. *(Fixes issue #7)*
6. **Status Badge** — pill shape using Success/Warning/Error tokens + plain-language label
7. **Primary/Secondary Button**
8. **Input Field** (text, dropdown, date picker) — visually distinct from the read-only row above
9. **Docked Chat Widget** — fixed corner position, collapsible, never overlapping primary content. *(Fixes issue #5)*
10. **Bottom Nav Bar (mobile)** — icon + always-visible text label under each icon. *(Fixes issue #11)*
