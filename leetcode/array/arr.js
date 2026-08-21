// 1. sum of array.

/*
function sum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(sum([1, 2, 3, 4, 5]));

*/
// 2. search element .

function searchElement(arr, element) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] === element){
        return i;
    }
  }
  return null;
}
console.log(searchElement([1, 2, 3, 4, 5], 4));
