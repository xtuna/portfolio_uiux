# 08 — Page-by-Page Redesign Specification

This is the actual redesign decision for every unique page template on the live site, based on the full 17-screen walkthrough. Build these directly into your `Hi-Fi Screens` Figma page, using the components and tokens from `04-design-system.md`.

Because several pages share a template on the live site (confirmed by testing, not assumed), you don't need 17 unique redesigns — you need **10 unique templates**, some reused across multiple sections.

---

## Global changes (apply to every page)

1. **Replace the dual contact widgets** (persistent sidebar "Questions? Talk to us!" box + floating chat bubble) with **one** docked, collapsible chat launcher, bottom-right, that never overlaps content. Remove the sidebar box entirely — it's redundant.
2. **Page Header component** on every page: breadcrumb (`Home / Savings / Regular Savings`) + H1 title. This replaces the current pattern where the only page identifier is the thin blue bar.
3. **Content max-width 1200px, centered**, instead of left-aligned content in a mostly-empty viewport — fixes the "70–85% blank space" issue found on 9+ screens.
4. **Sidebar active state**: use `Primary/100` background + `Primary/700` left border (4px) on the active item, not just light gray text — makes current location obvious at a glance, including on nested items.
5. **Icon set**: apply one consistent outline icon (Lucide/Phosphor) next to every sidebar label — currently sidebar is text-only while other areas mix icons/wordmarks.

---

## 1. Login / Landing Page
*(replaces `Default.aspx`)*

- Rebalance the layout: **40% form / 60% visual**, not the current cramped top-left form against a full-bleed hero photo
- Move the login form into a proper centered card with padding, `Primary/900` accent bar at top
- Remove the phone number graphic overlapping the hero photo — put contact info in the footer only, in real text (not an image), so it's legible and accessible
- Keep "Create Account," "Log In," "Forgot Password," "Unlock Account" — but group Forgot Password + Unlock Account under a single "Need help signing in?" expandable link to reduce link clutter
- Fix the footer: rename the two "BROWSE OUR WEBSITE" columns to distinct labels (e.g., "Membership & Loans" / "About Pag-IBIG") so they're not identical
- Verify yellow-on-blue footer link contrast against AA; adjust to a lighter yellow/gold (`#FFD54F`) if needed

---

## 2. Home / Dashboard
*(replaces `Home.aspx`)*

- Add a **Summary Card** at the top — total savings + active loan count + Loyalty Card status, all in one glance (this doesn't exist today; currently the homepage only shows a generic welcome message)
- Replace "Your last failed login" with the **Security Status Card** component (reframed, dismissible, neutral tone) — see `04-design-system.md`
- Keep Announcements + News below, but cap each list to 3 items with a "View All" link instead of showing everything in a mostly-empty page
- Remove the internal version number from the header entirely

---

## 3. Announcements & News
*(replaces `Announcements.aspx`, `News.aspx`)*

- Same template for both — list of cards, each with thumbnail, title, date, short excerpt
- Constrain to the 1200px content width so single-item pages don't leave 80% blank space
- Add simple date-range or "this year" filtering once the list grows beyond ~10 items

---

## 4. Savings View (Regular Savings + MP2 Savings)
*(replaces `MS.aspx`, `MP2.aspx` — same template on live site, keep that reuse)*

- Use the **Read-only Info Row** component (distinct neutral background, no border) instead of the current input-styled gray boxes — this single change fixes the biggest affordance-mismatch issue on the site
- Add a **status confirmation line** at the top: *"Your contributions are up to date as of [Last Remittance Date]"* in a Success badge — directly answers "did it work?" without the member having to interpret raw dates themselves
- **Redesign the MP2 error state specifically:** replace the current double error (inline text + redundant modal) with **one** clear message using the Security/Error Status Card pattern: *"We couldn't load your MP2 Savings right now. This is usually temporary — try again in a few minutes, or [report an issue] if it persists."* One message, one clear next step, plain language — not "Minimal error is being encountered."

---

## 5. Loan Status (Housing Loan, Multi-Purpose Loan, Calamity Loan)
*(replaces `HL.aspx`, `MPL.aspx`, `Calamity.aspx` — currently three inconsistent patterns, unify into one)*

**This is the highest-priority consistency fix on the whole site.** Use one shared template for all three loan types:

- If the member has an active loan: show it as a **card** (not a bare data table) — Loan Reference No., Amount, Term, Status badge (Success/Warning/Error), Date Filed, with "View Details" and "Cancel" as clear buttons, not plain text links
- If the member has no active loan: show a **neutral-toned empty state** (not red/error styling — this is a normal state, not a failure) with an icon, one sentence ("You don't have an active [Loan Type] yet"), and a single **"Apply Now"** button — this is the pattern MPL/Calamity already use; extend it to Housing Loan too, and fold "Add HL Account" into this same screen instead of a separate hidden sidebar item
- Result: one template, one visual language, three loan types — instead of three different experiences for the same underlying task

---

## 6. Loyalty Card Plus
*(replaces `LCPlus.aspx`, `LinkLCPlus.aspx`)*

- Same empty-state pattern as #5 above (neutral tone, icon, one sentence, one button: "Link Your Card")
- Linking form (Partner Bank dropdown + Card Number): add inline validation and a clear success confirmation state after linking, since currently there's no visible "linked successfully" moment

---

## 7. Pay Online
*(replaces `PayOnline.aspx?PT=...` — confirmed single reusable template across 7 payment types)*

- Add a **visible confirmation banner at the top of the form**, driven by which sidebar item was clicked: *"You're paying for: Regular Savings"* in a colored bar — addresses issue #16 (risk of misdirected payments) since right now the only indicator is a dropdown pre-filled with small text
- **Auto-populate the Pag-IBIG MID number and Member's Name** from the logged-in session instead of requiring the member to retype their own MID and click "Verify" — they're already authenticated, this step is redundant
- Keep the payment method logos (Visa/Mastercard/JCB/GCash/Maya) and browser-compatibility note — that's genuinely useful, keep it
- Group date fields (Period Covered From/To, Duration) visually together in one row/card rather than a long single column

---

## 8. View Payments Online
*(replaces `ViewPayments.aspx`)*

- Now that MID is auto-populated everywhere (see #7), this page's already-correct pattern (MID field pre-filled and disabled) becomes the consistent standard across the whole site instead of an outlier
- Results should render as a table with Status badges (Success = posted, Warning = processing), not a bare list

---

## 9. Change Password
*(replaces `Password.aspx`)*

- Add a show/hide toggle (eye icon) to each password field
- Replace the static bullet list with **live validation**: each rule shows a neutral state by default, turns green with a checkmark as the member's input satisfies it in real time
- Add a success confirmation state after submission (currently unclear what happens after clicking Submit)

---

## 10. Account (NEW)
*(does not exist on the live site today — confirmed gap)*

- Mirror the app's existing Account Details screen, but fix its issues too:
  - MID number and mobile number **masked by default** (`••••••1249`) with a reveal toggle
  - Security section reframed using the calm Security Status Card, not an alarming failed-login banner
  - Include Full Name, Membership Category, Current Employer, Registered Mobile — same data the app already shows, now also available on web
- This closes the cross-platform parity gap identified in research issue #4

---

## Build Order Recommendation

Given 10 templates, build in this order (highest research-evidence impact first):

1. Loan Status template (#5) — fixes the worst consistency violation
2. Savings View + MP2 error redesign (#4) — fixes the most confusing error state
3. Account page (#10) — closes a real, confirmed gap
4. Home/Dashboard (#2)
5. Login/Landing (#1)
6. Pay Online (#7) + View Payments (#8)
7. Loyalty Card Plus (#6)
8. Announcements/News (#3)
9. Change Password (#9)
10. Global nav/chat/header polish last, once all page content is final
