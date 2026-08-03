---
layout: home
hero:
  name: Agent Engineering Philosophy
  text: ""
  tagline: When autonomous actors enter a software system, what does software engineering need to rethink?
  actions:
    - theme: brand
      text: Start Reading
      link: /en/chapters/00-prologue/00-overview
    - theme: alt
      text: GitHub
      link: https://github.com/Onenightcarnival/agent-engineering-philosophy
features:
  - title: An abstraction one level above the model
    details: "The first book engineered the model as a probabilistic component. This one treats the agent as an autonomous actor: it has a job, skills, a track record, and a working environment of its own. The engineering object shifts from the application to the agent itself."
  - title: Treat the agent as a worker
    details: "The system prompt is a job description. Skills are résumé entries and certifications. Model tiers are degrees. Long-term memory is a career record. A persistent sandbox is the work computer. This lens reorganizes the problems of agent engineering."
  - title: Part two of a two-part series
    details: "The sequel to The Engineering Philosophy of LLM Applications. The first book was about living with an unreliable function; this one is about working with an unreliable colleague. Each stands on its own."
---

## What this book answers

The definition of "agent" has churned for two years. Early on it meant something close to a tool-using animal: a model that can call a few functions and run a loop. That definition isn't wrong, but it's thin. It says what an agent can do, not who an agent is.

Once skills, persistent sandboxes, long-term memory, and model tiers all arrived, a more stable abstraction surfaced: an agent is less like an animal holding a tool and more like a complete worker. It has a job, skills, a track record, and its own working environment.

This book follows that abstraction through an agent's entire working life:

- **A candidate is not an employee** — what a model-training company delivers is a candidate, not an agent already on the job. Pretraining, post-training, and model tiers only tell you its rough level of education.
- **Defining the job is engineering** — the system prompt is no longer just a prompt; it's a job description. Responsibilities, permission boundaries, and what not to touch are core engineering questions.
- **Skills must be verifiable and transferable** — a skill starts as a line on a résumé. To be reused across agents and environments, it has to be verifiable like a certification.
- **From "finish and vanish" to "long-term employment"** — a sandbox with a persistent volume is the agent's work computer; long-term memory is its career record.
- **From the individual to the team** — once a single agent's job is well defined, the next questions are handoffs, delegation, context isolation, and final responsibility. An agent's information window and the way roles can be spun up will change organizational form. Multi-agent engineering shouldn't simulate a corporation; it should redesign a truth-seeking team.

Think these questions through and agent engineering stops being about wiring tools and writing loops. The pressing question becomes: who is this agent, what is it responsible for, and what does it rely on to get the work done?

## Relation to the first book

[*The Engineering Philosophy of LLM Applications*](https://onenightcarnival.github.io/llm-engineering-philosophy/) starts from the probabilistic model. Its engineering object is the **application** built on top. This book starts from the agent as an autonomous actor. Its engineering object is the **agent itself**. That is an abstraction one level up, not a deeper cut at the same level.

Whatever can be explained at the model layer — uncertainty, declarative prompting, type contracts — this book cites from the first book rather than re-explaining.
