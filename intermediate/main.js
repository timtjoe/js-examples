function greet() {
    return 'Hi, ' + this.name;
}

const name = require('fs').readFileSync(0, 'utf-8').trim();
// Build an object { name } and call greet so this points to it.
// Then print the result.
const user = {name}
console.log(greet.call(user))




