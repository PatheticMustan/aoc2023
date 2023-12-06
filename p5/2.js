const x = `seeds: 79 14 55 13

seed-to-soil map:
50 98 2
52 50 48

soil-to-fertilizer map:
0 15 37
37 52 2
39 0 15

fertilizer-to-water map:
49 53 8
0 11 42
42 0 7
57 7 4

water-to-light map:
88 18 7
18 25 70

light-to-temperature map:
45 77 23
81 45 19
68 64 13

temperature-to-humidity map:
0 69 1
1 0 69

humidity-to-location map:
60 56 37
56 93 4`.split("\n\n");

let values = [];
let v = x.shift().split(": ")[1].split(" ").map(Number);
for (let i=0; i<v.length; i+=2) {
    const seedStart = v[i];
    const seedEnd = seedStart + v[i+1] - 1;
    values.push([seedStart, seedEnd]);
}
values.sort((a, b) => a[0] - b[0]);


x.map(conversion => {
    const ranges = conversion.split("\n").slice(1);

    const ro = [];
    ranges.map(range => {
        const [dStart, sStart, rLength] = range.split(" ").map(Number);
        // we add this number if we're in the range
        const modifier = dStart-sStart;

        ro.push({start: sStart, end: sStart+rLength-1, modifier: modifier});
    });
    // sort ascending order
    // should work, assuming no overlap
    ro.sort((a, b) => a.start - b.start);

    const newValues = [];
    values.map(([seedStart, seedEnd]) => {
        for (const range of ro) {
            const startContained = (seedStart >= range.start && seedStart <= range.end);
            const endContained = (seedEnd >= range.start && seedEnd <= range.end)
            const isTotallyInside = (range.start >= seedStart && range.end <= seedEnd);

            // in this case, the order we check these conditions matter
            // isTotallyInside MUST be last

            // if it's totally inside the range, just add a modifier to the whole thing
            if (startContained && endContained) {
                newValues.push([seedStart+range.modifier, seedEnd+range.modifier]);
                return;
            } else if (startContained && !endContained) {
                // add [seedStart, range.end] (+mod) and
                // continue checking[range.end+1, seedEnd] (+mod)
                newValues.push([seedStart+range.modifier, range.end+range.modifier]);
                seedStart = range.end + 1;
            } else if (isTotallyInside) {
                // push beginning (no mod), middle (mod), and continue checking end
                // we can assume it doesn't include the start
                newValues.push([seedStart, range.start-1]);
                newValues.push([range.start+range.mod, range.end+range.mod]);
                if (!endContained) seedStart = range.end + 1;
            } else if (endContained) {
                // push [seedStart, rangeStart] (no mod), [rangeStart, seedEnd] (mod)
                newValues.push([seedStart, range.start-1]);
                newValues.push([range.start+range.modifier, seedEnd+range.modifier]);
                return;
            }
        }
        newValues.push([seedStart, seedEnd]);
    });
    values = newValues.sort((a, b) => a[0] - b[0]);
});

const lowest = values.map(v => v[0]).filter(v => !Number.isNaN(v)).reduce((a, b) => Math.min(a, b));
console.log(lowest);
