# Open Scientific Questions

| Document ID | SC-DOC-04 | Version | 0.1 | Status | Open | Owner | H.-P. Konan |
|---|---|---|---|---|---|---|---|

Questions that must be answered by subject-matter experts (SMEs) before the related rule is added or changed. Each answer is recorded in the product decision log (PD-xx) and, if it changes logic, triggers a backlog item.

| ID | Question | Why it matters | Proposed direction (to be validated) | Target release | Backlog |
|---|---|---|---|---|---|
| SQ-01 | Should the tool recommend **dual fluorescence (NIR + IR)** when targets co-migrate, primaries come from two distinct species, and the user does not require chemiluminescence? | Documented Jess option (e.g. phospho and total EGFR near 180 kDa read in NIR and IR). Today the tool only offers HRP + NIR on this branch. | Add Q "Preferred detection: chemi + fluorescence, or fluorescence only?" and a new outcome O9 "Dual fluorescence multiplex (NIR + IR)" with RG-10/RG-11. | R2 | JAST-201 |
| SQ-02 | Should **relative abundance** become an explicit input? | Abundance drives probing order (RePlex) and channel assignment (SC-11), but is currently only a generic note. | Optional question "Is one target much more abundant than the other?" that personalizes tips and channel assignment. | R2 | JAST-202 |
| SQ-03 | What is the operational definition of **"same or very close MW"**? | Users decide this subjectively; the boundary determines multiplex vs RePlex. | Allow optional entry of expected apparent MW for each target; SMEs define the minimum separation considered safe for the chosen separation range. No numeric threshold is assumed until SMEs agree. | R2 | JAST-203 |
| SQ-04 | Should the tool advise on the **separation module** (MW range)? | Targets outside the 12–230 kDa range, or at opposite extremes of it, may need another module or two separate runs. | If MWs are entered (SQ-03), flag targets outside the selected range. Confirm current module ranges first. | R2 | JAST-204 |
| SQ-05 | Should **total protein normalization** in RePlex probe 2 be offered? | Documented capability; frequent need for quantification. | Optional toggle that adapts RePlex recommendations and outlines the probe sequence. | R2 | JAST-205 |
| SQ-06 | Is the O3 tip ("put first the low-abundant target or the target detected in fluorescence") correct in all cases? | The two criteria can conflict (fluorescence target may be the abundant one). | SMEs to decide the priority between the two criteria; rewrite the tip accordingly. | R1 | JAST-106 |
| SQ-07 | On the **different MW / not both chemi** branch, the tool does not ask whether the two primaries come from distinct species. What should happen with **two primaries of the same species**? | SC-05: with same-species primaries, HRP + NIR secondaries both bind both primaries. Today such users can only choose "Other" → Technical Support. | Ask the species question on this branch too; if same species and MW clearly different → suggest chemi multiplex (as R-07) or RePlex. | R1 (decision) / R2 (build) | JAST-107 |
| SQ-08 | For O8 (different MW, both chemi, rabbit + mouse), is the **20X anti-rabbit + ready-to-use anti-mouse HRP** combination still the recommended configuration, and what is the catalogue number of the anti-mouse reagent? | Reagent completeness (RG-04). | SME confirmation + catalogue verification. | R1 | JAST-108 |
| SQ-09 | Which secondary should O7 (same species, mixed primaries) name? | UR-04: users need a reagent reference for every outcome. | Name the standard secondary for the host species (anti-rabbit or anti-mouse HRP), possibly via a species question. | R1 | JAST-109 |
| SQ-10 | Should the **"Important note"** on abundance (SC-11) state that chemiluminescence is the more sensitive detection? | Claim depends on current fluorescence chemistry and target. | SMEs to confirm or soften the wording. | R1 | JAST-110 |

## Answer log

| ID | Date | Answer | Answered by | Resulting decision |
|---|---|---|---|---|
| — | — | — | — | — |
