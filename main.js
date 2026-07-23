const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin });
const lines = [];

const obj = {};
const proxy = new Proxy(obj, {
    get(obj, prop, receiver) {
        return Reflect.get(obj, prop, receiver)
    },
    set(obj, prop, value) {
        console.log(`set ${prop}=${value}`);
        obj[prop] = value;
        return true;
    }
});

rl.on("line", (line) => {
    lines.push(line);
    if (lines.length === 3) {
        for (const l of lines) {
            const [k, v] = l.split('=');
            proxy[k] = v;
        }
        const lastKey = lines[2].split('=')[0];
        console.log(proxy[lastKey]);
        rl.close();
    }
});
rl.on("close", () => process.exit(0));