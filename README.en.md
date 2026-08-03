# Agent Engineering Philosophy

> English | [简体中文](README.md)
>
> The sequel to *The Engineering Philosophy of LLM Applications* — part two of a two-part series.
>
> This is a community translation of the original Chinese text. When in doubt, refer to the [Chinese version](README.md).

The first book started from the model: the model is a probabilistic component that makes mistakes, and engineering deals with the application built on top of it. This book starts somewhere else: the agent as an autonomous actor — with a job, skills, a track record, and a working environment of its own. The engineering object shifts from "building applications with models" to "designing the agent itself." That is an abstraction one level up, not a deeper cut at the same level.

The core lens: treat the agent as a worker.

- The system prompt is really a **job description**: responsibilities, permission boundaries, what to do and what not to touch.
- A skill is a line on a résumé; to be reused across agents and environments, it has to be verifiable like a **certification**.
- The base model is the candidate's **degree**: Opus is a PhD, Haiku a fresh graduate — the role and the degree have to match.
- Long-term memory is the **career record**: what it has done, what traps it has hit — and it travels when the agent moves on.
- A sandbox with a persistent volume is the worker's **work computer**: only a stable environment lets today's work carry into tomorrow.

This HR lens reorders many of the problems in agent engineering. Like the first book, this one is about how to think before how to build. It is not an agent framework manual, nor a multi-agent orchestration cheat sheet. It answers one question: when agents move into the core of a software system, what should engineering do?

---

## Relation to the first book

[*The Engineering Philosophy of LLM Applications*](https://onenightcarnival.github.io/llm-engineering-philosophy/) is about living with an unreliable **function**; this book is about working with an unreliable **colleague**.

Each book is complete on its own. But this one stands on the first one's shoulders: whatever can be explained at the model layer — uncertainty, declarative prompting, type contracts, skill portability — is cited from the first book, not retold.

---

## Table of contents

> Writing in progress. The chapters follow the worker abstraction: first find the stable abstraction, then walk through an agent's working life — where candidates come from, how jobs get defined, how skills are added, how the environment and the record persist, how performance is verified, and when to transfer or retire an agent. The final chapters move from the individual to the team, asking how a group of agents should collaborate and which problems of human organizations must not be carried over.

### Prologue: Why a Second Book

The abstraction moved up a level: from the model to the agent as an autonomous actor. The prologue draws the boundary between this book and the first.

- [Overview](en/chapters/00-prologue/00-overview.md)
- [Not Another Agent Framework Guide](en/chapters/00-prologue/01-not-another-agent-framework-guide.md)
- [A Personal Statement of Position](en/chapters/00-prologue/02-a-personal-statement-of-position.md)

### Chapter 1: Finding a Stable Abstraction

The first question of agent engineering is not "how do I build one" but "what is an agent." Chapter 1 moves from "a tool-using animal" to a more stable view, stopping where the abstraction takes shape.

- [Overview](en/chapters/01-finding-a-stable-abstraction/00-overview.md)
- [Without a Stable Abstraction, Every Framework Is Fake](en/chapters/01-finding-a-stable-abstraction/01-without-a-stable-abstraction-every-framework-is-fake.md)
- [A Tool-Using Animal](en/chapters/01-finding-a-stable-abstraction/02-a-tool-using-animal.md)
- [Skills Snap the Picture into Place](en/chapters/01-finding-a-stable-abstraction/03-skills-snap-the-picture-into-place.md)

### Chapter 2: The Model Is Not the Employee

An agent's life starts before the agent itself. What a model-training company delivers is a candidate, not an employee: pretraining is general education, post-training is vocational education, model tiers are degrees — and a degree is not job competence.

- [Overview](en/chapters/02-the-model-is-not-the-employee/00-overview.md)
- [Before the Agent Is Born](en/chapters/02-the-model-is-not-the-employee/01-before-the-agent-is-born.md)
- [Pretraining Is General Education](en/chapters/02-the-model-is-not-the-employee/02-pretraining-is-general-education.md)
- [Post-training Is Vocational Education](en/chapters/02-the-model-is-not-the-employee/03-post-training-is-vocational-education.md)
- [A Degree Is Not Job Competence](en/chapters/02-the-model-is-not-the-employee/04-a-degree-is-not-job-competence.md)

### Chapter 3: The Job Comes Before the Candidate

The right order is to define the job first, then pick the candidate. The system prompt is not an incantation but an employment contract; autonomy comes from clear boundaries. Most agents that run badly have an under-defined job, not an under-powered model.

- [Overview](en/chapters/03-the-job-comes-before-the-candidate/00-overview.md)
- [Write the JD Before Picking the Model](en/chapters/03-the-job-comes-before-the-candidate/01-write-the-jd-before-picking-the-model.md)
- [The System Prompt Is Not an Incantation](en/chapters/03-the-job-comes-before-the-candidate/02-the-system-prompt-is-not-an-incantation.md)
- [Permission Boundaries Define Autonomy](en/chapters/03-the-job-comes-before-the-candidate/03-permission-boundaries-define-autonomy.md)
- [Role Mismatch Is More Common than Lack of Ability](en/chapters/03-the-job-comes-before-the-candidate/04-role-mismatch-is-more-common-than-lack-of-ability.md)

### Chapter 4: Onboarding and Certification

A skill is not a tool; it is a unit of capability. Facing inward, it is onboarding training that makes an agent competent in a specific role; facing outward, it is a professional certification that can be reused and verified across agents and environments. For it to last, it must be reproducible.

- [Overview](en/chapters/04-onboarding-and-certification/00-overview.md)
- [A Skill Is Not a Tool](en/chapters/04-onboarding-and-certification/01-a-skill-is-not-a-tool.md)
- [Role-Specific Skills Are Onboarding Training](en/chapters/04-onboarding-and-certification/02-onboarding-training.md)
- [Transferable Skills Are Professional Certification](en/chapters/04-onboarding-and-certification/03-professional-certification.md)
- [Capability Assets Must Be Reproducible](en/chapters/04-onboarding-and-certification/04-capability-assets-must-be-reproducible.md)

### Chapter 5: The Work Computer and the Career Record

What turns an agent from a throwaway conversation into long-term work is continuity: the persistent sandbox is its work computer, and long-term memory is its career record. Memory is not chat history but a distilled record — and the record loops back to change the agent's judgment.

- [Overview](en/chapters/05-the-work-computer-and-the-career-record/00-overview.md)
- [A Worker Needs a Computer of Their Own](en/chapters/05-the-work-computer-and-the-career-record/01-a-worker-needs-a-computer-of-their-own.md)
- [A Stable Environment Makes Work Continuous](en/chapters/05-the-work-computer-and-the-career-record/02-a-stable-environment-makes-work-continuous.md)
- [Memory Is Not Chat History](en/chapters/05-the-work-computer-and-the-career-record/03-memory-is-not-chat-history.md)
- [A Track Record Changes Judgment](en/chapters/05-the-work-computer-and-the-career-record/04-a-track-record-changes-judgment.md)

### Chapter 6: Probation, Promotion, and Retirement

After taking the job, an agent still goes through probation, growth, transfers, promotion, and retirement. Evals are the probation period — they test job competence, not model rankings; performance comes from the work record; growth mostly happens outside the weights; transfers and promotions recombine for the new role; decommissioning is a departure with a process.

- [Overview](en/chapters/06-probation-promotion-and-retirement/00-overview.md)
- [Evals Are the Probation Period](en/chapters/06-probation-promotion-and-retirement/01-evals-are-the-probation-period.md)
- [Performance Comes from the Work Record](en/chapters/06-probation-promotion-and-retirement/02-performance-comes-from-the-work-record.md)
- [Growth Mostly Happens Outside the Weights](en/chapters/06-probation-promotion-and-retirement/03-growth-mostly-happens-outside-the-weights.md)
- [Transfers and Promotion](en/chapters/06-probation-promotion-and-retirement/04-transfers-and-promotion.md)
- [Departure and Retirement](en/chapters/06-probation-promotion-and-retirement/05-departure-and-retirement.md)

### Chapter 7: When the Team Has Many Agents

The real problems of a team are not multi-agent orchestration but role relationships: division of labor, handoffs, delegation, context isolation and sharing. Multi-agent writing is this chapter's concrete case: a crowd of agents generating in parallel and stitching the output together cannot write a good article; distinct judgment roles correcting each other, with an editor-in-chief owning the trade-offs — that is what a writing team looks like.

- [Overview](en/chapters/07-when-the-team-has-many-agents/00-overview.md)
- [A Team Is Not Multi-Agent Orchestration](en/chapters/07-when-the-team-has-many-agents/01-a-team-is-not-multi-agent-orchestration.md)
- [Division of Labor and Handoffs](en/chapters/07-when-the-team-has-many-agents/02-division-of-labor-and-handoffs.md)
- [Delegation and Escalation Paths](en/chapters/07-when-the-team-has-many-agents/03-delegation-and-escalation-paths.md)
- [Context Isolation and Sharing](en/chapters/07-when-the-team-has-many-agents/04-context-isolation-and-sharing.md)
- [Multi-Agent Writing Is Not Parallel Generation](en/chapters/07-when-the-team-has-many-agents/05-multi-agent-writing-is-not-parallel-generation.md)

### Chapter 8: Redesigning a Truth-Seeking Team

The final chapter. Agents change the ground conditions of organizations: larger information windows, isolated roles that can be spun up on demand, cheaper transfers, more complete work records. Multi-agent engineering should not simulate a corporation; it should redesign a truth-seeking team: keep the coordination mechanisms, cut the organizational theater, and handle the agent's own new problems with new mechanisms. Judgments of fact flow to the role closest to the facts; final responsibility lands on a person or organization that can bear the consequences.

- [Overview](en/chapters/08-redesigning-a-truth-seeking-team/00-overview.md)
- [The Ground Conditions Changed — Reexamine the Organization](en/chapters/08-redesigning-a-truth-seeking-team/01-the-ground-conditions-changed-reexamine-the-organization.md)
- [Keep the Coordination, Cut the Theater](en/chapters/08-redesigning-a-truth-seeking-team/02-keep-the-coordination-cut-the-theater.md)
- [New Problems Need New Mechanisms](en/chapters/08-redesigning-a-truth-seeking-team/03-new-problems-need-new-mechanisms.md)
- [Judgments of Fact and Final Responsibility](en/chapters/08-redesigning-a-truth-seeking-team/04-judgments-of-fact-and-final-responsibility.md)
- [Redesigning a Truth-Seeking Team](en/chapters/08-redesigning-a-truth-seeking-team/05-redesigning-a-truth-seeking-team.md)

---

## About

Stance: this book expresses personal views and a personal philosophy. It does not chase consensus or lean on authority.

Language: originally written in Chinese; this English edition is a translation.

Read online: [GitHub Pages](https://onenightcarnival.github.io/agent-engineering-philosophy/en/)

License: [CC BY-NC-SA 4.0](LICENSE).
