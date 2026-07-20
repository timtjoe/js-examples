function divide(a, b) {
  if (b === 0) throw new Error("divide by zero");
  return a / b;
}

try {
  divide(10, 0);
} catch (err){
  console.log(err.message);
} finally {
  console.log("Always runs");
  
}