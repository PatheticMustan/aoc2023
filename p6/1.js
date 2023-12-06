x = `Time:      7  15   30
Distance:  9  40  200`.split("\n");

const time = x[0].split(/[ ]/).filter(v => parseInt(v)).map(Number);
const distance = x[1].split(/[ ]/).filter(v => parseInt(v)).map(Number);


let product = 1;

time.map((t, index) => {
    let sum = 0;
    for (let i=0; i<=t; i++) {
        if (distance[index] < i*(t-i)) {
            sum++;
        }
    }
    product *= (sum || 1);
});
console.log(product);
