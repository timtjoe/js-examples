async function main() {
    const lines = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
    const promises = lines.map(line => Promise.resolve(Number(line)));
    // Use Promise.all and sum.
    const nums = await Promise.all(promises);
    const sum = nums.reduce((acc, cur) => acc + cur, 0);
    console.log(sum)
}

main();
