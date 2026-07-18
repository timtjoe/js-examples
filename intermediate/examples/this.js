// This is determined by HOW a function is called, not WHERE it's defined.

// The classic surprise 
const user = {
  name: "Alice",
  greet() {
    console.log(`Hi, I'm ${this.name}`);
  },
  delayedGreet() {
    setTimeout(() => {
      console.log(this.name);
    }, 100);
  }
}

user.greet() // Hi, I'm Alice - works

const fn = user.greet;
fn() // Hi, I'm undefined - !!

// The four rules of this

// 1. Method call -> this is the object  before the dot 
user.greet(); // this = user
// arr.push(1); // this = arr 

// 2. Plain function call - this is undefined (strict mode) or global
function f() { console.log(this); }
// f() //undefined

// 3. new call - this is a brand-new object
class Counter {
  count = 0;
  onClick = () => { this.count++; }; //arrow -> inherits
}

// 4. explicit binding - this is whatever YOU pass
function greet() { return `Hi, ${this.name}` }
greet.call({ name: "Alice" });
greet.apply({ name: 'Bob' });
const bound = greet.bind({ name: 'Carol' });
bound()

// Arrow functions - they DON'T have their own this
user.delayedGreet()

// const {greet} = user;
// greet()