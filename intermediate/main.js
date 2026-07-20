class AgeError extends Error {
    // constructor(age) -> set name, age, and call super with a message
    constructor(age) {
        super(`Invalid age: ${age}`);
        this.name = "AgeError";
        this.age = age;
    }
}

function validateAge(n) {
    // Throw AgeError for n < 0 or n > 150; else return n.
    if (n < 0 || n > 150) {
        throw new AgeError(n);
    } else {
        return n;
    }
}

const n = Number(require('fs').readFileSync(0, 'utf-8').trim());
try {
    console.log('OK', validateAge(n));
} catch (err) {
    if (err instanceof AgeError) console.log('ERROR', err.age);
    else throw err;
}
