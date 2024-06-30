console.log("Munna");

const promise = new Promise((resolve, reject) => {
  console.log("Promise First");
  resolve("Next thos");
});

promise.then((res) => console.log("Returned", res));

console.log("Michael");
