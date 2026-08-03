---
title: Judgments of Fact and Final Responsibility
---

# Judgments of Fact and Final Responsibility

The two powers most easily conflated in a multi-agent team: the power to judge facts and the power of final release.

The power to judge facts answers "is this actually so?" The power of final release answers "given these facts, may this action land in reality?" The first should flow to the role closest to the facts. The second must rest with a party that can bear the consequences.

A truth-seeking team must keep these two powers apart. Mix them, and facts get flattened by responsibility while responsibility hides behind fact-talk.

## Whoever Is Closest to the Facts Leads the Judgment of Fact

Judgments of fact are not issued by rank.

A fact-checking agent that just finished a retrieval may know better than the editor-in-chief whether a citation holds up. An execution agent that just ran the tests may know better than the planning agent where the design will break. An agent that specializes in auditing security boundaries may know better than the delivery agent which action must not be released.

If the finally-accountable role overrides these local judgments simply because it sits upstream or higher, it commits the old human-organization error: substituting position for judgment.

A healthy agent team lets judgments of fact flow along the evidence. Whoever holds the evidence has the stronger voice on that local question. Work records, traces, evals, raw material — these are the grounds for judging facts.

The rule applies equally to hybrid human-agent systems. A human can hold agents accountable, can veto, can demand a redo — but cannot rewrite an agent's evidence-based judgment of fact on the strength of "I'm the one responsible." The responsible party may say this action cannot be released. It may not say the evidence doesn't exist.

## Whoever Bears the Consequences Keeps the Final Release

But judging facts isn't everything. There are also consequences.

An agent can judge that an action is very probably correct. But if the action will reach real customers, move real money, delete real data, or commit to real deliveries, the final decision cannot rest with something that bears no consequences.

On many local facts, agents may be more accurate, faster, more consistent. Final release still stays with a human or an organization, because consequences must land on a party that can be held to account. AI cannot go to prison, cannot go bankrupt, cannot stake its reputation, and will not feel the consequences.

The final point of accountability may say: "At this level of risk, I do not authorize proceeding." It must not say: "Because I'm responsible, your judgment of fact is wrong." The first is bearing consequences. The second is impersonating expertise.

The "no" here is not a rejection of the facts — it's a rejection of a particular action proceeding under those facts. The trolley is already out of control, the tests have already failed, the customer has already misunderstood, the data is already contaminated. No responsible party can erase these facts by declaration. What they can veto are the actions that convert risk into real consequences: release, commitment, payment, deletion, continued automatic execution.

This is the human's place in a hybrid system. Bearing the consequences does not make a person the natural superior of the facts. Humans keep the release power over final actions — emergency stop, rollback, publish, commit, pay, delete. Local facts belong to whoever stands closest to the evidence.

## Work Can Be Split; Time and Responsibility Cannot

The most seductive thing about multi-agent systems is fan-out: split a task into many subtasks, process them in parallel, gather the results. But only the mutually independent part can be split that way.

Some work is inherently serial: the next step cannot move until the previous one lands. This work does not split — nine pregnant women cannot deliver a baby in one month. Pile on parallel agents and you save none of the time the work inherently requires, while the added coordination and handoffs may make it slower. Fan-out buys parallelism, not exemption from serial dependency. Mistaking "can parallelize" for "can accelerate anything" is the most intoxicating illusion in agent work.

Impact doesn't split either. The wrong conclusions a system emits, the losses it causes, the promises it makes — none of these divide into ten shares because the work was split ten ways. The user sees one system, and the consequences merge back into one whole.

So good multi-agent design must have a single final point of accountability. That point can be a person, or an entity with legal and organizational responsibility — but it cannot be "all these agents participated, so each carries a little." That means no one carries it at all.

## Push to the Limit: When No Humans Remain

Push the question further: if the operational layer of a production system is agents all the way through, with no human in the loop, does responsibility still exist?

First separate two things that "no humans" blurs together: no humans operating, and no humans bearing the consequences. Operations can be handed entirely to agents, but the accounts the system moves, the data it deletes, the promises it makes — the consequences still land on people outside the system. The stakes remain human; only the operating has left human hands.

At that point, "holding to account" splits in two.

One half is punishment: shame, prison, bankruptcy, reputation on the line. This half evaporates with agents. Nothing will feel the consequences.

The other half is correction: locate the failure point, revoke which permission, rewrite which role definition, purge which memory, add which eval that missed the key risk. This half doesn't just survive — it works better on agents than on humans. You really can read an agent's trace, revoke its permissions, delete its memory. With a person, often you can't.

In agent systems, part of responsibility shifts from punishing someone to finding where the system failed and fixing it.

The final point of accountability changes too. It need not be a punishable person, but it must be findable, stoppable, rewritable, and rollbackable.

One line must not slacken: the final point of accountability must sit outside the optimization loop it governs. A system that sets its own goals, judges for itself whether the goals are still reachable, and decides for itself when to stop has dismantled the external check. It will find reasons for itself — "the goal is still within reach." The one thing you can trust least is its self-assessed stopping condition. The seat that holds the goals and the kill switch can be another agent, but never the one being optimized.

Pure agent systems must hold this line hardest. No human in the operating loop does not mean no external boundary. Goals, budgets, permissions, kill switches, rollback, audit — all must sit outside the thing being optimized. Otherwise the system rewrites truth-seeking into approval-seeking.

One layer further down: where does the chain of responsibility finally land? Only on a party that has stakes, can be held to account, and can answer for the consequences.

That party need not be a natural person. The legal person proved this long ago. We can sue a company, fine it, dissolve it — precisely because it has stakes (assets, survival), can be held accountable, and can answer. What bears the weight is the stakes, not the human form.

Whichever entity has stakes and can answer can serve as the endpoint. An agent that evaporates after the task, that no one can pursue, cannot. It can make decisions; it cannot be the endpoint. Otherwise all you have is a process answerable to no one — and calling that responsibility is just one more piece of responsibility theater.

The same applies to today's designs: don't mistake the rituals of responsibility in human organizations for responsibility itself. Signatures, approvals, reports, mutual confirmation — all can be pure performance. Responsibility is held up by these things: traceability, attribution, revocable permissions, correctability, and a party with stakes who can be found and can answer.

Separate judgments of fact from final responsibility and the whole team stands: facts flow to the roles that understand them best, and the power of final release stays with the person or organization that can bear the consequences.
