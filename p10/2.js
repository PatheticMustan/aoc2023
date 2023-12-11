const x = `.F----7F7F7F7F-7....
.|F--7||||||||FJ....
.||.FJ||||||||L7....
FJL7L7LJLJ||LJ.L-7..
L--J.L7...LJS7F-7L7.
....F-J..F7FJ|L7L7L7
....L7.F7||L7|.L7L7|
.....|FJLJ|FJ|F7|.LJ
....FJL-7.||.||||...
....L---J.LJ.LJLJ...`;

const grid = x.split("\n").map(v => v.split(""));
// make empty grid, we'll fill in the pipes later
const gridMasked = x.split("\n").fill(".".repeat(grid[0].length)).map(v => v.split(""));



const startTextPosition = x.indexOf("S");
const startRow = Math.floor(startTextPosition/(grid[0].length+1));
const startIndex = startTextPosition - startRow*(grid[0].length+1);



const goUp = (row, index) => {
    row = row - 1;
    if (row === startRow && index === startIndex) return "DONE";

    const n = grid[row]?.[index];
    if ("|7F".includes(n)) gridMasked[row][index] = n;
    if (n === "|") startingFunctions.push(() => goUp(row, index));
    if (n === "7") startingFunctions.push(() => goLeft(row, index));
    if (n === "F") startingFunctions.push(() => goRight(row, index));
}

const goLeft = (row, index) => {
    index = index - 1;
    if (row === startRow && index === startIndex) return "DONE";

    const n = grid[row]?.[index];
    if ("-LF".includes(n)) gridMasked[row][index] = n;
    if (n === "-") startingFunctions.push(() => goLeft(row, index));
    if (n === "L") startingFunctions.push(() => goUp(row, index));
    if (n === "F") startingFunctions.push(() => goDown(row, index));
}

const goDown = (row, index) => {
    row = row + 1;
    if (row === startRow && index === startIndex) return "DONE";

    const n = grid[row]?.[index];
    if ("|LJ".includes(n)) gridMasked[row][index] = n;
    if (n === "|") startingFunctions.push(() => goDown(row, index));
    if (n === "L") startingFunctions.push(() => goRight(row, index));
    if (n === "J") startingFunctions.push(() => goLeft(row, index));
}

const goRight = (row, index) => {
    index = index + 1;
    if (row === startRow && index === startIndex) return "DONE";

    const n = grid[row]?.[index];
    if ("-J7".includes(n)) gridMasked[row][index] = n;
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



// figure out what tile the S should be
// cmon...
const UpCon    = ("|7F".includes(grid[startRow-1]?.[startIndex])),
      LeftCon  = ("-LF".includes(grid[startRow]?.[startIndex-1])),
      DownCon  = ("|LJ".includes(grid[startRow+1]?.[startIndex])),
      RightCon = ("-J7".includes(grid[startRow]?.[startIndex+1]));
let s = "";
if (UpCon && DownCon) s = "|";
if (LeftCon && RightCon) s = "-";
if (UpCon && RightCon) s = "L";
if (UpCon && LeftCon) s = "J";
if (LeftCon && DownCon) s = "7";
if (DownCon && RightCon) s = "F";
gridMasked[startRow][startIndex] = s;

// now we can get to the actual work
let count = 0;
gridMasked.map(line => {
    let walls = 0;
    let lastHorizontalWall = "";
    for (let i=0; i<line.length; i++) {
        // if we're at a dot, and we've passed an odd number of walls, we're on the inside of the loop
        if (line[i] === "." && (walls & 1)) count++;

        /** My first thought was that you can just count the number of walls:
         * - dots with an odd number of walls were "inside"
         * - an even number was outside.
         * 
         * Testing this, it turned out to be wrong. I had forgotten that not all horizontal walls were treated equally
         * 
         * F---7      F-----7
         * |...|      |F---7|
         * |...|      ||...||
         * |...|      |L7F-J|
         * L---J      L-JL--J
         * 
         * If you look at the left case, the top and bottom horizontal walls (F7 and LJ) don't count, but some other walls do.
         * Is there a pattern?
         * 
         * On the toilet, I figured out that walls that match direction (F7 and LJ) don't count,
         * but walls with differing directions (FJ and L7) do.
         * The below function counts vertical pipes, and also waits for a left horizontal wall and right horizontal wall pair,
         * then checks if they differ in direction.
         */
        if (line[i] === "|") walls++;
        if (line[i] === "L" || line[i] === "F") {
            lastHorizontalWall = line[i];
        } else if (line[i] === "7" || line[i] === "J") {
            lastHorizontalWall += line[i];
            if (lastHorizontalWall === "L7" || lastHorizontalWall === "FJ") walls++;
            lastHorizontalWall = "";
        }
    }
});

console.log(count);