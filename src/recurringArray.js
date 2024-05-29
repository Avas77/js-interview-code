function recurrfn(arr) {
  if (!arr || arr.length <= 1) return;
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    console.log("I ran");
    if (!obj[arr[i]]) {
      obj[arr[i]] = true;
    } else {
      return arr[i];
    }
  }
}

console.log(recurrfn([2, 1, 2, 5, 6, 8, 5]));
