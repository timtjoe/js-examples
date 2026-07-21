class Person {
    constructor(first, last) {
        this._first = first;
        this._last = last;
    }

    get firstName() { return this._first }
    set firstName(v) { this._first = v }

    get lastName() { return this._last }
    set lastName(v) { this._last = v }

    get fullName() { return `${this._first} ${this._last}`; }
    set fullName(v) { [this._first, this._last] = v.split(" ") }
}

const p = new Person("Ada", "Lovelace");
console.log(p.fullName);
p.fullName = "Linus Torvalds";
console.log(p.firstName);
console.log(p.lastName);
