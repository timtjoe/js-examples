// Regex literals use /pattern/flags

const re = /hello/i;
re.test("Hello, world"); //true'
'hello world'.match(/(\w+)/g) // ['hello', 'world']
'hello'.replace(/l/g, 'L');
'a, b,c'.split(/,\s*/)
console.log();
