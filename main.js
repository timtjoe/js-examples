class Animal { 
    kind(){ return 'animal'}
 }
class Dog extends Animal { 
    kind() {return 'dog'}
 }
class Puppy extends Dog { }

const p = new Puppy();
console.log(p.kind());
console.log(p.__proto__.constructor.name);
console.log(p.__proto__.__proto__.constructor.name);
console.log(p.__proto__.__proto__.__proto__.constructor.name);
