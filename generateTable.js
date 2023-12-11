// example usage:
// node generateTable 5

// assumes all the files exist... otherwise they'll 404, i guess
const days = +(process.argv[2]) || 1;
const tableSize = 5;
let output = [];

for (let table=0; table<Math.ceil(days/tableSize); table++) {
    let topRow =  "| Solutions |";
    let divider = "| --------- |";
    let partOne = "| Part 1    |";
    let partTwo = "| Part 2    |";

    for (let i=(table*tableSize+1); i<=Math.min((table+1)*tableSize,days); i++) {
        const lf = f => `./p${i}/${f}`;

        // this looks yucky but i swear it makes the generated code look nice
        topRow  += ` [Day ${i}](${lf("README.md")}) |`;
        divider += ` -----------------------${"-".repeat((i>9)? 2 : 0)} |`
        partOne += ` [D${i}P1](${lf("1.js")})       |`;
        partTwo += ` [D${i}P2](${lf("2.js")})       |`;
    }

    output.push([topRow, divider, partOne, partTwo].join("\n"));
}

console.log(output.join("\n\n"));