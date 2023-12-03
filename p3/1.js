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

x.split("\n").map((line, index, original) => {
    let lastIndex = 0;

    for (let i=0; i<line.length/2; i++) {
        let match = line.slice(lastIndex).match(/\d+/);
        if (match !== null) {
            let start = match.index;
            let end = start + match[0].length;

            let symbolSearch = "";
            let symbolLines = original.slice(Math.max(index-1, 0), Math.min(index+1, original.length)+1);
            symbolLines.map(symbolLine => {
                symbolSearch += symbolLine.slice(Math.max(lastIndex+start-1, 0), Math.min(lastIndex+end+1, symbolLine.length));
            });
            if (symbolSearch.search(/[*=@%\-&/#+$]+/) !== -1) sum += +match[0];
            lastIndex += end;
        } else {
            break;
        }
    }
});

console.log(sum);
