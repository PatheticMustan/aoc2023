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

let values = x.shift().split(": ")[1].split(" ").map(Number);

x.map(conversion => {
    const ranges = conversion.split("\n").slice(1);

    const ro = [];
    ranges.map(range => {
        
        
        const [dStart, sStart, rLength] = range.split(" ").map(Number);
        // we add this number if we're in the range
        const modifier = dStart-sStart;

        ro.push({start: sStart, end: sStart+rLength-1, modifier: modifier});
    });

    values = values.map(seed => {
        for (const range of ro) {
            if (seed >= range.start && seed <= range.end) {
                return seed + range.modifier;
            }
        }
        return seed;
    });
});

const lowest = values.reduce((a, b) => Math.min(a,b));
console.log(lowest);
