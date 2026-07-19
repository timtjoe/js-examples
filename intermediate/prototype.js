// Every object in JavaScript has an internal [[Prototype]] link to another object - its prototype. 
// When you read a property that doesn't exist on the object itself, JavaScript walks up the change looking for it.

const animal = {eats: true};
const dog = Object.create(animal);
dog.barks = true;

console.log(dog.barks); // true - own property
console.log(dog.eats); // true - inherited from animal
console.log(Object.getPrototypeOf(dog));

// Classes are sugar
class Animal {
  constructor(name) {this.name = name;}
  eat() {return `${this.name} eats`;}
}

class Dog extends Animal {
  bark() {return `${this.name} barks`; }
}

const rex = new Dog('Rex');
rex.eat() // 'Rex eats' - inherited from Animal
rex.bark() // 'Rex barks' - defined on Dog
