// hasOddNumber
function hasOddNumber(arr) {
    return arr.some(num => num % 2 !== 0);
  }
  
  // hasAZero
  function hasAZero(num) {
    return num.toString().includes('0');
  }
  
  // hasOnlyOddNumbers
  function hasOnlyOddNumbers(arr) {
    return arr.every(num => num % 2 !== 0);
  }
  
  // hasNoDuplicates
  function hasNoDuplicates(arr) {
    return new Set(arr).size === arr.length;
  }
  
  // hasCertainKey
  function hasCertainKey(arr, key) {
    return arr.every(obj => obj.hasOwnProperty(key));
  }
  
  // hasCertainValue
  function hasCertainValue(arr, key, value) {
    return arr.every(obj => obj[key] === value);
  }
  