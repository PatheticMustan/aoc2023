# Day 1

## Part 1

This one was pretty simple.

Just filter out all the non-digits with a regex, and get the first and last digit. Not too hard.

## Part 2

The big thing here is that you can't just do `.replaceAll()`, because some text digits might overlap.
You have to just do `.indexOf()` and `.lastIndexOf()` for all of them.

I'm sure I could make my code look cleaner, but I don't mind how it is now.
