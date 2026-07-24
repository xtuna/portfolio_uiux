# 08 — App Store Review Analysis

This is a second, independent layer of evidence on top of your own heuristic evaluation — real user voice from ~90+ Google Play / App Store reviews of the Virtual Pag-IBIG app. Where your heuristic audit tells you *what's structurally wrong*, this tells you *what actually makes people angry enough to leave a review* — and it points to some gaps your screen-by-screen audit couldn't catch (things that only show up over repeated use, like lockouts and support dead-ends).

## Overall Picture
Overwhelmingly negative — mostly 1-star, some 2–3 star, a handful of 4–5 star (mostly recent, praising simplicity and monitoring features when the app actually works).

## Top Recurring Complaints (by frequency)

### 1. Login / Account Lockout (most common complaint by far)
- Wrong password locks the account after 2–3 attempts, and **unlocking requires a physical branch visit with photocopied IDs** — no online self-service unlock
- "Session expired" errors looping endlessly, especially during account creation
- OTP / temporary password never arrives, or takes hours
- Correct credentials sometimes rejected ("details did not match")

### 2. App Reliability / Performance
- Endless loading, spinning, or crashing — especially right after app updates
- Force-closes on iOS, won't open for days at a time
- Very slow — some users report 5–10+ minutes just to log in

### 3. Limited Functionality (the app is basically read-only)
- Can only view contributions — most real transactions (loans, MP2, payments) redirect out to a browser or show an error
- MP2 savings/loan status often can't even be viewed ("unable to process request")
- Online payment redirects to browser and then fails
- No way to unlock an account, change email, or reset a password without visiting a branch

### 4. Registration / Verification Problems
- Valid ID uploads rejected repeatedly
- MID number errors, address/OTP mismatches
- Province dropdown sometimes missing entirely, blocking registration outright

### 5. UX / Design Complaints
- Not optimized for iOS/iPad — poor layout, misaligned buttons, tiny fonts, wasted white space (this independently confirms issue #1 from your own heuristic audit)
- **No biometric login (Face ID / Touch ID)** — one of the most frequently requested features
- Users must re-enter address and phone number on every single payment, despite that info already being on file

### 6. Customer Support
- Chat/email support is unresponsive or only offers generic troubleshooting
- The hotline just redirects users back to "go to a branch"

## The Positive Minority (mostly 3–5 star)
- Some users say it's fine for checking contributions/loan history and easy to navigate when it works
- Feature requests (not complaints) that came up repeatedly: biometric login, GCash/ShopeePay payment support, MP2 dividend deposit options, "remember me" login

## Bottom Line
The core theme across all 90+ reviews: **the app is essentially a read-only viewer with poor uptime**, and anything requiring an actual transaction (loans, MP2, unlocking an account, payments) forces the user back to a physical branch — defeating the entire purpose of having a mobile app.

---

## New Features This Adds to the Redesign

These are on top of the fixes from your own heuristic audit (`01-research.md`) — this list exists specifically *because* real users asked for it, which makes it strong, defensible material for a case study.

| Feature | Directly answers | Priority |
|---|---|---|
| **Self-service account unlock** (identity verification in-app, no branch visit) | The #1 most common complaint | Must |
| **Biometric login** (Face ID / Touch ID / fingerprint) | Most-requested missing feature | Must |
| **"Remember me" login option** | Repeated feature request, reduces login friction that triggers lockouts | Must |
| **Complete loan, MP2, and payment transactions actually inside the app** (not a redirect to browser that then fails) | "Limited functionality" — the single biggest trust-killer in the reviews | Must |
| **Saved payment details** (address/phone pre-filled, not re-entered every time) | Explicit, repeated complaint | Should |
| **Clearer registration flow**: live ID upload preview/validation before submission, a working province dropdown, clear error messages when MID/OTP don't match | Registration/verification complaints | Must |
| **GCash / ShopeePay as payment options**, alongside the existing Visa/Mastercard/JCB/GCash/Maya options already on the web Pay Online form | Explicit feature request | Could |
| **A real support escalation path in-app** — not just a hotline number that says "go to a branch" | Customer support complaints | Should |
| **Basic offline/poor-connectivity resilience** — clear retry states instead of infinite spinners, works for both OFWs on unstable connections and general reliability complaints | Reliability complaints | Should |

Add these to `docs/03-ideate-storyboard.md`'s MoSCoW table and sitemap (already updated — see the note in that file).
