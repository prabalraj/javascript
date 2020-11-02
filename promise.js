let p = new Promise((resolve, reject) => {
  let a = 1 + 1;
  if (a == 2) {
    resolve("success");
  } else {
    reject("Failure");
  }
});

p.then((tttt) => {
  console.log(`This is in then ${tttt}`);
}).catch((message) => {
  console.log(`This is in the catch ${message}`);
});
