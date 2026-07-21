
// Set - unique values
const s = new Set();
s.add(1);
s.add(2);
s.add(2); // already there - no-op
s.add('hi');

console.log(s.has(2)); // true
console.log(s.has(3)); // false
console.log(s.size); // 3
console.log(s.delete(2)); // remove
console.log(s.clear()); // remove everything

// for an array (with dedup)
const nums = [1, 2, 2, 3, 3, 3, 4];
const unique = [...new Set(nums)];
console.log(unique);

// Canonical JS dedup pattern
for (const value of nums) console.log(value);
console.log("-----");

// May - key/value pairs (any key type)
const m = new Map();
m.set('name', 'Ada');
m.set(1, 'one');
m.set(true, 'flag');
m.set({ id: 1 }, 'object key');

console.log(m.get('Ada'));
console.log(m.has('name'));
console.log(m.size);
console.log(m.delete);

// With intial entries
const nm = new Map([
  ['name', 'Ada'],
  ['age', 36]
]);

// Why prefer Map over plain object?
const obj = {};
console.log(obj.toString);  // function - inherited from Object.prototype
console.log(obj.hasOwnProperty); // function - inherited

const pm = new Map();
console.log(m.has("toString"));

// Iterate Map:
for (const [key, value] of m) {
  console.log(key, value)
}
console.log("----");
m.forEach((key, value) => console.log(key, value));
console.log([...m.keys()]);  // array of keys
console.log([...m.values()]); // array of values
console.log([...m.entries()]); // array of [key, value] pairs
