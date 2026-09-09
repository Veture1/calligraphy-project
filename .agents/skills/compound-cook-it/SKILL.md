---
name: compound-cook-it
description: Orchestrate the complete Compound Agent cycle through specification, planning, implementation, review, and lesson capture.
---

# Compound Cook It

Run the five phases in order, reading the corresponding repository skill before each:

1. `.agents/skills/compound-spec-dev/SKILL.md`
2. `.agents/skills/compound-plan/SKILL.md`
3. `.agents/skills/compound-work/SKILL.md`
4. `.agents/skills/compound-review/SKILL.md`
5. `.agents/skills/compound-learn/SKILL.md`

When Compound Agent state is available, initialize it with `ca phase-check init
<epic-id>`, start each phase with `ca phase-check start <phase>`, and run the matching
gate before advancing. Search memory and knowledge at the start of each phase. Keep the
specification file as the source of truth and update beads state when beads is enabled.

Do not advance from plan without acceptance criteria and a verification contract. Do
not advance from work with unfinished tasks or failing required checks. Do not finish
review without an independent approval. At the end, run `ca verify-gates <epic-id>`
when an epic is active, complete the required evidence, and report the final repository
state. If a phase cannot continue without a material user decision, preserve completed
work and ask one focused question.
