const x = `32T3K 765
T55J5 684
KK677 28
KTJJT 220
QQQJA 483`.split("\n");

// higher is stronger
const getStrength = card => "_J23456789T_QKA".indexOf(card);
let b;

const valueCards = x.map(line => {
    const [card, bid] = line.split(" ");
    let a = {};

    let jokers = 0;
    for (let i=0; i<5; i++) {
        if (card[i] === "J") jokers++;
        else a[card[i]] = (a[card[i]] || 0) + 1;
    }
    if (jokers === 5) {
        a = [5];
    } else {
        a = Object.values(a).sort((a, b) => b-a);
        a[0] += jokers;
    }
    

    // 1, 2, 3, 4, 5
    let counts = [0, 0, 0, 0, 0];
    a.forEach(v => counts[v-1]++);
    counts = counts.join("");

    let value = 0;

    // type takes priority
    switch (counts) {
        case "00001": {
            // console.log("five of a kind");
            value += 6e10;
            break;
        }
        case "10010": {
            // console.log("four of a kind");
            value += 5e10;
            break;
        }
        case "01100": {
            // console.log("full house");
            value += 4e10;
            break;
        }
        case "20100": {
            // console.log("three of a kind");
            value += 3e10;
            break;
        }
        case "12000": {
            // console.log("two pair");
            value += 2e10;
            break;
        }
        case "31000": {
            // console.log("one pair");
            value += 1e10;
            break;
        }
        case "50000": {
            // console.log("high card");
            value += 0e10;
            break;
        }
        default: {
            console.log("uhhhh");
        }
    }

    for (let i=0; i<5; i++) {
        // console.log("\t", card[i], getStrength(card[i]));
        value += getStrength(card[i]) * (100**(4-i));
    }

    
    // console.log("\t", counts);
    // console.log("\t", card, value);
    b = a;
    return [value, +bid];
});

valueCards
    .sort((a, b) => a[0] - b[0])
    .map(([_, bid], i) => bid*(i+1))
    .reduce((a, b) => a + b, 0);
