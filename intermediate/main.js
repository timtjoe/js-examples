const line = require('fs').readFileSync(0, 'utf-8').trimEnd();
// Match all digits with /\\d/g, count them.
const matches = line.match(/\d/g);
const count = matches ? matches.length : 0;
console.log(count)