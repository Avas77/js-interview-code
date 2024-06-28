let calculations = 0;
let fastcalc = 0;

function fibonacci(n) {
  calculations++;
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function memofibonacci() {
  let cache = {};
  return function fib(n) {
    fastcalc++;
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      }
      cache[n] = fib(n - 1) + fib(n - 2);
      return cache[n];
    }
  };
}

const memofn = memofibonacci();
fibonacci(4);
console.log(memofn(4));
console.log({
  fastcalc,
  calculations,
});
