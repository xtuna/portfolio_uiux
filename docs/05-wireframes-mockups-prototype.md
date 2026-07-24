# 05 — Wireframes → Mockups → Prototype

All in Figma. Set up pages: `🧱 Wireframes — App`, `🧱 Wireframes — Web`, `📱 Hi-Fi Screens`, `🔗 Prototype`.

---

## 5.1 Low-Fidelity Wireframes

**Purpose:** test structure and flow before committing to visuals. Gray boxes, no color, one font weight, straight-line placeholders for text.

### App wireframes (6 screens)
Frame preset: **iPhone 14/15, 390×844**

1. **Login / Onboarding** — calm, no alarming banners
2. **Home/Dashboard** — labeled header + at-a-glance summary card (total savings + loan status in one glance — the current app never shows this)
3. **Savings Detail** — clearly separated read-only rows
4. **Loans** — grouped "My Active Loans" vs. "Apply for a New Loan"
5. **Account/Profile** — masked MID with reveal control, reframed security section
6. **Help & Report an Issue** — real actionable entries, including the new posting-issue flow

### Web wireframes (10 templates — confirmed from full 17-screen site walkthrough)
Frame preset: **Desktop, 1440×1024**

See `08-page-redesign-spec.md` for the exact content/layout decision behind each one. Build these 10 templates:
1. Login / Landing
2. Home / Dashboard
3. Announcements & News (shared template)
4. Savings View — Regular + MP2 (shared template, incl. redesigned MP2 error state)
5. Loan Status — Housing / Multi-Purpose / Calamity (**one unified template**, replacing the 3 inconsistent live patterns)
6. Loyalty Card Plus
7. Pay Online (shared template across all 7 payment types, confirmed on live site)
8. View Payments Online
9. Change Password
10. Account (**new** — closes the confirmed web/app parity gap)

General rules across all 10:
- Keep the sidebar, clean up hierarchy with section dividers and a stronger active-state style
- Add a real page header (title + breadcrumb) to every page
- Dock the chat widget in a fixed, non-overlapping corner, and remove the redundant sidebar contact box
- Constrain content to a centered 1200px max-width instead of left-aligned content in a mostly-empty viewport

**Annotate each wireframe** with the heuristic issue number(s) it resolves (from `01-research.md`) — small text callouts pointing to the relevant area.

**Export:** select each frame → right-click → `Export` → PNG → save into `assets/wireframes/` as `app-wireframe-01-login.png`, `web-wireframe-01-home.png`, etc.

---

## 5.2 Usability Test Checkpoint

Before moving to hi-fi, test these wireframes — see `06-usability-testing.md`. Iterate based on findings, then proceed.

---

## 5.3 High-Fidelity Mockups

Recreate every wireframe screen using the Design System components from `04-design-system.md`:
- Swap gray boxes for real components
- Write final microcopy — no placeholder text, no leftover jargon
- Remove all internal version numbers and debug-feeling elements
- Apply the masked-MID pattern, task-grouped tiles, labeled headers, and reframed security card everywhere they were missing

**Export:** save PNGs into `assets/mockups/` following the same naming convention as wireframes.

---

## 5.4 Interactive Prototype

### App prototype
1. Switch to the **Prototype** tab in Figma
2. Connect: Login → Home → Savings Detail → Loans → Account → Help/Report Issue
3. Use `Smart Animate` for tab-bar and step transitions, `Instant`/`Dissolve` for full navigations
4. Set **Login** as the starting frame (right-click → "Set as starting frame")
5. Test yourself in **Present** mode

### Web prototype
1. Same process, desktop frames
2. Wire sidebar navigation clicks to their matching sections
3. Set **Home** as the starting frame

### Sharing
1. Click **Share** (top right) → set to "Anyone with the link can view"
2. Copy both links (app + web)
3. Paste them into this repo's main `README.md` under **Links**, and into your case study
