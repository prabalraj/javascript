function one(a, b) {
  let x = a + b;
  two(x);
}
function two(x) {
  console.log(x * 5);
}
one(4, 5);
