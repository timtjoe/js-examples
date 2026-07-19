(function(){
  console.log('I run immediately');
})();

(() => {
  console.log("Arrow IIFE");
})();

// The module pattern:
const counter = (function () {
  let count = 0; //private - hidden inside the IIFE's
  return {
    increment: () => ++count,
    value: () => count,
  };
})();

counter.increment()
console.log(counter.value()); //1
