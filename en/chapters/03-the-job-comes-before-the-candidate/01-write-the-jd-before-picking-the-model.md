---
originalLink: /chapters/03-岗位先于候选人/01-先写JD再选模型
title: Write the JD Before Picking the Model
---

# Write the JD Before Picking the Model

The usual approach is to pick the model first. Grab the strongest one available, wire up some tools, and then start wondering: what should we have it do?

That order is backwards. A company does not hire someone and then decide what position to create. The position exists first; then you look for someone who fits. Agent engineering works the same way: write the JD, then pick the model.

## With the JD Written First, Model Selection Gets Easy

A JD — a job description — answers questions about the role, not about the candidate: what this position must accomplish, who it answers to, what it delivers, what counts as acceptable, which resources it may touch, and which it may not.

Once those are written down, picking a model stops being a prestige question and becomes a matching question. The prestige question is "I want the strongest model" — a contest of bragging rights. The matching question is "how deep does the reasoning need to be, how much error can we tolerate, how much latency and cost can we afford" — a contest of fit. A degree is not job competence; what was missing was the thing to match against. The JD is that thing.

## What a JD Looks Like

Describing a role clearly does not require fancy wording. It requires a few explicit fields:

```
Role: Invoice data extraction
Responsibilities: Extract amount, tax ID, and invoice date from uploaded PDF invoices; output structured fields
Reporting: Deliver results to the reconciliation pipeline; when fields are missing or confidence falls below threshold, escalate to human review
Permissions: Read-only access to invoice files; may call OCR and validation tools; may not write to the finance system
Boundaries: No amount calculations, no reconciliation judgments — those belong to a downstream role
Acceptance criteria: Key-field accuracy meets target; when uncertain, escalate rather than fabricate
```

This document exists before any model does. With it written, "Haiku or Opus?" finally has a basis — this role needs no long-chain reasoning and is sensitive to latency and cost, so it should not be staffed with the most expensive degree. Without it, even the strongest model is just a smart person who has no idea what their job is.

The job comes before the candidate. Write this contract first, and everything that follows has a place to land.
