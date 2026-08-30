// #1.---------- sum of array.-----------------------

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

// #2.-------- search element.-----------------------

/*
function searchElement(arr, element) {
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] === element){
        return i;
    }
  }
  return null;
}
console.log(searchElement([1, 2, 3, 4, 5], 4));

*/

// #3.----------- count odd even count.-----------------

/*
function countOddEven(arr) {
  let oddCount = 0;
  let evenCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }
  return {oddCount,evenCount};
}
console.log(countOddEven([1, 2, 3, 0, 4, 5]));
*/
// #4.---------- reverse array.--------------------

/*
function reverseArr(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }
  return arr;
}
console.log(reverseArr([1, 2, 3, 4, 5]));
*/

// #5.------------ target element.----------------

/*
function targetElement(arr, target) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return null;
}
console.log(targetElement([1, 2, 3, 4], 3));
*/

// #6.----------Find two sum / target element of an array.-----------------

/*
function twoSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
  return null;
}
console.log(twoSum([1, 2, 3, 4, 5], 5));
*/

// 7.--------- Find the pair of two sum.----------------------------

/*
function pairSum(arr, target) {
  let pair = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        pair.push([i, j]);
      }
    }
  }
  return pair;
}
console.log(pairSum([1, 2, 3, 4, 5], 5));
*/

// ----------------------------------------
// 8. Find triplets that sum to target.
// 9.find k numbers that sum to target.
// 10.Check if any subset of the array sums to target (classic DP problem).
// 11.Find a subarray (contiguous elements) whose sum equals target.
// 12.Find pair/triplet whose sum is closest to target.
// 13.Count how many subarrays equal target (often solved with prefix sums + hashmap).

// #14.--------Merge Two Sorted Lists in array.----------------------------------

/*
function mergeSortedArray(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
    result.push(arr2[i]);
  }
  return result;
}
console.log(mergeSortedArray([1, 2, 3], [4, 5, 6]));

*/

// #15.--------Remove Duplicates from Sorted Array.---------------------------

/*
function removeDuplicate(arr) {
  let result = [];
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    let isFound = false;
    for (let j = 0; j < result.length; j++) {
      if (arr[i] === result[j]) {
        isFound = true;
        break;
      }
    }
    if (!isFound) {
      result[index] = arr[i];
      index++;
    }
  }
  return result;
}
console.log(removeDuplicate([1, 2, 3, 4, 5, 3, 5]));
*/

// #16.-------find Duplicates value from Sorted Array.----------------------

/*
function findDuplicate(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        result.push(arr[i]);
      }
    }
  }
  return result;
}
console.log(findDuplicate([7, 2, 3, 7, 5, 3, 5]));
*/

// #17.--------remove element.---------------------------

/*
function removeElement(arr, element) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== element) {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(removeElement([1, 2, 3, -3, 7], -3));
*/

// #18.Given an integer array nums, return true if any value appears at least twice in the array.--------------

/*
function appearTwice(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return true;
      }
    }
  }
  return false;
}
console.log(appearTwice([1, 2, 3, -3, 2]));
console.log(appearTwice([1, 2, 3, -3]));

*/

// #19.--------Flartern Array.----------------------------

/*
function flatArr(arr) {
  let result = [];
  for (let i of arr) {
    if (Array.isArray(i)) {
      result.push(...flatArr(i));
    } else {
      result.push(i);
    }
  }
  return result;
}
console.log(flatArr([1, [2, [3, 4]], 5, 6]));
*/

// #20.----------frequency of array.----------------------------------

/*
function frequencyArray(arr) {
  let frequency = {};
  for (let i = 0; i < arr.length; i++) {
    let char = arr[i];
    frequency[char] = (frequency[char] || 0) + 1;
  }
  return frequency;
}
console.log(frequencyArray([1, 2, 3, 2, 4, 5, 6, 5]));
*/

// #21.--------------most frequency element in an array.--------------------------

/*
function maxFrequency(arr) {
  let frequency = {};
  let maxNumber = null;
  let maxCount = 0;
  for (let i = 0; i < arr.length; i++) {
    let char = arr[i];
    frequency[char] = (frequency[char] | 0) + 1;
    if (frequency[char] > maxCount) {
      maxCount = frequency[char];
      maxNumber = char;
    }
  }
  return { maxNumber, maxCount };
}
const data = [1, 2, 3, 4, 5, 3, 4];
console.log(maxFrequency(data));
*/

// or

/*
function mostFrequencyArray(arr) {
  let frequency = {};
  let maxCount = 0;
  let maxNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    let char = arr[i];
    frequency[char] = (frequency[char] || 0) + 1;
    if (frequency[char] > maxCount) {
      maxCount = frequency[char];
    }
  }
  // Collect all numbers with maxCount
  for (let key in frequency) {
    if (frequency[key] === maxCount) {
      maxNumbers.push(Number(key));
    }
  }
  return { maxNumbers, maxCount };
}
console.log(mostFrequencyArray([1, 2, 3, 4, 5, 3, 4]));
*/

// #22-----Find the largest/smallest number in an array.-----------------

/*
function largestAndSmallest(arr) {
  let largest = arr[0];
  let smallest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    } else if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return { largest, smallest };
}
console.log(largestAndSmallest([9, 2, 7, 233, 1, -2, 67]));
*/

// #23.------ square of sorted array ----------------------

/*
function squareOfSortedArray(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * arr[i]);
  }
  return result;
}
console.log(squareOfSortedArray([1, 2, 3, 4, 5]));

*/

// #23.------ square of array and sort the result----------------------

/*
function squareOfUnsortedArray(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * arr[i]);
  }
  for (let i = 0; i < result.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (result[i] > result[j]) {
        let temp = result[i];
        result[i] = result[j];
        result[j] = temp;
      }
    }
  }
  return result;
}
console.log(squareOfUnsortedArray([4, -2, 3, 2, 7, 5]));
*/

// #24.------ sum of positive number.----------------------

/*
function sumOfPositiveNumber(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum > 0 ? sum : "All sum are negative";
}
console.log(sumOfPositiveNumber([5, -2, 3, -1, 2]));
*/

// #25------------ add two decimal numbers.---------------

/*
function addDecimalNumbers(a, b) {
  let sum = a + b;
  return parseFloat(sum.toFixed(3));
}
console.log(addDecimalNumbers(2.234, 123.12));
*/
// #26--------Product of Array Except Self.-------------------------

/*
function productArrayExcept(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let product = 1;
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        product *= arr[j];
      }
    }
    result[i] = product;
  }
  return result;
}
console.log(productArrayExcept([1, 2, 3, 4])); // op: [24,12,8,6]
*/

// #27.-------find the second largest element of an array.------------------

/*
function secondLargestElement(arr) {
  let largest = -Infinity;
  let secondLargest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] > largest){
      secondLargest = largest;
      largest = arr[i];
    }else if(arr[i] > secondLargest && arr[i] < largest){
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}
console.log(secondLargestElement([1, 2, 3, 4]));  */

// #28.-------arrange 0 left side and 1 right side;------------------

/*
function segregateZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    while (arr[left] === 0 && left < right) {
      left++;
    }
    while (arr[right] === 1 && left < right) {
      right--;
    }
    if (left < right) {
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
    }
  }
  return arr;
}
console.log(segregateZero([1, 1, 0, 1, 0]));   */

// #29.-------arrange -ve left side and +ve right side.----------------

/*

function leftPosNegative(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    while (arr[left] < 0 && left < right) {
      left++;
    }
    while (arr[right] > 0 && left < right) {
      right--;
    }
    if (left < right) {
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
    }
  }
  return arr;
}
console.log(leftPosNegative([2, -2, 3, -6, -1, 5]));  */

// #29.-------Find miissing number.-------------------------

/*
function findMissingNumber(arr) {
  let index = arr.length + 1;
  for (let i = 1; i <= index; i++) {
    let found = false;
    for (j = 0; j < arr.length; j++) {
      if (arr[j] === i) {
        found = true;
        break;
      }
    }
    if (!found) return i;
  }
}
console.log(findMissingNumber([2, 1, 3]));  */

// #29.-------Plus One in array.-------------------------

/*
function plusOneInArray(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i]);
  }
  let lastIndex = arr.length - 1;
  result[lastIndex] = result[lastIndex] + 1;
  return result;
}
console.log(plusOneInArray([1, 2, 3]));
console.log(plusOneInArray([9]));   */

// #30.-------find the common element in the array.--------

/*
function findCommonElement(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        result.push(arr1[i]);
      }
    }
  }
  return result;
}
console.log(findCommonElement([1, 3, 9, 5, 4, -3, 6], [-3, 4, 7, 12, 23])); */

// #31.----check array is sorted or not, return true or false.-----

/*
function checkArrayIsSorted(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}
console.log(checkArrayIsSorted([4, 1, 3, 2, 5]));
console.log(checkArrayIsSorted([1, 2, 3, 4, 5]));  */

// #32.----31.Given two integer arrays nums1 and nums2,
// return an array of their intersection. Each element in
// the result must be
// unique and you may return the result in any order.

/*
function intersection(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        let isExist = false;
        for (k = 0; k < result.length; k++) {
          if (result[k] == arr1[i]) {
            isExist = true;
            break;
          }
        }
        if(!isExist){
          result.push(arr1[i])
        }
        break;
      }
    }
  }
  return result;
}
console.log(intersection([1, 2, 2, 1], [2, 2]));  */

// #33.----Find first missing positive integer in an array.-----

/*
function firstMissingPositive(arr) {
  let number = 1;
  while (true) {
    let found = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === number) {
        found = true;
        break;
      }
    }
    if(!found){
     return number;
    }
    number++;
  }
}
console.log(firstMissingPositive([3, 4, -1, 1]));   */

// #34.----Rotate array by 1 st position.-----

/*
function rotateArray(arr) {
  if (arr.length === 0) return "Array is empty";
  let last = arr[arr.length - 1];
  for (let i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = last;
  return arr;
}
console.log(rotateArray([1, 2, 3, 4, 5])); */



//--------#35.Remove the falsy values.-----
/*
function removeFalsyValue(arr){
 let result= [];
 for(let value of arr){
    if(value) result.push(value);
 }
 return result;
}
console.log(removeFalsyValue([0, 1, false, 2, "", 3])); */
