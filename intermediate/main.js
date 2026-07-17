function readInt(line) {
    return Promise.resolve(Number(line))
}

async function main() {
    const lines = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
    const a = await readInt(lines[0]);
    const b = await readInt(lines[1]);
    console.log(a+b);
}

main();