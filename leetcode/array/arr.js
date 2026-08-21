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
// --------------------------------
// 2. search element .

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
// -------------------------

// 3. count odd even count.

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
// ----------------------------------
// 4. reverse array.
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
// -----------------------------------
// 5. target element.

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

// ---------------------------------------------

// 6.Find two sum / target element of an array.

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
// ---------------------------------------------
// 7. Find the pair of two sum.
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
// ------------------------------------------------
// 14.Merge Two Sorted Lists in array.

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
// ----------------------------------------

// 15.Remove Duplicates from Sorted Array.

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
// -----------------------------------------------------

// 16.find Duplicates value from Sorted Array.

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
// --------------------------------------------

// 17.remove element.

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
// ----------------------------------------------

// 18.Given an integer array nums, return true if any value appears at least twice in the array.

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
// -------------------------------------------
// 19.Flartern Array.

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
// -----------------------------------------------

// 20.frequency of array.
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
// ----------------------------------------

// 21.most frequency element in an array.
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
