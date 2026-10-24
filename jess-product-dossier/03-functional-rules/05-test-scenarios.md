# Test Scenarios (Acceptance Tests)

| Document ID | FR-DOC-05 | Version | 0.1 | Status | Draft | Owner | H.-P. Konan |
|---|---|---|---|---|---|---|---|

Scenarios are written in Gherkin so they can be automated (unit tests on the rule engine + end-to-end tests on the UI). Every decision rule R-01 to R-11 has at least one scenario; behavioural rules have dedicated scenarios.

## 1. Decision-path scenarios (one per rule)

```gherkin
Feature: Multi-target workflow recommendation

  Scenario: TS-01 / R-01 — targets not validated individually
    Given I have not run each target individually
    When I answer Q1 "No"
    Then I see outcome "O1"
    And the status badge is "Next step"
    And no other question is displayed

  Scenario: TS-02 / R-02 — same MW, both in chemi
    Given I answer Q1 "Yes"
    And I answer Q2 "Same or very close MW"
    When I answer Q3 "Yes"
    Then I see outcome "O2"
    And the decision type is "RePlex workflow"
    And the practical tip mentions the low-abundance target in the first probing cycle

  Scenario: TS-03 / R-03 — same MW, not both chemi, no distinct species
    Given I answer Q1 "Yes", Q2 "Same or very close MW", Q3 "No"
    When I answer Q4a "No"
    Then I see outcome "O3"

  Scenario Outline: TS-04..06 / R-04..R-06 — same MW, distinct species
    Given I answer Q1 "Yes", Q2 "Same or very close MW", Q3 "No", Q4a "Yes"
    When I answer Q5 "<pair>"
    Then I see outcome "<outcome>"
    Examples:
      | pair                            | outcome |
      | Rabbit-HRP + Mouse-NIR          | O4      |
      | Mouse-HRP + Rabbit-NIR          | O5      |
      | Other combination / not listed  | O6      |

  Scenario Outline: TS-07..08 / R-07..R-08 — different MW, both chemi
    Given I answer Q1 "Yes", Q2 "Clearly different MW", Q3 "Yes"
    When I answer Q4b "<same species>"
    Then I see outcome "<outcome>"
    Examples:
      | same species | outcome |
      | Yes          | O7      |
      | No           | O8      |

  Scenario Outline: TS-09..11 / R-09..R-11 — different MW, not both chemi
    Given I answer Q1 "Yes", Q2 "Clearly different MW", Q3 "No"
    Then question Q4a is not displayed
    When I answer Q5 "<pair>"
    Then I see outcome "<outcome>"
    Examples:
      | pair                            | outcome |
      | Rabbit-HRP + Mouse-NIR          | O4      |
      | Mouse-HRP + Rabbit-NIR          | O5      |
      | Other combination / not listed  | O6      |
```

## 2. Behavioural scenarios

```gherkin
Feature: Guided flow behaviour

  Scenario: TS-20 / BR-03 — no partial result
    Given I answer Q1 "Yes" and Q2 "Clearly different MW"
    Then the recommendation card shows "Complete the questions on the left to see the suggested workflow."

  Scenario: TS-21 / BR-02 — cascade reset
    Given I reached outcome "O4" through R-04
    When I change Q2 to "Clearly different MW"
    Then Q3, Q4a and Q5 are cleared
    And no outcome is displayed

  Scenario: TS-22 / BR-07 — reset
    Given I reached any outcome
    When I click "Reset answers"
    Then all answers are empty
    And only Q1 is displayed

  Scenario: TS-23 / BR-09 — copy recommendation
    Given I reached outcome "O8"
    When I click "Copy recommendation"
    Then the clipboard contains the title, recommendation, "Why this path?", and the reagent notes
    And the button reads "Copied!" for about 2 seconds

  Scenario: TS-24 / BR-13 (R1) — decision type consistent with status
    Given I reached outcome "O1"
    Then the decision-type badge does not read "Review needed"

  Scenario: TS-25 / BR-16 (R1) — unique question numbering
    Given I answer Q1 "Yes", Q2 "Same or very close MW", Q3 "No", Q4a "Yes"
    Then the displayed question numbers are 1, 2, 3, 4, 5 with no duplicate

  Scenario: TS-26 / BR-17 (R1) — clipboard failure
    Given clipboard access is denied
    When I click "Copy recommendation"
    Then I see an error message
    And the button does not read "Copied!"
```

## 3. Coverage matrix

| Rule / BR | Scenario | V2 expected result |
|---|---|---|
| R-01 … R-11 | TS-01 … TS-11 | Pass |
| BR-02, BR-03, BR-07, BR-09 | TS-20 … TS-23 | Pass |
| BR-13 | TS-24 | **Fail** (LI-01) |
| BR-16 | TS-25 | **Fail** (LI-05) |
| BR-17 | TS-26 | **Fail** (LI-07) |
