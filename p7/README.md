# Day 7

## Part 1

For this one, I wanted to end up with a number value for each hand, so I could easily sort it by type, then first card, then second card...

Instead of having some complex format to store each card's value, I just stuck it all in one big number. I put it in the format `Rank | Card 1 | Card 2 | Card 3 | Card 4 | Card 5`.

Most of the code is just the switch case for ordering the type of hand it is. To figure out the rank, I count the occurences of all the cards, then group the occurences, and convert it into a string.

Depending on the hand, I then add `(a number)e10`. The `e10` is so the type of hand overrides any of the cards.

I then add the value of each hand into it's own little place, and sort.

## Part 2

For part 2, to make Jokers the lowest value, it was just a one line change to `getStrength()`.

The ideal strategy with jokers is ALWAYS to add the jokers to your highest occurence. If you have a pair and one joker, you get a three of a kind. If you have a three of a kind and two jokers, you now have a five of a kind.

`<Insert cute little diagram here>`

Otherwise, part 2 was the same.
