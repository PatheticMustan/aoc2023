x = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`;

x.split("\n").map(v => {
    const digits = v.split("").filter(n => +n == n);
    return digits[0] + digits.pop();
}).map(Number).reduce((a,b) => a+b, 0)
