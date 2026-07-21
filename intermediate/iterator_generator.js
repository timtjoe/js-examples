// Anything with a [Symbol.iterator]() method is iterable - you can for..of it, spread it, destructure it.

function* range(start, end) {
  for(let i = start; i < end; i++) {
    yield i;
  }
}

for (const n of range(1, 5)) {
  console.log(n)
}

console.log(...[range(1, 5)]);

// Generators shine for infinites sequences (lazy evaluation)
function* naturals() {
  let n = 1;
  while (true) yield n++;
}

const gen = naturals();
const {value, done} = gen.next();
console.log(value);
