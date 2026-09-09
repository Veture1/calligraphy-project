---
name: compound-work
description: Implement an approved plan with test-first development, focused Codex subagents, and proportionate verification.
---

# Compound Work

Read the plan, specification, acceptance criteria, and verification contract. Search
relevant lessons before architectural decisions. Claim the corresponding beads task
when beads is initialized.

For behavior changes, preserve the red-green-refactor order:

1. Give one bounded behavior to `test_writer` and confirm the test fails for the right reason.
2. Give the failing test and specification to `implementer`.
3. Run the focused test, then the affected package tests.
4. Refactor only after the behavior passes.

Use parallel subagents only for independent file or module ownership. Keep shared
interfaces with the parent agent or serialize those edits. The parent agent integrates
the results and resolves conflicts.

For this repository, the standard gates are `cd go && go test ./...`, `cd go && go vet
./...`, and `cd go && golangci-lint run ./...` when the linter is installed. Run only
the evidence required by the change and verification contract. Do not close the task
until the requested behavior and required checks pass. Then proceed to `$compound-review`.
