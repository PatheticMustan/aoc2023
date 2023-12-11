# Day 9

## Part 1

They literally tell you how to solve the problem... Just implement it.

Instead of having to actually make a new value in each array (which might be annoying!) you can just recognize that the answer to each line is the sum of the last item of all the differences.

For example...

```text
1   3   6  10  15  21
  2   3   4   5   6
    1   1   1   1
      0   0   0
```

In this test case, the final answer is equal to `21+6+1+0 = 28`.

## Part 2

For part 2, I stared at the example pattern a little more to find a pattern. How do we get the top left number?

```text
5  10  13  16  21  30  45
  5   3   3   5   9  15
   -2   0   2   4   6
      2   2   2   2
        0   0   0
```

Starting from the bottom, we can work out the next value by doing `rowAbove[0] - row[0]`, until we get to the first row.

```text
2 - 0 = 2
0 - 2 = -2
3 - (-2) = 5
10 - 5 = 5
```

Thus our answer is 5.
