
function Example() {
}

Example.prototype.exSum = function (a, b) {
  return a + b;
};

Example.prototype.exSub = function (a, b) {
    return a - b;
};

Example.prototype.exGetLastElement = function (arr) {
    let lastIndex = arr[arr.length - 1];
    return lastIndex;
};

/* We using Object with prototype to avoid repeat functions naming.
function exSum(a, b) {
    return a + b;
}*/
