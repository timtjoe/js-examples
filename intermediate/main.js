function safeDivide(a, b) {
    if (b === 0) throw new Error("divide by zero");
    return Math.floor(a / b);
    // throw if b === 0; else return Math.floor(a / b)
}

const lines = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
const a = Number(lines[0]);
const b = Number(lines[1]);

try {
    console.log('RESULT', safeDivide(a, b));
} catch (err) {
    console.log('ERROR', err.message);
}
