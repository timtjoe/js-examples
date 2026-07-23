/**
 * Proxy intercepts operations on an object — get, set, has, delete, function calls. 
 * Used for reactive frameworks (Vue 3), validation, observability, lazy loading.
 */

const target = { name: 'Ada', age: 36 }

const proxy = new Proxy(target, {
  get(obj, prop) {
    console.log(`get: ${prop}`);
    // return prop in obj ? obj[prop] : undefined;
    return Reflect.get(obj, prop, target)
  },
  set(obj, prop, value) {
    console.log(`set: ${prop} = ${value}`);
    obj[prop] = value;
    return true       // must return success boolean
  }
});

proxy.name;
proxy.age;

// Real-world: validation:

function validate(target, schema){
  return new Proxy(target, {
    set(obj, prop, value) {
      const validator = schema[prop];
      if(validator && !validator(value)){
        throw new TypeError(`Invalid ${prop}: ${value}`)
      }
      obj[prop] = value;
      return true;
    }
  });
}

const user = validate({}, {
  age: v => Number.isInteger(v) && v >= 0,
  name: v => typeof v === 'string' && v.length > 0
});

user.name = 'Ada';  // OK
user.age = 0;    // throws