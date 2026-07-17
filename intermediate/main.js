
const promise = new Promise((resolve, reject) => {
    resolve('hello')
} )

promise.then(value => console.log(value))