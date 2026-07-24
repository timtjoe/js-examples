const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin });
const lines = [];

class EvenRange {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }

    [Symbol.iterator]() {
        let i = this.start;
        const end = this.end;
        return {
            next() {
                while(i < end && i % 2 !== 0) {
                    i++;
                }
                if(i >= end) {
                    return {done: true}
                }
                const value =  i;
                i++;
                return {value, done:false}
            }
        }
    }
}

rl.on("line", (line) => {
    lines.push(line);
    if (lines.length === 2) {
        const start = parseInt(lines[0]);
        const end = parseInt(lines[1]);
        for (const n of new EvenRange(start, end)) console.log(n);
        rl.close();
    }
});
rl.on("close", () => process.exit(0));
