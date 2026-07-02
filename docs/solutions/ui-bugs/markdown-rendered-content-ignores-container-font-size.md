---
title: "Markdown-rendered content ignores container font-size"
category: ui-bugs
component: index.html (chat frontend)
problem_type: ui_bug
tags: [css, specificity, marked, markdown, typography, font-size]
date: 2026-07-02
ticket: https://lovely.myjetbrains.com/youtrack/issue/LS-1460
pr: https://github.com/lovelysystems/lovelysystems.github.io/pull/2
status: resolved
---

# Markdown-rendered content ignores container font-size

## Symptom

Sizing a container that holds markdown-rendered HTML had no visible effect on the
text. Concretely: a rule to shrink chat answers

```css
section .ai-message { font-size: 16px; }
```

was in place, but answers still rendered at 64px — the same size as the intro
heading the change was meant to differentiate from.

## Root Cause

Answers are produced by `marked.parse(answer)` and injected via
`aiMessageElement.innerHTML` ([index.html:422](../../../index.html)).
`marked` wraps text in block elements — a paragraph answer becomes
`<p class="ai-message"><p>…text…</p></p>`.

The container rule sizes the `.ai-message` element itself, but the **text lives in
the generated child `<p>`**. That child matches the global element rule

```css
p { font-size: var(--font-size); }   /* 64px desktop / 32px mobile */
```

directly. A directly-matching rule always beats an inherited value, so the child
`<p>` takes 64px from `p {}` rather than inheriting 16px from its sized parent.
The container rule was effectively dead for the visible text.

## Solution

Target the generated descendants explicitly, not just the container:

```css
section .ai-message,
section .ai-message p {
  font-size: 16px;
}
```

Only `<p>` needs the explicit override — it is the one descendant with a competing
global rule. Lists, headings, and inline elements emitted by `marked` have no
competing element rule and inherit the 16px container size correctly.

## Prevention

- When you scope typography on a container whose `innerHTML` comes from a markdown
  renderer (marked, markdown-it, etc.), remember the renderer emits its own block
  elements. Any broad element selector elsewhere in the stylesheet (`p {}`,
  `li {}`, `h2 {}`) will hit those generated descendants and **override
  inheritance** from your container.
- Rule of thumb: a container `font-size` only reaches descendants that *inherit*.
  Any descendant that matches a rule directly wins over inheritance regardless of
  specificity comparison — inheritance isn't in the cascade contest at all.
- Either size the generated descendants explicitly, or avoid bare element rules
  (`p {}`) in favor of scoped ones so they don't leak into rendered content.
- Verify rendered output, not just the static markup — the bug only appears once
  real markdown is parsed into the DOM.

## Resources

- Ticket: [LS-1460](https://lovely.myjetbrains.com/youtrack/issue/LS-1460)
- Render path: [index.html:422](../../../index.html) (`marked.parse` → `innerHTML`)
- Global `p` rule: [index.html:83](../../../index.html)
