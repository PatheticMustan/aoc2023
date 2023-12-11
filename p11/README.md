# Day 11

## Part 1

Make a 2D grid, replace all the empty rows with 2 empty rows.
Transpose it, do the same thing for columns. Transpose it back.

Now make a list of the stars, and pair them off.
The distance is equal to (change in x) + (change in y), since it's Manhattan distance.

## Part 2

For this one, we can't just fill in 1000000 rows, we have to be a bit smarter.

Make arrays to keep track of the empty rows and columns.

This time during star generation, the X and Y will have an additional (1000000-1) added to them for each empty row/col is behind it.

Find the distances like normal, and sum them up.
