// Sum without highest and lowest number
function sumArray(array) {
    if (array === null || array === undefined || array == 'None' || array.length < 3) { return 0; }
    let sum = 0;
    let minmax = [array[0], array[0]];
      for (let i = 0; i < array.length; i++) {
        if (array[i] < minmax[0]) {minmax[0] = array[i]};
        if (array[i] > minmax[1]) {minmax[1] = array[i]};
      }
      for (let i = 0; i < array.length; i++) {
        sum += array[i];
      }
      return sum - minmax[0] - minmax[1];
  }
// Sum without highest and lowest number (best practices - 1)
sumArray = a => a ? a.sort((x, y) => x - y).slice(1, -1).reduce((s, e) => s + e, 0) : 0

// Sum without highest and lowest number (best practices - 2)
function sumArray(array) {
    return Array.isArray(array) && array.length > 1
      ? array.reduce((s, n) => s + n, 0) - Math.min(...array) - Math.max(...array)
      : 0
  }