const x = `LR

11A = (11B, XXX)
11B = (XXX, 11Z)
11Z = (11B, XXX)
22A = (22B, XXX)
22B = (22C, 22C)
22C = (22Z, 22Z)
22Z = (22B, 22B)
XXX = (XXX, XXX)`.split("\n\n");

const [instructions, nodeText] = x;

const nodes = {};

// make node network
nodeText.split("\n").map(node => {
    const id = node.slice(0, 3);
    const left = node.slice(7, 10);
    const right = node.slice(12, 15);

    nodes[id] = [left, right];
});

let currentNodes = Object.keys(nodes).filter(v => v[2] === "A");

const stepCycles = currentNodes.map(currentNode => {
    let steps = 0;
    while (currentNode[2] !== "Z") {
        const instruction = +(instructions[steps % instructions.length] === "R");
        currentNode = nodes[currentNode][instruction];
        
        steps++;
    }
    return steps;
});

// get factors
const factors = new Set();

stepCycles.map(n => {
    while (n > 1) {
        for (let i=2; i<=n; i++) {
            if (n % i === 0) {
                factors.add(i);
                n /= i;
                break;
            }
        }
    }
    if (n !== 1) factors.add(n);
});

console.log(Array.from(factors).reduce((a, b) => a*b, 1));
