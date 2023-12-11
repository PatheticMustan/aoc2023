const x = `...#......
.......#..
#.........
..........
......#...
.#........
.........#
..........
.......#..
#...#.....`.split("\n").map(v => v.split(""));

const rotate = arr => arr[0].map((_, colIndex) => arr.map(row => row[colIndex]));

let arr = x.map(v => v.every(c => c===".")? [v, v] : [v]).flat();
arr = rotate(arr);
arr = arr.map(v => v.every(c => c===".")? [v, v] : [v]).flat();
arr = rotate(arr);

const width = arr[0].length;
const height = arr.length;

const stars = [];

for (let i=0; i<height; i++) {
    for (let o=0; o<width; o++) {
        if (arr[i][o] === "#") stars.push([i, o]);
    }
}

// now we sum
let sum = 0;
for (let i=0; i<stars.length; i++) {
    for (let o=i+1; o<stars.length; o++) {
        sum += Math.abs(stars[i][0] - stars[o][0]) + Math.abs(stars[i][1] - stars[o][1])
    }
}

console.log(sum);