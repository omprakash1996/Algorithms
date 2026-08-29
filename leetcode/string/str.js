//----------#1.reverse string-------------------------------

/*
function reverseString(str) {
  let arr = str.split("");
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }
  return arr.join("");
}
console.log(reverseString("omprakash"));  */

//------------#2.palindrome string------------------------

/*
function palindromString(str){
let left =0;
let right= str.length-1;
while(left < right){
    if(str[left] !== str[right]){
        return false
    }
    left++;
    right--;
 }
 return true;
}
console.log(palindromString('madam'));  */

//--------------#3.Remove duplicate words.----------------------

/*
function removeDuplicateWord(str) {
  let words = str.split(" ");
  let frequency = {};
  let result = [];
  for (let i = 0; i < words.length; i++) {
    let char = words[i];
    if (!frequency[char]) {
      frequency[char] = true;
      result.push(char);
    }
  }
  return result.join(" ");
}
console.log(removeDuplicateWord("omprakash behera aranapal behera aranapal"));  */

//----------#4.panagram string--------------------------------------

/*
function panagramString(str) {
  let Str = str.toLowerCase();
  let alp = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < alp.length; i++) {
    let isFound = false;
    for (let j = 0; j < Str.length; j++) {
      if (alp[i] === Str[j]) {
        isFound = true;
        break;
      }
    }
    if (!isFound) return false;
  }
  return true;
}
console.log(panagramString("The quick brown fox jumps over the lazy dog."));
console.log(panagramString("omprakash behera"));     */

//-------------#5.count frequency of each character.------------

/*
function countFrequency(str) {
  let frequency = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    frequency[char] = (frequency[char] || 0) + 1;
  }
  return frequency;
}
console.log(countFrequency("omprakash"));  */

//-------------#6.count max char and frequency of each character.------------
/*
function maxFrequency(str) {
  let frequency = {};
  let maxCount = 0;
  let maxChar = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    frequency[char] = (frequency[char] || 0) + 1;
    if (frequency[char] > maxCount) {
      maxCount = frequency[char];
      maxChar = char;
    }
  }
  return { maxCount, maxChar };
}
console.log(maxFrequency("omprakash"));    */

//-------------#7.Anagram string.-----------------------------------

/*
function anagramString(str1, str2) {
  if (str1.length !== str2.length) return "string isnt matching";
  let frequency = {};
  for (let i = 0; i < str1.length; i++) {
    let char = str1[i];
    frequency[char] = (frequency[char] || 0) + 1;
  }
  for (let i = 0; i < str2.length; i++) {
    let char2 = str2[i];
    if (!frequency[char2]) {
      return "Not a Anagram";
    }
    frequency[char2]--;
  }
  return "Anagram";
}
console.log(anagramString("silent", "listen"));  */

//-------------#8.find the first non repeteing character.----------------

/*
function firstNonRepete(str) {
  let frequency = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    frequency[char] = (frequency[char] || 0) + 1;
  }
  for(let i=0;i<str.length;i++){
    let char2 = str[i];
    if( frequency[char2] === 1){
        return char2;
    }
  }
  return false;
}
console.log(firstNonRepete("omporakash"));  */

//-------------#9.remove the duplicate char of string.----------------

/*
function removeDuplicateChar(str) {
  let frequency = {};
  let result=[];
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    frequency[char] = (frequency[char] || 0) + 1;
  }
  for(let i=0;i<str.length;i++){
    let char2 = str[i];
    if(frequency[char2] ===1){
       result.push(char2);
    }
  }
  return result.join("");
}
console.log(removeDuplicateChar("omprakash"));  */

//--------#10.check If a string contains only Alphabets(No Regex).----------------
/*
function containsAlphabetOnly(str) {
  for (let char of str) {
    if (!((char >= "A" && char <= "Z") || (char >= "a" && char <= "z"))) {
      return false;
    }
  }
  return true;
}
console.log(containsAlphabetOnly("omprakash"));
console.log(containsAlphabetOnly("omprakash1234"));  */

//--------#11. Reverse only words of the sentence.-----

/*
function reverseEachWord(str) {
  let words = str.split(" ");

  for (let i = 0; i < words.length; i++) {
    let chars = words[i].split("");
    let left = 0;
    let right = chars.length - 1;

    while (left < right) {
      let temp = chars[left];
      chars[left] = chars[right];
      chars[right] = temp;
      left++;
      right--;
    }
    words[i] = chars.join("");
  }
  return words.join(" ");
}
const revWord = "omprakash behera";
console.log(reverseEachWord(revWord)); */

//--------#12.Find the longest word length in the sentence..-----

/*
function longestWord(str) {
  let words = str.split(" ");
  let longestWordLength = 0;
  words.forEach((word) => {
    if (word.length > longestWordLength) {
      longestWordLength = word.length;
    }
  });
  return longestWordLength;
}
console.log(longestWord("omprakash behera omprakashbe om"));  */

//--------#13.Find the longest word  in the sentence..-----
/*
function longestWordOnly(str) {
  let words = str.split(" ");
  let longestWord = "";
  words.forEach((word) => {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });
  return longestWord;
}
console.log(longestWordOnly("omprakash behera omprakashbe om"));  */

//--------#14.count the number of words in a sentence.-----

/*
function countWord(str) {
  let words = str.split(" ");
  let wordCount = 0;
  words.forEach((word) => {
    if (word !== "") {
      wordCount++;
    }
  });
  return wordCount;
}
console.log(countWord("omprakash behera aranapal om"));  */

//--------#15.Find all substring of a string.-----

/*
function substringOfString(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    let substring = "";
    for (let j = i; j < str.length; j++) {
      substring += str[j];
      result.push(substring);
    }
  }
  return result;
}
console.log(substringOfString("omprakash"));  */

//--------#16.compress a string. 'aaaabbc' op:'a4b2c1'.-----
/*
function compressString(str) {
  let frequency = {};
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    frequency[char] = (frequency[char] || 0) + 1;
  }
  for (let char in frequency) {
    result += char + frequency[char];
  }
  return result;
}
console.log(compressString("omprakash")); */

//--------#17.count vowel.-----

/*
function countVowel(str) {
  let count = 0;
  let vowel = "aeiouAEIOU";
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < vowel.length; j++) {
      if (str[i] === vowel[j]) {
        count++;
        break;
      }
    }
  }
  return count;
}
console.log(countVowel("omprakash behera"));  */

//--------#18.convert word string to lowercase.-----

/*
function convertLowercase(str){
  let result="";
  for(let i=0;i<str.length;i++){
      let code = str.charCodeAt(i);
    if(code >= 65 && code <= 90){
      result += String.fromCharCode(code+32)  
    }else{
        result +=str[i]
    }
  }
  return result;

}
console.log(convertLowercase('ompRakaSh beHeRa AraNapAL'));  */

//--------#18.Is Subsequence..-----
/*
function isSubsequence(str, sub) {
  let i = 0;
  let j = 0;
  while (i < str.length && j < sub.length) {
    if(str[i] === sub[j]){
        i++;
    }
    j++;
  }
  return i === str.length;
}
console.log(isSubsequence('abc','avdbkc'));
console.log(isSubsequence('abc','omprakash'));  */

// 19.count the frequency of each word.----------------------

/*
function frequencyWord(str) {
  let words = str.split(" ");
  let frequency = {};
  words.forEach((word) => {
    if (word !== "") {
      if (frequency[word]) {
        frequency[word] += 1;
      } else {
        frequency[word] = 1;
      }
    }
  });
  return frequency;
}
console.log(frequencyWord("omprakash behera bhadrak omprakash")); */

// #20.Remove all duplicate words from a sentence.---------------------

function removeDuplicateWord(str) {
  let words = str.split(" ");
  let frequency = {};
  let result = [];
  for (let i = 0; i < words.length; i++) {
    let char = words[i];
    if (!frequency[char]) {
      frequency[char] = true;
      result.push(char);
    }
  }
  return result.join(" ");
}
console.log(removeDuplicateWord("omprakash behera aranapal behera"));

// ----------------------substring----------------------------------------

// #1.find if one string is a substring of another('hellothere','there').--------

/*
function findSubstring(str, subStr) {
  if (str.length < subStr.length) return "substring is greter then string";
  for (let i = 0; i <= str.length - subStr.length; i++) {
    let isMatch = true;
    for (let j = 0; j < subStr.length; j++) {
      if (str[i + j] !== subStr[j]) {
        isMatch = false;
        break;
      }
    }
    if (isMatch) return true;
  }
  return false;
}
console.log(findSubstring("omprakash", "bk"));
console.log(findSubstring("omprakash", "om"));   */

// #2.manual substring search index found.-----------------------------
/*
function searchIndex(str, substr) {
  if (str.length < substr.length)
    return "substring length is greter then string";
  for (let i = 0; i <= str.length - substr.length; i++) {
    let match = true;
    for (let j = 0; j < substr.length; j++) {
      if (str[i + j] !== substr[j]) {
        match = false;
        break;
      }
    }
    if (match) return i;
  }
  return false;
}
console.log(searchIndex("omprakash", "ka"));   */

// #3.check one string is rotation of another.----------------------

/*
function rotateAnother(str, rotStr) {
  let double = str + str;
  for (let i = 0; i < double.length - rotStr.length + 1; i++) {
    let isMatch = true;
    for (let j = 0; j < rotStr.length; j++) {
      if (double[i + j] !== rotStr[j]) {
        isMatch = false;
        break;
      }
    }
    if (isMatch) return true;
  }
  return false;
}
console.log(rotateAnother("omprakash", "prakashom")); */
