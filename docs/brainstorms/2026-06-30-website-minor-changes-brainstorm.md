---
title: "Website minor changes: ♥Streaming button + smaller answer text"
type: feat
status: resolved
date: 2026-06-30
ticket: https://lovely.myjetbrains.com/youtrack/issue/LS-1460
---

# Brainstorm: Website Minor Changes (LS-1460)

## What We're Building

Two scoped UI tweaks to the single-file chat landing page [index.html](../../index.html):

1. A `♥Streaming` link button in the bottom link list, between the
   "I need your contact details..." button and the GitHub button, linking to
   https://www.lovelystreaming.com/ (new tab).
2. Smaller font size for chat answers after a question is asked, so long answers
   read comfortably — especially on mobile. Answers must be smaller than the 64px
   intro and the 20px question chip.

## Why This Approach

`index.html` is a single static file with inline CSS and no build step. Both changes
are additive and reuse existing styles:

- The Streaming button reuses the shared `.button` pill style — no new CSS. Figma
  node `55-508` confirms it is plain Inter SemiBold text with a heart glyph, no SVG icon.
- Answers and the intro currently share `.ai-message` (inheriting `p { font-size:
  var(--font-size) }` → 64px/32px). A single `section .ai-message` rule shrinks
  answers only, leaving the intro (a direct child of `#chat-container`) untouched.

Simplest change that satisfies the ticket — no JS, no layout restructuring.

## Key Decisions

- **Answer size: 16px on all breakpoints.** Within the ticket's 14/16/18px range;
  smaller than intro (64/32px) and chip (20px). Applied via `section .ai-message`,
  whose specificity beats the bare `p` rule without a media query.
- **Streaming button is a text-only pill**, styled identically to the GitHub/LinkedIn
  pills, opens in a new tab with `rel="noopener noreferrer"`.
- **`♥` renders as a heart**, matching the `♥lovely` intro treatment.
- **No JS changes** — message template and streaming logic untouched.

## Resolved Questions

- *Which answer size (14/16/18px)?* → 16px.
- *Does the button need an icon?* → No; Figma `55-508` shows typed text only.
- *Should the intro or question chip change size?* → No; only rendered answers shrink.

## Open Questions

None — scope and sizes are settled; ready for planning/implementation.

## Sources

- Ticket: [LS-1460](https://lovely.myjetbrains.com/youtrack/issue/LS-1460) / GitHub issue #6
- Figma (button): node `55-508`
- Figma (sizes): node `53-281`
