class Person {
    constructor(name) {this.name = name}
    greet() {return `Hi, I am ${this.name}`;}
}

class Student extends Person {
    study() {return `${this.name} studies`;}
}

const name = require('fs').readFileSync(0, 'utf-8').trim();
const s = new Student(name);
console.log(s.greet());
console.log(s.study());

