# 03 — Ideate

## 3.1 Sitemap (shared IA across web + app)

```
Login
 ├─ Log In (with Biometric option + "Remember Me" toggle)  ← NEW, most-requested
 ├─ Create Account (with working province dropdown + live ID upload validation)  ← FIXED
 ├─ Forgot Password
 └─ Unlock My Account (self-service, in-app identity check — no branch visit)  ← NEW, #1 complaint

Home / Dashboard
 ├─ Savings
 │   ├─ Regular Savings
 │   └─ MP2 Savings
 ├─ Loans
 │   ├─ Housing Loan (status / apply — completes in-app, not a browser redirect)  ← FIXED
 │   ├─ Multi-Purpose Loan (status / apply — ONE consistent empty state, not two)
 │   └─ Calamity Loan (status / apply)
 ├─ Loyalty Card
 │   ├─ Link Account
 │   └─ View Account
 ├─ Payments
 │   ├─ Pay Online (single reusable template — confirmed on the live site — now
 │   │              completes fully in-app, pre-fills saved address/phone, adds
 │   │              GCash/ShopeePay, and shows a clear "You're paying for: ___"
 │   │              confirmation step)  ← FIXED + EXPANDED
 │   └─ Payment History (View Payments Online)
 ├─ Account  ← NEW on web — confirmed the live site has no account page at all,
 │             only the app does. Adding this closes a real parity gap.
 │   ├─ Profile (masked MID by default, reveal on tap)
 │   └─ Security & Login Activity (reframed, not alarming)
 └─ Help
     ├─ Contact Channels (real in-app escalation, not just a hotline number
     │                    that says "go to a branch")  ← FIXED
     └─ Report a Posting Issue  ← NEW, addresses a real documented pain point,
                                    and directly maps to the MP2 error you captured
```

Two things worth calling out explicitly in your case study:
- **"Report a Posting Issue"** — a new feature answering a real, documented, currently-unaddressed need, not just a reskin.
- **"Account" on web** — confirmed missing from the live site entirely; adding it is a deliberate fix for a real cross-platform gap, not an assumption.

Also note: the live site's logout button returns straight to the public homepage with no confirmation. Decide deliberately whether your redesign keeps that (fast, low-friction) or adds a brief confirmation step — either is defensible, but make the choice and note *why* in your case study.

Draw this as a box diagram in FigJam or Figma (simple rectangles + connector lines). Export to `assets/`.

## 3.2 Feature Prioritization (MoSCoW)

Combines your own heuristic audit (`01-research.md`) with real user complaints from ~90+ app store reviews (`09-app-store-review-analysis.md`) — two independent evidence sources pointing at overlapping and complementary problems.

| Priority | Feature | Evidence source |
|---|---|---|
| **Must** | Self-identifying page headers/titles, masked sensitive data with reveal control, task-grouped navigation, reassuring security messaging | Heuristic audit |
| **Must** | Self-service account unlock (no branch visit required) | App store reviews — #1 most common complaint |
| **Must** | Biometric login (Face ID / Touch ID / fingerprint) | App store reviews — most-requested feature |
| **Must** | "Remember me" login option | App store reviews |
| **Must** | Loan, MP2, and payment transactions that actually complete in-app, not redirects to a browser that then fail | App store reviews — biggest trust-killer |
| **Must** | Working registration: live ID upload validation, functioning province dropdown, clear MID/OTP error messages | App store reviews |
| **Should** | "Report a Posting Issue" guided flow, consistent icon system across web and app | Heuristic audit |
| **Should** | Saved payment details (no re-entering address/phone every time) | App store reviews |
| **Should** | Real in-app support escalation path (not just a hotline that says "go to a branch") | App store reviews |
| **Should** | Clear retry states instead of infinite loading spinners | App store reviews |
| **Could** | Unified in-app chat entry point | Heuristic audit |
| **Could** | GCash / ShopeePay as additional payment options | App store reviews |
| **Won't (out of scope)** | Backend payment processing, loan underwriting logic, actual identity-verification infrastructure for account unlock (design the flow, not the backend) | — |

---

## 3.3 UX Storyboard

A storyboard is a sequence of simple panels (sketches or Figma-built frames) showing a persona moving through a real scenario — before and after your redesign. This is a great slide for your case study because it shows *narrative empathy*, not just screens.

**Recommended persona for the storyboard: Arnel Cruz ("The Voluntary Member Abroad")** — his scenario has real emotional stakes (money, distance, uncertainty), which makes for a more compelling storyboard than a routine login flow.

### Storyboard Script — "Did my contribution actually count?"

**Panel 1 — Context**
Arnel is on his phone during a break on a cargo ship, weeks away from home. He just got paid and sent his voluntary Pag-IBIG contribution through a remittance partner.
*Caption: "Arnel wants to make sure his contribution posted correctly before he loses signal again."*

**Panel 2 — Current pain (Before)**
He opens the app. The header is blank, he's not sure which screen he's on. He finds Regular Savings — the numbers look right, but there's no clear "posted" confirmation, just a static table.
*Caption: "The app shows numbers, but nothing tells him clearly: did it work?"*

**Panel 3 — Escalating worry (Before)**
He tries the Contact Channels screen, hoping to ask someone. It just repeats a phone number and email — no way to actually message anyone from here, and international calls are expensive.
*Caption: "He's stuck. No clear next step, and he's about to lose signal."*

**Panel 4 — Redesigned experience (After) — Dashboard**
In the redesigned app, Arnel opens to a clear Home dashboard: a labeled header, and a plain-language status card: *"Your July contribution was posted on July 8 — you're on track."*
*Caption: "One glance, and he already has his answer."*

**Panel 5 — Redesigned experience (After) — Report an Issue, just in case**
Curious, he taps "Report a Posting Issue" from Help — just to see how it works for next time. It's a simple guided form: select the month, attach a receipt photo, submit. No jargon.
*Caption: "If something ever does go wrong, he now knows exactly where to go."*

**Panel 6 — Resolution**
Arnel closes the app, reassured, just as he loses signal again.
*Caption: "A five-second glance replaced ten minutes of doubt."*

### How to produce the storyboard
- **Option A (fastest):** Build 6 simple frames in FigJam using basic shapes + stick figures/icons + captions underneath each panel. Screenshot/export as one long image or 6 separate PNGs.
- **Option B (more polished):** Use [Storyboard That](https://www.storyboardthat.com) (free tier) or hand-sketch and photograph.
- **Option C:** Use Figma's shape tools to build simple flat illustrations per panel (rectangles for phone, circles for face, speech bubbles for captions).

Save panels into `assets/storyboard/` as `panel-01.png` through `panel-06.png`.
