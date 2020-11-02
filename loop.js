let x = [5, 10, 3, 11, 1, 6, 13, 2, 4, 7, 14];
for (let i = 0; i < x.length; i++) {
  for (let j = 0; j < i; j++) {
    if (x[i] > x[j]) {
      let y = x[i];
      x[i] = x[j];
      x[j] = y;
    }
  }
}
console.log(x);

/*let x = [5, 10, 3, 11, 1, 6, 13, 2, 4, 7, 14];
for (let i = 0; i < x.length; i++) {
  for (let j = 0 ; j < i; j++) {
    if (x[i] < x[j]) {
      let y = x[i];
      x[i] = x[j];
      x[j] = y;
    }
  }
}
console.log(x);*/
