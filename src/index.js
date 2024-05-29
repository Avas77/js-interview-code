function mergeSortedArrays(arr1, arr2) {
  if (!arr1 && !arr2) {
    return;
  }
  const combineArr = arr1.concat(arr2);
  return combineArr.sort();
}
const result = mergeSortedArrays([1, 4], []);
console.log({ result });
