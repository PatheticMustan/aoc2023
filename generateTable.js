// example usage:
// node generateTable 5

// assumes all the files exist... otherwise they'll 404, i guess
const days = +(process.argv[2]) || 1;

let topRow =  "| Solutions |";
let divider = "| --------- |";
let partOne = "| Part 1    |";
let partTwo = "| Part 2    |";

for (let i=1; i<=days; i++) {
    const lf = f => `./p${i}/${f}`;

    topRow += ` [Day ${i}](${lf("README.md")}) |`;
    divider += " --------- |"
    partOne += ` [D${i}P1](${lf("1.js")}) |`;
    partTwo += ` [D${i}P2](${lf("2.js")}) |`;
}

const output = [topRow, divider, partOne, partTwo].join("\n");
console.log(output);