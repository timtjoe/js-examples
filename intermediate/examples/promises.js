// A Promise represents a value that will be available later - or never, if it fails.

const promise = new Promise((resolve, reject) => {
  // Do async works, then call resolve(value) or reject(error)
  setTimeout(() => {
    resolve(42)
  }, 1000);
})

promise
  .then(value => console.log(value)) // 42 (after 1s)
  .catch(err => console.log(err))

// Microtasks - the hidden detail
console.log("1");
setTimeout(() => console.log("2"), 0);
Promise.resolve().then(() => console.log("3"));
console.log("4");
