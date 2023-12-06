x = `Time:      7  15   30
Distance:  9  40  200`.split("\n");

const time = +x[0].replaceAll(/\D/g, "");
const distance = +x[1].replaceAll(/\D/g, "");

let sum = 0;
for (let i=0; i<=time; i++) {
    if (distance < i*(time-i)) {
        sum++;
    }
}
console.log(sum);
