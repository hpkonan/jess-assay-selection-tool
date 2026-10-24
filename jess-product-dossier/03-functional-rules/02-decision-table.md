# Decision Table

| Document ID | FR-DOC-02 | Version | 0.1 — rule set v2.0 (as deployed) | Status | **Awaiting SME sign-off** | Owner | H.-P. Konan |
|---|---|---|---|---|---|---|---|

The decision table is the **normative** description of the tool's logic. The code must implement it exactly (verified by automated tests, one per row). Any change to this table requires SME review (see `02-scientific-constraints/05-scientific-validation-plan.md`).

`–` = question not asked on this path. `*` = any value.

| Rule | Q1 Tested individually | Q2 MW relation | Q3 Both in chemi | Q4a Two distinct species | Q4b Same species | Q5 Detection pair | → Outcome | Constraints |
|---|---|---|---|---|---|---|---|---|
| **R-01** | No | – | – | – | – | – | **O1** Validate individually first | SC-01 |
| **R-02** | Yes | Same / close | Yes | – | – | – | **O2** RePlex (two chemi immunoassays) | SC-02, SC-03, SC-10 |
| **R-03** | Yes | Same / close | No | No | – | – | **O3** RePlex (two immunoassays) | SC-05, SC-10 |
| **R-04** | Yes | Same / close | No | Yes | – | Rabbit-HRP + Mouse-NIR | **O4** Mixed HRP + NIR | SC-04, SC-05, SC-08 |
| **R-05** | Yes | Same / close | No | Yes | – | Mouse-HRP + Rabbit-NIR | **O5** Mixed HRP + NIR | SC-04, SC-05, SC-08 |
| **R-06** | Yes | Same / close | No | Yes | – | Other | **O6** Contact Technical Support | SC-09 |
| **R-07** | Yes | Different | Yes | – | Yes | – | **O7** Chemi multiplex, mixed primaries | SC-02, SC-06 |
| **R-08** | Yes | Different | Yes | – | No | – | **O8** Chemi multiplex, 20X anti-Rb + RTU anti-Ms HRP | SC-02, SC-07 |
| **R-09** | Yes | Different | No | – | – | Rabbit-HRP + Mouse-NIR | **O4** Mixed HRP + NIR | SC-04, SC-08 |
| **R-10** | Yes | Different | No | – | – | Mouse-HRP + Rabbit-NIR | **O5** Mixed HRP + NIR | SC-04, SC-08 |
| **R-11** | Yes | Different | No | – | – | Other | **O6** Contact Technical Support | SC-09 |
| **R-00** | Any combination not fully answered | | | | | | **No result** ("Complete the questions on the left…") | BR-03 |

## Completeness and exclusivity check

- **Complete:** every combination of answers to visible questions maps to exactly one rule (11 terminal combinations + incomplete state).
- **Mutually exclusive:** no two rules share the same input combination.
- **Reachability:** every outcome O1–O8 is reachable; O4, O5 and O6 are reachable from two branches.

## Rule-set versioning

| Rule-set version | Date | Change | Approved by |
|---|---|---|---|
| v1.0 | 2026 | Initial tree (App.tsx). On the same/close-MW, not-both-chemi, distinct-species branch, recommended HRP + HRP multiplex with 20X anti-rabbit conjugate. | Author |
| v2.0 | 2026 | Same branch now asks Q5 and recommends mixed HRP + NIR detection (R-04 to R-06). UI additions (progress, reset, copy). | Author — **SME sign-off pending** |
| v2.1 (planned R1) | — | Wording fixes (LI-03, LI-06); possible changes from SQ-06 to SQ-10 | — |
