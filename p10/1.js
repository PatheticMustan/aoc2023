const x = `..F7.
.FJ|.
SJ.L7
|F--J
LJ...`;

const grid = x.split("\n").map(v => v.split(""));

const startTextPosition = x.indexOf("S");
const startRow = Math.floor(startTextPosition/(grid[0].length+1));
const startIndex = startTextPosition - startRow*(grid[0].length+1);

let count = 0;



const goUp = (row, index) => {
    row = row - 1;
    if (row === startRow && index === startIndex) return "DONE";

    const n = grid[row]?.[index];
    count++;
    //console.log(`Going Up: [${row}, ${index}]`);

    if (n === "|") startingFunctions.push(() => goUp(row, index));
    if (n === "7") startingFunctions.push(() => goLeft(row, index));
    if (n === "F") startingFunctions.push(() => goRight(row, index));
}

const goLeft = (row, index) => {
    index = index - 1;
    if (row === startRow && index === startIndex) return "DONE";

    const n = grid[row]?.[index];
    count++;
    //console.log(`Going Left: [${row}, ${index}]`)
    
    if (n === "-") startingFunctions.push(() => goLeft(row, index));
    if (n === "L") startingFunctions.push(() => goUp(row, index));
    if (n === "F") startingFunctions.push(() => goDown(row, index));
}

const goDown = (row, index) => {
    row = row + 1;
    if (row === startRow && index === startIndex) return "DONE";

    const n = grid[row]?.[index];
    count++;
    //console.log(`Going Down: [${row}, ${index}]`)
    
    if (n === "|") startingFunctions.push(() => goDown(row, index));
    if (n === "L") startingFunctions.push(() => goRight(row, index));
    if (n === "J") startingFunctions.push(() => goLeft(row, index));
}

const goRight = (row, index) => {
    index = index + 1;
    if (row === startRow && index === startIndex) return "DONE";

    const n = grid[row]?.[index];
    count++;
    //console.log(`Going Right: [${row}, ${index}]`)
    
    if (n === "-") startingFunctions.push(() => goRight(row, index));
    if (n === "J") startingFunctions.push(() => goUp(row, index));
    if (n === "7") startingFunctions.push(() => goDown(row, index));
}

let startingFunctions = [
    () => goUp(startRow, startIndex),
    () => goLeft(startRow, startIndex),
    () => goDown(startRow, startIndex),
    () => goRight(startRow, startIndex)
];

while (startingFunctions.length !== 0) {
    startingFunctions.pop()();
}

console.log(count/4);