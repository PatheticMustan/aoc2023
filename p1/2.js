x = `two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`;

const nm = [ ["one", 1], ["two", 2], ["three", 3], ["four", 4], ["five", 5], ["six", 6], ["seven", 7], ["eight", 8], ["nine", 9], ["1", 1], ["2", 2], ["3", 3], ["4", 4], ["5", 5], ["6", 6], ["7", 7], ["8", 8], ["9", 9]]

x.split("\n").map(v => {
    // text, value, index
    let least = ["natsumi", 0, Infinity];
    let most = ["natsumi", 0, -1];
    
    nm.map(([text, value]) => {
        if (v.indexOf(text) !== -1 && v.indexOf(text) < least[2]) least = [text, value, v.indexOf(text)];
        if (v.lastIndexOf(text) !== -1 && v.lastIndexOf(text) > most[2]) most = [text, value, v.lastIndexOf(text)];
    });
    
    return least[1]*10 + most[1];
}).map(Number).reduce((a,b) => a+b, 0)
