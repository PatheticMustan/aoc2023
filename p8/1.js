const x = `LLR

AAA = (BBB, BBB)
BBB = (AAA, ZZZ)
ZZZ = (ZZZ, ZZZ)`.split("\n\n");

const [instructions, nodeText] = x;

const nodes = {};

// make node network
nodeText.split("\n").map(node => {
    const id = node.slice(0, 3);
    const left = node.slice(7, 10);
    const right = node.slice(12, 15);

    nodes[id] = [left, right];
});

let currentNode = "AAA";
let steps = 0;
while (currentNode !== "ZZZ") {
    const instruction = +(instructions[steps % instructions.length] === "R");
    currentNode = nodes[currentNode][instruction];
    
    steps++;
}
console.log(steps);
