---
originalLink: /chapters/01-寻找一个稳定的抽象/03-skill让整张图归位
title: Skills Snap the Picture into Place
---

# Skills Snap the Picture into Place

"A tool-using animal" explains what an agent can do, not who it is. When skills arrived, a corner of that gap got filled — and the scattered parts began falling into place.

## Start from the skill

A skill is easy to mistake for yet another tool. But they are not the same kind of thing. A tool is a single call, discarded after use; it doesn't follow the agent into the next conversation. A skill has a name, can be reused, and can be moved from one agent to another without losing much. A nameable, reusable, transferable unit of capability — which is exactly what a skill is in a person. Someone who can make slide decks can still make slide decks at the next company.

A skill is a line on a resume.

That line generalizes. If an agent's capabilities can be read as resume entries, then the agent as a whole should be read as a person — not as a program that happens to call tools.

Looking at the same thing through a different abstraction usually reveals nothing. This time is different: lay "a person" over the picture, and the whole picture snaps into place.

## Follow the thread, and the parts line up

Treat the agent as a person, and parts that used to sit in isolation start finding their positions on their own.

The system prompt lands as the JD. It already reads like one — what this role does, who it reports to, what it may and may not touch. It's a statement of job responsibilities, not an incantation to be endlessly re-tuned.

Model tiers land as degrees. The gap between Opus, Sonnet, and Haiku maps to the rank and price of a PhD, a master's, a bachelor's. Assign work by degree: sending your most expensive hire to do a once-a-day format conversion is waste; sending your cheapest to carry long-chain reasoning is a gamble.

Long-term memory is the career record. What it has done, which pitfalls it hit, what a particular client prefers — all on file, and it travels to the next job.

A sandbox with a persistent volume is the work computer. Files, dependencies, configuration, unfinished projects all live on this machine. The environment tuned today is still there tomorrow, and today's work picks up where it left off.

Parts matching labels counts for little on its own — anyone can force a metaphor. What makes this view hold is that the relationships between the parts match too. The JD constrains which skills this person should use, rather than unleashing everything on the resume. The degree decides which tier of work they get. The record travels with the person and survives a transfer. These relationships weren't bolted on after the fact. Put the "person" abstraction in place, and they surface by themselves.

## A ready-made abstraction

The abstraction the agent layer needs doesn't have to be invented. A complete one already exists.

The parts falling into place is no coincidence. This whole line of work was modeled on humans from the start — the corpus is text humans wrote, alignment runs on human feedback, and even the words "assistant," "reasoning," "memory" are borrowed from people. Something built in humanity's image should be viewed through a mature set of human abstractions.

There is more than one way to abstract a person. Psychology abstracts personality, economics abstracts utility, biology abstracts the organism — each takes its own slice. The slice that fits the agent is the one that abstracts the person as labor: role, skill, degree, record. It already has a name — human resources. The cross-section HR cuts is exactly the position an agent occupies: a hireable unit of work that can take a job and leave a record. Because that cross-section fits, every part falls into place with none left over, instead of being wrestled into a rough fit.

Look at agents this way, and "is the prompt well written" becomes "is the JD clearly written"; "which model should we use" becomes "what degree does this role require." The questions get re-sorted. Whether this abstraction holds is not decided by anything said here — it's decided by whether the engineering decisions the following chapters derive from it stand up.

At this point, the picture is in place.
