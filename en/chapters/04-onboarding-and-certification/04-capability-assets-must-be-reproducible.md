---
title: Capability Assets Must Be Reproducible
---

# Capability Assets Must Be Reproducible

A certification is trustworthy, at bottom, because the capability behind it is reproducible: same person, same examination, stable results. Change the examiner or the test site, and you don't get a pass one day and a fail the next.

A skill earns its keep the same way. If a skill only runs on one machine, at one moment, with a set of dependencies that happened to line up, it isn't a capability asset. It's a one-off script. Reproducibility is the threshold a skill crosses to go from personal craft to transferable asset.

## What Reproducibility Requires You to Write Down

Making a skill reproducible means taking everything that usually hides in the environment or gets filled in by tacit understanding, and putting it in plain sight:

```
skill: financial-report-table-validation
dependencies: list the required libraries and versions; do not rely on
  whatever happens to be installed in the global environment
environment: declare the runtime and configuration needed, so it can be
  rebuilt in a clean environment
input/output contract: what format the input takes, what structure the
  output has — explicit and stable
test cases: given inputs with expected outputs, so it can be verified
  to still work somewhere else
```

These four things — dependencies, environment, input/output contract, test cases — decide whether a skill can go from "runs on my setup" to "runs somewhere else, and can be verified to still be working."

Why type contracts and portability are the foundation of this kind of reliability is covered in the first book. Applied back to the skill as a unit of capability: write the contract down, declare the dependencies, supply the test cases, and the skill can survive being picked up by another agent — and survive future maintenance.

## An Irreproducible Capability Is a Liability

Put the other way: an irreproducible skill isn't merely "not good enough." It's a liability.

It will quietly break after some environment drift while you assume it's still fine. It can't be safely reused — every new deployment means re-tuning it from scratch. And it can't be verified — you don't know whether today's output is still correct. Accumulate a pile of skills like this and it looks like your capabilities are deepening, when what's actually accumulating is risk.

So the test of whether a skill is worth keeping is not "can it produce one impressive result." It's "can it produce the same result elsewhere, and later, reliably." If yes, it's an asset. If not, stop counting it as one.
