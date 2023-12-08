# Day 8

## Part 1

Part 1 seemed mainly like setup for a harder part 2.

After building a node list (HashList in other languages!), we can simulate the directions until we get to `ZZZ`.

## Part 2

In part 2, we're instead starting with any node that ends with `A` and stopping once every single node stops at a node that ends with `Z`.

I tried directly simulating this, but it crashed my web browser... Maybe I shouldn't run my code directly in Chrome DevTools...?

It seems like the cycles would take way too long to directly simulate, so instead we can find how long each cycle takes individually (treat it exactly like part 1), and get the least common multiple between all the step cycles.

I wrote a short little script that gets all the prime factors into a set. It's probably not optimal, but I don't think it matters that much given how small each stepCycle is.

We re-use the `factors` set, and multiply all of them together to get the LCM, which is when they should all first align. The number is very big.
