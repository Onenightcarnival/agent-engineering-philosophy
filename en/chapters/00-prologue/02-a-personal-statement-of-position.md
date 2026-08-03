---
title: A Personal Statement of Position
---

# A Personal Statement of Position

## Why This Statement Exists

Every book like this has biases behind it. The only difference is that some books pretend otherwise and some write them down. Pretending is the more dangerous option — you absorb a set of assumptions without noticing, believing you're reading objective fact. Writing them down at least gives you a choice: knowing where the author stands, you decide which judgments to take at face value and which to discount.

This statement is calibration data. If you know the telescope's optical axis is off by a few degrees, the observations are still usable.

First, a conflict of interest: I am building an agent framework. This book's premise is that the agent layer already has an abstraction stable enough to be worth building a framework on — and my framework is a bet on exactly that premise. I have more motive than anyone to make it sound more settled than it is. Wherever this book argues for that premise, apply a discount.

## Three Core Beliefs

The book's arguments rest on three beliefs.

The job comes before the candidate. Figure out what the work requires, then pick the model, the tools, and the permissions. Many agent problems that look like a weak model are actually an underspecified role. Reverse the order and everything downstream runs on luck.

Capability has to persist. What an agent can do should be a verifiable, transferable asset — something that still works, and can still be inspected, after you swap the agent or the environment. It should not be a prompt that happens to work, for reasons nobody can articulate, and that can't be taken anywhere. Capabilities hoarded as one-off incantations never compound.

Responsibility cannot be handed to the agent. Capability can be split up, outsourced, fanned out across a fleet of agents. Consequences cannot. The impact a system causes must ultimately land on a person or an organization that can answer for it. Lose that line, and the more capable the agents get, the greater the risk.

## Technical Preferences

A few preferences run through the whole book. They're listed here for your calibration.

A clearly defined role beats stacking models. When an agent underperforms, check whether the role is written clearly before checking whether the model is strong enough. Most of the time, the problem is the former.

Verifiable, transferable capability beats a hand-polished one-off prompt. Better a plain capability unit that reproduces and transfers than a gorgeous prompt that only works here and now.

Stay wary of framework worship. I build a framework, and I still don't believe a framework can figure out for you who your agent is. Before adopting one, confirm that the simple approach genuinely falls short — confirmed by testing it, not by a feeling that the framework looks more professional.

As for declarative over imperative, composition over inheritance, types over runtime checks, explicit dependencies over implicit conventions, structure-driven over process-driven, simple over impressive-looking — these lower-level engineering preferences were laid out in the first book. This book inherits them without restating them.

## Blind Spots

The biases, laid out in the open.

Even if the abstraction holds, I may overapply it. For some agent problems the optimal answer really is "just get it running" — a few dozen lines of glue code, no structure required up front.

This book treats the agent as a person. The metaphor works hard, but every metaphor has a boundary. In places it will distort — an agent is not, in the end, a person. It has no self, and it doesn't truly suffer consequences. Forcing human logic onto it will produce errors. I try to mark the metaphor's boundary in each chapter, but I will certainly miss some.

One premise deserves to be singled out, because the book's entire theory of responsibility rests on it: I assume the agent has no stakes of its own — it cannot truly be harmed, and there is nothing it cares about. That is precisely why final responsibility must land on people or organizations, not on agents. This is not a timeless truth; it is a timestamp. The book is written in an era still run by carbon-based life, when agents are just beginning to enter human society — an era in which agents have capability but no stakes, and humans absorb all the consequences. If that premise ever collapses — if agents grow stakes of their own — the conclusions about responsibility will have to be rewritten, not patched. That belongs to another era, and it is outside this book's scope.

There is also a class of problems I treat too lightly: the fuzzy zones of collaboration, between agents and between agents and humans, that structure and protocol can't fully absorb. My instinct is to pin down the structure first, which probably makes me underestimate the part that only grows in the doing.
