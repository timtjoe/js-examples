function* fib() {
    // yield 0, 1, 1, 2, 3, 5, ... forever
    let a = 0, b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b]
    }
}

const n = Number(require('fs').readFileSync(0, 'utf-8').trim());
const gen = fib();
for (let i = 0; i < n; i++) {
    console.log(gen.next().value);
}
