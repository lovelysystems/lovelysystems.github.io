---
title: "Website minor changes: ♥Streaming button + smaller answer text"
type: feat
status: active
date: 2026-06-30
ticket: https://lovely.myjetbrains.com/youtrack/issue/LS-1460
origin: docs/brainstorms/2026-06-30-website-minor-changes-brainstorm.md
---

# Website minor changes: ♥Streaming button + smaller answer text

Two scoped UI changes to the single-file landing page [index.html](../../index.html)
(inline CSS, no build step). Decisions were settled in the brainstorm step;
Figma `55-508` confirmed the button is plain Inter SemiBold text ("just type it").

## Acceptance Criteria

- [ ] A `♥Streaming` pill button sits in `#predefined-prompts`, **between** the
      "I need your contact details..." button and the GitHub link.
- [ ] It links to `https://www.lovelystreaming.com/`, opens in a new tab
      (`target="_blank" rel="noopener noreferrer"`), and is visually identical to
      the existing GitHub/LinkedIn pills (no SVG icon — text only).
- [ ] The `♥` renders as a heart, matching the `♥lovely` intro treatment.
- [ ] After a question is asked, the answer text renders at **16px** on all
      breakpoints.
- [ ] The intro `.ai-message` stays at `var(--font-size)` (64px desktop / 32px
      mobile) — unchanged.
- [ ] The question chip (`.user-message-text`) stays at 20px — unchanged.

## Context

- Buttons/pills are styled by the shared `.button` / `button:not([type="submit"])`
  rule at [index.html:205](../../index.html) (height 40px, 2px currentColor border,
  border-radius 70px, font-size 16px, font-weight 600, Inter). The new link reuses
  this class — no new CSS for the button.
- Answers and the intro currently share `.ai-message`, which inherits
  `p { font-size: var(--font-size) }` at [index.html:83](../../index.html). That's
  why answers are 64px/32px today.
- The intro is a **direct child** of `#chat-container` ([index.html:264](../../index.html));
  answers are rendered from `#message-template` and live inside a `<section>`
  ([index.html:311](../../index.html)). So `section .ai-message` targets answers only
  and leaves the intro untouched. Specificity (0,0,2) beats the bare `p` (0,0,1),
  so the explicit 16px wins on every breakpoint without a media query.

## MVP

### index.html — Change 1: add the Streaming button

Insert between the contact-details button and the GitHub `<a>` (current lines 269–270):

```html
<button data-prompt="">I need your contact details...</button>
<a class="button" href="https://www.lovelystreaming.com/" target="_blank" rel="noopener noreferrer">♥Streaming</a>
<a class="button" href="https://github.com/lovelysystems" target="_blank" rel="noopener noreferrer">
  <!-- GitHub SVG -->
```

### index.html — Change 2: shrink answers only

Add one rule inside the `<style>` block (near the `.message` rules, after `p {}`):

```css
section .ai-message {
  font-size: 16px;
}
```

This also shrinks the `.dot-animation` typing indicator (also an `.ai-message`
inside the section) to 16px — desirable, keeps it consistent with the answer size.

## Notes / Risks

- `#predefined-prompts` is a horizontal-scroll flex row; one more pill just extends
  the scroll. No layout risk.
- No JS change — the template and streaming logic are untouched.
- Verify visually on mobile (<768px) that a long answer reads comfortably at 16px
  vs the 20px chip and 32px intro.

## Sources

- **Origin brainstorm:** [docs/brainstorms/2026-06-30-website-minor-changes-brainstorm.md](../brainstorms/2026-06-30-website-minor-changes-brainstorm.md)
  — carried-forward decisions: answers at 16px on all breakpoints; button is text-only
  pill (no icon); intro and question chip sizes unchanged; no JS changes.
- Ticket: [LS-1460](https://lovely.myjetbrains.com/youtrack/issue/LS-1460) / GitHub issue #6
- Figma (button): node `55-508` — confirms typed Inter SemiBold, no icon
- Figma (sizes): node `53-281`
- Button styles: [index.html:205](../../index.html)
- Intro vs answer markup: [index.html:264](../../index.html), [index.html:311](../../index.html)
