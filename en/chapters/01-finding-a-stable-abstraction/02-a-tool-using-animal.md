---
title: A Tool-Using Animal
---

# A Tool-Using Animal

"What is an agent" has long had a popular answer: an LLM, plus tools, plus a loop. The model does the thinking, the tools reach into the outside world, and the loop lets it close in on the goal step by step. A minimal implementation runs in twenty lines of code.

The definition has real power. It pulls "agent" back from a mystified word to something you can build with your own hands, stripping away all the mysticism. Tool use is a genuine dividing line: a model that can call tools and run a loop has crossed over from "can only generate text."

## A real line, but too low

History textbooks once gave humans a similar definition: man is the tool-using animal. The moment a hand raised a stone to crack open a nut, humans parted ways with the other animals. The definition isn't wrong — tool use really is a dividing line. But nobody today would use it to describe who a person is.

Tool use explains what something can do. It says nothing about who it is. A chimp that can wield a stone and a carpenter both "use tools," yet they are not the same kind of thing. The difference isn't in the tools. It's in the "what for" behind them.

The agent definition is stuck in the same place. The same loop and the same set of tools, given a different purpose, make a completely different agent. A loop that keeps querying a database and calling APIs might be doing customer support, might be doing risk control, might be hauling the entire database out the door. Mechanically they are identical; as to who they are, they have nothing in common. The definition leaves no room for purpose.

## The termination condition exposes the gap

The gap shows sharpest at the termination condition.

A thing that only knows how to loop doesn't know when it's done. Stop after ten steps? Stop on reaching a certain state? Wait for a human to say yes? That depends on what job it's doing — and "what job it's doing" is exactly the piece this definition is missing. The termination condition cannot be a generic switch. It doesn't belong to the mechanism layer; it belongs to the purpose layer, and "a tool-using animal" has no purpose layer.

How to write the loop, how to design the tools, how to manage state — all of that was settled at the model layer and needs no rehash here. The gap isn't in those parts. What this definition lacks is an entire layer: the one about why this agent exists, what boundaries it must keep, and who it answers to.

## Mechanism complete, identity empty

A tool-using animal describes what it can do. The capabilities are all there. The identity is blank.

To answer who an agent is, you need a different abstraction — one with room for purpose, role, and responsibility. That abstraction grows out of something concrete: the skill.
