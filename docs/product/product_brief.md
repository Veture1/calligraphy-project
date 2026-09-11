# Product Brief

## 1. Product Overview

This project is a digital companion for calligraphy teaching and long-term practice.

It connects classroom management, assignments, calligraphy materials, practice records, and a lightweight pet progression system within one learning experience.

The product is designed primarily for calligraphy teachers, students, and parents in China. The initial client will be a WeChat Mini Program, while the product domain and backend should remain independent from WeChat so that other clients can be introduced later.

The product is not intended to replace calligraphy teachers or automate artistic judgment. Its purpose is to reduce repetitive administrative work for teachers and make students' long-term practice more visible, continuous, and engaging.

---

## 2. Problem

### Teacher

Calligraphy teaching involves a considerable amount of repetitive organizational work outside the classroom.

Teaching materials are often distributed across personal archives, books, image folders, websites, chat histories, and previous lesson notes. Preparing a lesson therefore requires repeated searching and organization.

Operational tasks such as attendance, assignment distribution, submission collection, and practice tracking may also depend on manual records or fragmented communication tools.

The problem is not simply the absence of digital tools. Existing tools do not necessarily reflect the structure of calligraphy teaching itself.

### Student

Calligraphy practice is cumulative but its progress is often difficult to perceive.

A student may repeatedly copy the same copybook or character over a long period, while the immediate visible result of each individual practice session is limited.

Assignments can therefore feel like isolated tasks rather than part of a continuous learning process.

Students need a way to see that repeated practice leaves a trace.

### Parent

For younger students, parents may be the people who actually operate the digital product.

They may need to:

* receive assignment information;
* help a child check in;
* upload practice work;
* understand whether assignments have been completed;
* observe long-term learning progress.

The system therefore cannot assume that every student owns or independently operates a WeChat account.

---

## 3. Product Vision

Create a calm digital environment in which calligraphy learning accumulates over time.

Teaching materials become reusable rather than repeatedly searched for.

Assignments become part of a persistent learning record rather than disappearing into chat history.

Practice becomes visible through作品、学习记录和宠物成长，而不是只通过分数或排名来证明。

The product should make teaching easier without making teaching more administrative, and make practice more engaging without turning calligraphy into a game.

---

## 4. Product Concept

The system connects four core activities:

```text
Prepare
   ↓
Teach
   ↓
Practice
   ↓
Accumulate
```

### Prepare

Teachers organize and retrieve calligraphy materials and reuse previous teaching resources.

### Teach

Teachers manage classes, lessons, attendance, and assignments.

### Practice

Students or parents view assignments and upload completed practice.

### Accumulate

Practice records remain visible over time.

Students gain experience through consistent practice, and that accumulated experience is represented through pets associated with the copybooks they study.

The pet system is therefore not an independent game layered on top of the product.

It is a visual representation of accumulated practice.

---

## 5. Primary Users

### Teacher

The teacher is responsible for teaching activities and learning organization.

Primary needs include:

* finding and organizing teaching materials;
* managing multiple classes;
* recording attendance;
* publishing assignments;
* reviewing student submissions;
* tracking student practice history;
* reusing previous lesson materials.

The system should reduce administrative work rather than create additional reporting obligations.

### Student

The student is the subject of the learning record.

Primary needs include:

* understanding today's learning task;
* completing attendance with minimal friction;
* viewing assignments;
* uploading practice work;
* viewing previous work;
* seeing long-term practice progress;
* developing pets associated with studied copybooks.

A Student is a domain entity and does not necessarily correspond to an authenticated User account.

### Parent / Guardian

A parent or guardian may operate the system on behalf of one or more students.

Primary needs include:

* switching between children where necessary;
* receiving and viewing assignment information;
* assisting with attendance and submission;
* observing completion and practice history.

This role is especially important for younger students.

---

## 6. Core User Relationships

The product should distinguish between authentication identity and learning identity.

Conceptually:

```text
User
├── Teacher
└── Guardian
      │
      ├── Student A
      └── Student B
```

A Student represents the learner whose attendance, assignments, work, progress, and pets are recorded.

A User represents a person who can authenticate and operate the product.

The relationship may evolve as older students begin operating their own accounts.

This distinction should remain explicit in future domain and authentication design.

---

## 7. Core Value Propositions

### For teachers

Turn fragmented teaching resources and repetitive classroom administration into reusable teaching infrastructure.

### For students

Turn repeated practice into a visible history of learning.

### For parents

Provide a lightweight view of assignments and learning progress without requiring participation in a separate educational platform.

---

## 8. Product Principles

### 8.1 Teaching comes before gamification

The product exists to support calligraphy teaching.

The pet system must serve practice rather than dictate the learning process.

Features should not be introduced solely because they increase engagement if they weaken the educational experience.

### 8.2 Reward continuity rather than competition

The primary progression mechanism should reflect sustained practice.

The system should avoid making ranking, comparison, or competitive performance the central motivation.

A student's progress should primarily be understood relative to their own previous practice.

### 8.3 Practice should leave a visible trace

Assignments should not disappear after submission.

Attendance, uploaded work, studied copybooks, teacher feedback, and pet progression should together form a persistent learning history.

### 8.4 Student interaction should remain lightweight

Common student actions should require very few steps.

Typical flows such as:

```text
View assignment
→ Upload work
→ Submit
```

or:

```text
Enter class
→ Check in
```

should remain deliberately short.

### 8.5 Do not transfer administrative burden to teachers

A digital system is not automatically an improvement.

If recording information in the product takes more effort than the teacher's existing workflow, the design has failed.

Repeated information should be reusable, defaults should be sensible, and unnecessary data entry should be avoided.

### 8.6 Calligraphy and student work are the visual centre

The interface should allow copybooks, characters, paper, ink, and student work to carry the visual identity of the product.

Administrative interface elements should remain quiet.

The product should avoid reducing Chinese calligraphy to generic decorative symbols or stereotypical “traditional Chinese” visual language.

### 8.7 Gamification should retain restraint

Pets may provide character, attachment, and visible progression, but should not overwhelm the learning interface.

The product is not a pet-collection game containing a calligraphy feature.

It is a calligraphy product in which practice can acquire a living representation.

### 8.8 Platform choice should not define the product

The first client may be a WeChat Mini Program because it minimizes adoption friction for Chinese families.

However:

```text
Product ≠ WeChat Mini Program
```

Business logic, learning records, authentication concepts, and domain entities should remain independent from the client platform whenever practical.

---

## 9. Initial Product Scope

The first usable version should establish the core teaching loop:

```text
Teacher prepares or publishes work
        ↓
Student attends class
        ↓
Student receives assignment
        ↓
Student submits practice
        ↓
Teacher reviews completion
        ↓
Practice contributes to learning history
        ↓
Pet progression reflects accumulated practice
```

The initial product should therefore concentrate on:

* classes;
* students and guardians;
* attendance;
* assignments;
* submissions;
* basic teacher review;
* practice history;
* copybook association;
* experience accumulation;
* pet progression;
* basic teaching-material organization.

Detailed feature requirements belong in `PRD.md`.

---

## 10. Explicit Non-Goals

The initial product is not intended to become:

* a social network;
* a public student-work community;
* a competitive leaderboard;
* a pet battle game;
* an e-commerce platform;
* a general-purpose school management system;
* an automated replacement for teacher evaluation;
* an AI handwriting scoring system.

These ideas may be reconsidered independently in the future, but they should not shape the initial architecture unless required by current product needs.

---

## 11. Experience Goals

The product should feel:

* quiet rather than stimulating;
* deliberate rather than crowded;
* warm without becoming childish;
* playful where appropriate, but not game-like everywhere;
* culturally grounded without relying on decorative clichés;
* simple enough for parents and children to understand without instruction.

The administrative and learning layers may have different densities, but they should belong to the same visual system.

---

## 12. Success Definition

Early success should not be measured primarily by user growth.

The first question is whether the product improves the real teaching workflow.

Qualitative indicators include:

### Teacher

* lesson preparation becomes easier;
* previous materials can be found and reused;
* attendance requires less manual bookkeeping;
* assignments and submissions are easier to track;
* using the system does not introduce substantial extra work.

### Student

* students can understand and submit assignments without explanation;
* previous practice remains easy to revisit;
* pet progression makes accumulated practice perceptible;
* the system encourages continuation without creating pressure to compete.

### Parent

* parents can understand what needs to be completed;
* supporting a child requires little learning;
* one parent can reasonably manage multiple children if necessary.

Quantitative metrics can be defined after the first real teaching trial.

---

## 13. Key Assumptions

The current product direction assumes that:

* most initial users are located in mainland China;
* WeChat is already part of the communication environment between teachers and families;
* some students are minors;
* parents may operate the product on behalf of students;
* teachers may teach multiple classes;
* students may remain in the system across multiple courses or copybooks;
* student submissions will primarily consist of photographs of handwritten work;
* the first deployment will be relatively small and can prioritize correctness and usability over large-scale infrastructure.

These assumptions should be validated during real-world use.

---

## 14. Open Product Questions

The following questions remain intentionally unresolved and should be addressed before their corresponding features are implemented.

### Identity

* Can older students own independent User accounts?
* Can one Student be associated with multiple guardians?
* Can one User be both Teacher and Guardian?

### Classes

* Can a student participate in multiple classes simultaneously?
* Does learning history belong to the student globally or to a specific teacher/class relationship?
* What happens to historical records after a student leaves a class?

### Assignments and lessons

* Are Lesson and Assignment separate concepts?
* Can one lesson contain multiple assignments?
* Can teachers reuse assignments between classes?

### Attendance

* Is attendance attached to a Lesson, a ClassSession, or another explicit session entity?
* Should check-in use QR codes, numeric codes, teacher confirmation, or several mechanisms?

### Pets

* Does a student own one pet per copybook?
* Can the same pet continue growing across different teachers or classes?
* What exactly triggers evolution?
* Is experience determined purely by completion or partly by teacher evaluation?

### Teaching materials

* Which materials are platform-provided?
* Which are uploaded by teachers?
* Are teacher-created materials private by default?
* Can materials be reused across classes?
* How should copyright-sensitive copybook material be handled?

These questions should not be answered implicitly by implementation.

---

## 15. Current Platform Direction

The initial client is expected to be a WeChat Mini Program because it minimizes installation and onboarding friction for Chinese students and parents.

The intended system boundary is:

```text
Clients
├── WeChat Mini Program
└── Teacher Web Interface
          │
          ▼
      Backend API
          │
    ┌─────┴─────┐
    ▼           ▼
Database    Object Storage
```

The backend should remain client-independent so that future clients such as native iOS, Android, or web applications can reuse the same domain model and data.

Detailed technology choices belong in `ARCHITECTURE.md`, not in this document.

---

## 16. Document Boundary

This document defines:

* why the product exists;
* who it serves;
* what fundamental problem it addresses;
* what kind of product it intends to become;
* the principles that constrain future decisions;
* its broad initial scope;
* major assumptions and unresolved questions.

It does **not** define:

* detailed feature specifications;
* page layouts;
* API endpoints;
* database schemas;
* implementation tasks;
* exact technical architecture;
* sprint planning.

Those concerns belong respectively in the PRD, user-flow, domain, design, architecture, and execution documents.
