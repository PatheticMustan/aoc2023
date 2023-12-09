const x = `0 3 6 9 12 15
1 3 6 10 15 21
10 13 16 21 30 45`.split("\n");

let sum = 0;

x.map(values => {
    values = values.split(" ").map(Number);

    const d = [values];
    while (!d[d.length-1].every(v => v === 0)) {
        const last = d[d.length-1];
        
        d.push(last.map((v, i, o) => (o[i+1] || 0) - v).slice(0, last.length-1));
    }

    sum += d.map(row => row[row.length-1]).reduce((a,b)=>a+b,0);
});

console.log(sum);
