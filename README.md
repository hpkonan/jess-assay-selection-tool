# jess-assay-selection-tool
# Product Vision and Strategy


## 1. Product in one sentence

The Jess Assay Selection Tool is a guided web assistant that tells a Jess user, in under two minutes, **which multi-target workflow to run** — multiplex, mixed chemiluminescence/fluorescence detection, or RePlex — and **which reagents to use**, with the scientific reason behind each recommendation.

## 2. Problem statement

Designing a two-target assay on Jess requires combining several independent considerations: whether each target has been validated alone, how far apart the targets migrate, which detection chemistry is wanted, which primary antibody species are available, and which secondary reagents are compatible. Today this reasoning lives mainly in the heads of Field Application Scientists (FAS) and Technical Support specialists.

The consequences:

| Symptom | Impact |
|---|---|
| Advice varies from one expert to another | Inconsistent customer experience; contradictory guidance |
| Users attempt multiplexing without single-target validation | Failed or uninterpretable runs, wasted sample, cartridges and instrument time |
| Co-migrating targets are multiplexed in a single chemiluminescence channel | Signals cannot be separated; experiment must be repeated |
| Reagent combinations are chosen by trial and error | Cross-reactivity, wrong conjugates, delays |
| The same design questions reach Technical Support repeatedly | Support load on simple, rule-based questions |
| New users and new FAS ramp up slowly on multi-target design | Longer time-to-autonomy after training |

## 3. Vision

> **Every Jess user chooses the right multi-target workflow the first time — consistently, quickly, and with confidence in the science behind it.**

## 4. Target users (summary)

| Persona | Role | Main job-to-be-done |
|---|---|---|
| **P1 — Field Application Scientist** | Internal expert who trains and supports customers | Give fast, consistent, defensible advice during demos, trainings and follow-ups |
| **P2 — Jess end user (researcher)** | Scientist running Simple Western assays in their lab | Decide how to measure two targets without wasting a run |
| **P3 — Technical Support specialist** | Internal remote support | Answer design questions quickly and spend time on real troubleshooting |
| **P4 — Core facility / lab manager** | Owner of a shared instrument | Standardize assay design across many users |

Details: `01-user-requirements/01-personas.md`.

## 5. Value proposition

| For | Who | The tool | Unlike |
|---|---|---|---|
| Jess users and the people who support them | need to set up a two-target assay | gives a validated, explained workflow and reagent recommendation in a few clicks | scattered application notes, tacit expert knowledge, or trial and error |

Key differentiators:
1. **Explained, not just prescribed** — every outcome includes "Why this path?".
2. **Actionable** — reagent references and practical tips are included and can be copied into a lab notebook or email.
3. **Consistent** — the same inputs always produce the same recommendation, whoever runs the tool.
4. **Safe escalation** — combinations outside validated guidance are explicitly routed to Technical Support instead of guessed.

## 6. Strategic positioning and stage

The tool is currently a **personal side project** of a FAS, published with an explicit disclaimer ("not official vendor software"). The product strategy is therefore staged:

| Stage | Description | Exit criterion |
|---|---|---|
| **Stage 0 — Personal tool** (current) | Used by its author during demos, trainings and support | Logic covered by tests, scientifically reviewed, repository clean |
| **Stage 1 — Team pilot** | Shared with a small group of FAS and Technical Support colleagues | Pilot metrics met (see OKRs); positive feedback from pilot users |
| **Stage 2 — Endorsed internal tool** | Recognized by management, content reviewed by Applications/Product, hosted under an approved channel | Formal sign-off on scientific content, brand and compliance |
| **Stage 3 — Customer-facing** (option) | Offered to customers directly, or embedded in wider digital support | Business case approved; ownership and maintenance agreed |

The progression is gated: each stage must demonstrate value and scientific reliability before asking for more exposure. This protects the author, the users and the company brand.

## 7. Strategic pillars

1. **Scientific trust** — rules are explicit, versioned, reviewed by subject-matter experts and fully tested.
2. **Speed to answer** — a recommendation in less than 2 minutes, with no login and no installation.
3. **Consistency at scale** — one source of truth for multi-target design guidance, usable by every FAS and support specialist.
4. **Learning loop** — usage and feedback show where users get stuck and which scientific cases are missing.
5. **Composability** — the decision engine can later be reused by other tools (for example a searchable knowledge base of documented Jess experiments, or demo-report tooling).

## 8. Scope

**In scope (current and near term)**
- Two-target assay design on Jess (multiplex, mixed chemi/fluorescence, RePlex).
- Recommendation of workflow, rationale, practical tips and reagent references.
- Escalation to Technical Support for non-covered combinations.

**Out of scope (for now)**
- More than two targets.
- Other Simple Western instruments (e.g. Abby, Wes, Peggy Sue) — candidate for later evaluation.
- Sample preparation, antibody titration and data-analysis guidance.
- Ordering, pricing or any commercial transaction.
- Storage of any user, customer or sample data.

## 9. Success definition (headline)

| Dimension | Headline indicator |
|---|---|
| Value to users | Share of sessions that reach a recommendation (completion rate) |
| Scientific quality | Share of decision paths reviewed and approved by SMEs; number of logic defects |
| Business value | Reduction of design-related support escalations; FAS time saved per week |
| Adoption | Number of active users in the pilot group |

Targets and measurement: `03-okrs-and-success-metrics.md`.

## 10. Guiding principles for product decisions

- When in doubt scientifically, **escalate rather than guess**.
- **Rules are content, not code**: scientific logic must be editable and reviewable without reading React code.
- **No personal data**: the tool must stay usable without login and without collecting identities.
- **Explain every recommendation** in language a bench scientist understands.
- **Small, safe increments**: every release is tested on all decision paths before deployment.
