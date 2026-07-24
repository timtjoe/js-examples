{
  const userToken = new WeakMap();

  function generateToken() {
    return (Math.random() * 100);
  }

  function track(user) {
    userToken.set(user, generateToken());
  }

  function getToken(user) {
    return userToken.get(user);
  }

  // When `user` is no longer referenced anywhere else, the WeakMap entry is GC'd
  // — no memory leak even if you never explicitly cleared it.

  // Weekset - same idea no value
  const processed = new WeakSet();

  function process(obj) {
    if (processed.has(obj)) return;
    processed.add(obj);
  }

  // WeakRef(modern, ES2021) — explicit weak reference to an object:
  const target = { data: "large" };
  const ref = new WeakRef(target);

  const obj = ref.deref(); // return target if still alive. undefined if collected


  // FinalizationRegistry — get a callback when an object is GC'd:
  const registry = new FinalizationRegistry((i) => {
    console.log(`Object with id ${id} was collected.`);
  });

  let user = { name: "Ada" };
  registry.register(user, "user-1");
  user = null; // eligible for GC; eventually the callback fires
  
} //block end


