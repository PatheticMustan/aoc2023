x = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`

y = x.split("\n").map(v => {
    let [id, handsText] = v.slice(5).split(": ");
    const hands = handsText.split("; ");

    let redMax = greenMax = blueMax = 0;
    hands.map(hand => {
        hand.split(", ").map(grab => {
            const [num, color] = grab.split(" ");
            switch (color) {
                case "red":
                    redMax = Math.max(redMax, num);
                    break;
                case "green":
                    greenMax = Math.max(greenMax, num);
                    break;
                case "blue":
                    blueMax = Math.max(blueMax, num);
                    break;
            }
        })
    })

    return redMax*greenMax*blueMax;
}).reduce((a,b)=>a+b,0)
