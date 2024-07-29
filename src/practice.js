const originalObject = { a: 1, b: { c: { d: 4 } } };
const shallowCopy = { ...originalObject };

shallowCopy.a = 3;
console.log(originalObject);
shallowCopy.b.c = 4;

console.log({
  originalObject,
  shallowCopy,
});
