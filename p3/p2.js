const x = `467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`;

let sum = 0;

let bounds = [];

//setup bounds
x.split("\n").map((line, index) => {
    let lastIndex = 0;
    bounds.push([]);
    
    for (let i=0; i<line.length/2; i++) {
        let match = line.slice(lastIndex).match(/\d+/);
        if (match === null) break;
        
        let start = match.index;
        let end = start + match[0].length;
        bounds[bounds.length-1].push({
            value: +match[0],
            start: lastIndex+start,
            end: lastIndex+end-1
        });

        lastIndex += end;
    }
});

function getNumberAtPosition(lineIndex, position) {
    if ((lineIndex < 0) || (lineIndex > bounds.length-1)) return undefined;

    
    return bounds[lineIndex].filter((o) => o.start <= position && o.end >= position)[0];
}

// search gears
x.split("\n").map((line, index) => {
    let lastIndex = 0;
    
    for (let i=0; i<line.length; i++) {
        let match = line.slice(lastIndex).match(/\*/);
        if (match === null) break;

        let start = match.index;
        let end = start + 1;

        let uniqueNumbers = new Set();
        let si = start+lastIndex;
        let s = [[index-1, si-1], [index-1, si], [index-1, si+1], [index, si-1], [index, si+1], [index+1, si-1], [index+1, si], [index+1, si+1]];
        s.map(([li, p]) => {
            const g = getNumberAtPosition(li, p);
            if (g !== undefined) uniqueNumbers.add(g);
            return g;
        });

        
        const un = Array.from(uniqueNumbers).map(v => v.value);
        if (un.length === 2) sum += +un[0] * +un[1];
        
        lastIndex += end;
    }
});

console.log(sum);
