const counter = (function () {
    let count = 0;
    return {
        increment: () => ++count,
        value: () => count,
    }
})();
const n = Number(require('fs').readFileSync(0, 'utf-8').trim());
for (let i = 0; i < n; i++) counter.increment();
console.log(counter.value());

