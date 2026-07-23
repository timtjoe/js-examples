class Animal {
  constructor(name) { this.name = name }
  speak() { return `${this.name} speaks.` }
}

class Dog extends Animal {
  speak() { return `${this.name} woofs.` }
}

const rex = new Dog("Rex");

// Inspect the chain
console.log(Object.getPrototypeOf(rex));
console.log(Object.getPrototypeOf(Dog.prototype));
console.log(rex instanceof Dog);
console.log(rex instanceof Animal);


// Direct manipulation (avoid in production)
class Family {
  constructor(name) {this.name = name}
}

const sub = Object.create(Family);

console.log("-- Plain objects' prototype chain");
const x = {};
console.log(Object.getPrototypeOf(x));
console.log(x.toString());
console.log(x.hasOwnProperty('foo'));

// Truly plain object. for hashmap like usage
const safeMap = Object.create(null);
safeMap['_proto_'] = 'safe'; // doesn't pollute Object.prototype
console.log(Object.getPrototypeOf(safeMap));
// console.log(safeMap.toString()); // .toString is not a function of.

class Foo {
  static A          // Foo.A
  field = 1         // every instance gets its own copy
  method() {}       // Foo.prototype.method - shared across instances
}

