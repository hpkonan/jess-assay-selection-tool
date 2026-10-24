# UX and Content Guidelines

| Document ID | PR-DOC-03 | Version | 0.1 | Status | Draft | Owner | H.-P. Konan |
|---|---|---|---|---|---|---|---|

## 1. UX principles

1. **One decision at a time** — show only the next relevant question.
2. **Answer first, explanation second** — the recommendation title and action come before the rationale.
3. **Never a dead end** — even "not validated" (O1) and "not covered" (O6) outcomes tell the user what to do next.
4. **Same input, same output, same words** — an outcome has one wording.
5. **Designed for the bench and the meeting room** — readable on a phone, usable with one hand, no hover-only interactions.

## 2. Layout

| Breakpoint | Layout |
|---|---|
| ≥ 900 px | Two columns: questions (2/3) · recommendation + important note (1/3, sticky) |
| < 900 px | One column: questions → recommendation → important note → disclaimer footer. After the final answer, the view scrolls to the recommendation. |

## 3. Components

| Component | Rules |
|---|---|
| Question card | Number (display order) · question · optional helper text · select with "Select an option" placeholder · label linked to control |
| Recommendation card | Status badge · decision-type badge · title · action sentence · collapsible "Why this path?" · collapsible "Practical tips" · collapsible "Reagents" · copy button · rule-set version |
| Badges | Text + icon + color; meaning must not rely on color alone |
| Important note | Static, always visible after the recommendation |
| Disclaimer | Author, purpose, "not official vendor software"; never overlaps content |

## 4. Badge vocabulary

| Status | Badge text | Color family | Decision types allowed |
|---|---|---|---|
| info | Next step | Indigo | Validation step |
| recommended | Suggested | Green | RePlex workflow · Mixed detection · Multiplex workflow |
| warning | Review needed | Amber | Technical Support |

## 5. Writing style

- Write to the user ("you"), never to the author ("your decision tree").
- Active voice, short sentences (≤ 25 words where possible).
- Use consistent terms:

| Use | Avoid |
|---|---|
| chemiluminescence (chemi on second mention) | chemi (first mention), ECL |
| NIR fluorescence, IR fluorescence | far-red, 700 channel (unless confirmed naming) |
| RePlex | stripping and reprobing (only as an explanation) |
| primary antibody / secondary antibody | Ab1 / Ab2 |
| molecular weight (MW) | size, mass (inconsistently) |
| Technical Support | Tech Support Representative, TS |

- Rationales explain the **mechanism** (channel, migration, species), not the existence of a rule.
- Reagents always as: *Name — Supplier #Catalogue number*.

## 6. Copied text format (target, PR-13)

```
Jess Assay Selection Tool — recommendation
Date: 2026-11-15 · App v2.1.0 · Rule set v2.1

Your answers
- Each target run individually: Yes
- MW relationship: Clearly different MW
- Both targets in chemiluminescence: Yes
- Same species for both targets: No

Recommendation: Multiplex with Rabbit HRP + Mouse HRP
<action sentence>

Why this path?
<rationale>

Reagents
- <Name — Supplier #Cat>

Guidance only — not official vendor software. Final assay design should consider target abundance, peak separation and antibody validation.
```
