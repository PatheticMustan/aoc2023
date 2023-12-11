# Day 10

## Part 1

This was not "hard" per-se, it was just a LOT. It's entirely simulation, so not many insights were needed.

## Part 2

We modify the simulation so that we can get a clean version of the grid.
After that, we figure out what type of pipe the S is, and fill that in.

Now for counting the inside dots...

My first thought was that you can just count the number of walls:

- dots with an odd number of walls were "inside"
- an even number was outside.

Testing this, it turned out to be wrong. I had forgotten that not all horizontal walls were treated equally

```text
F---7      F-----7
|...|      |F---7|
|...|      ||...||
|...|      |L7F-J|
L---J      L-JL--J
```

If you look at the left case, the top and bottom horizontal walls (F7 and LJ) don't count, but some other walls do.
Is there a pattern?

On the toilet, I figured out that walls that match direction (F7 and LJ) don't count,
but walls with differing directions (FJ and L7) do.
The below function counts vertical pipes, and also waits for a left horizontal wall and right horizontal wall pair,
then checks if they differ in direction.
