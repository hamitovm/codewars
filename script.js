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

  // Is he gonna survive?
  function hero(bullets, dragons){
    //Get Coding!
      if (dragons == 0) {
        return true
      }
      return 2 <= bullets/dragons;
    }

  // Is he gonna survive? (best practices - 1)
  const hero = (bullets, dragons) => dragons * 2 <= bullets;

  // Expressions Matter
  function expressionMatter(a, b, c) {
    let result1 = a + b + c;
    let result2 = a + b * c;
    let result3 = a * b * c;
    let result4 = (a + b) * c;
    let result5= a * (b + c);
    let arr = [result1, result2, result3, result4, result5];
    return Math.max.apply(Math, arr);
  }

   // Expressions Matter (best practices - 1)
   function expressionMatter(a, b, c) {
    return Math.max(a+b+c, a*b*c, (a+b)*c, a*(b+c));
  }

  // Find the capitals
  var capitals = function (word) {
    let smallWord = word.toLowerCase();
    let numbers = [];
    for (let i = 0; i < word.length; i++) {
      if (word[i] !== smallWord[i]) {
        numbers.push(i);
      }
    }
    return numbers;
  };
  
  // Find the capitals (best practices - 1)
  var capitals = function (word) {
    return word.split('').reduce(function(memo, v, i) {
      return v === v.toUpperCase() ? memo.concat(i) : memo;
    }, []);
  };

  // List Filtering
  function filter_list(l) {
    let newL = [];
    for (let i = 0; i < l.length; i++) {
      if (typeof(l[i]) == 'number') {
        newL.push(l[i]);
      }
    }
    return newL;
  }

    // List Filtering (best practices - 1)
    const filter_list = l => l.filter(c => typeof c === 'number');