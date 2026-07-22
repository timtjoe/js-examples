class irange {
  constructor(start, end) {
    this.start = start;
    this.end = end
  }

  [Symbol.iterator]() {
    let i = this.start;
    const end = this.end;

    return {
      next() {
        if (i < end) return { value: i++, done: false };
        return { value: undefined, done: true }
      }
    };
  }
}

// for (const n of new irange(1, 5)) console.log(n);

function* grange(start, end) {
  for (let i = start; i < end; i++) {
    yield i
  }
}

// for (let n of grange(1, 10)) console.log(n);

// Generators have state

function* counter() {
  let i = 0;
  while (true) {
    const reset = yield i++;
    if (reset) i = 0;
  }
}

const c = counter()
console.log(c.next().value);
console.log(c.next().value);
console.log(c.next(true).value);

// Async iteration with for...await

async function* fetchPage(url) {
  let next = url;
  while (next) {
    const resp = await fetch(url);
    const data = await resp.json()
    yield data.items;
    next = data.nextUrl;
  }
}

for await (const page of fetchPage("https://jsonplaceholder.typicode.com/users")) {
  page.forEach(user => console.log(user.name));
}