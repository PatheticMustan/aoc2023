# Day 3

## Part 1

Day 3 was definitely very tedious.

I first got the surrounding lines (make sure you don't go out of bounds), and then sliced it around the index of each number (from start-1 to end+1).

After that, you can use Regex again to check if there are any symbols.

If there are, add that number to the sum.

## Part 2

If part 1 was bad, part 2 was SUPER SUPER bad.

For this part I made a util function that gets the number at any particular row+index. Now we loop over each gear `(*)`, and check how many unique numbers are around it.

If it's exactly two, we can multiply the two numbers, and add it to our sum. Most of my troubles was trying to figure out how to structure my code to get unique numbers.
