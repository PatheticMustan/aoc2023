# Day 5

## Part 1

The first part seemed simple, but was actually setting up a very evil part 2.

You have to run each "seed" through a number of conversions.
Each conversion was listed as having a `destinationStart`, `sourceStart`, and `length`.

By subtracting `destinationStart` from `sourceStart`, we're able to find out how much each number in the range changes (let's call it `modifier`).

I then have a giant list of all these ranges, and loop through each one to find out how much each seed should be modified. Ka-chow!

## Part 2

This one was way harder. Instead of the initial numbers representing seeds, the pairs represented "ranges of seeds", which mean there could be a gigantic amount of seeds. Not something we can brute force!

Rather than processing each seed as if it's a number, we now have to process it as a range all at once.

This means multiple modifier ranges can apply to a single seed range, which means we have to be very careful about all the different ways a modifier range can change a seed range.

It's a little hard to explain without a picture...

Once we apply all the conversions, to get the lowest seed, we sort the seed ranges by their starts, and pick the first one.
