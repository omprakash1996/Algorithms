// Hoisting

/*greet();
function greet() {
  console.log("omprakash");
}  */
// --------------------------

//   IIFE

/* (function (){
    console.log('gopal');
    })(); */

/*  (function greet(name) {
     console.log(name);
     })("Ganesh"); */
// --------------------------

//  Higher order function

// 1
/*function higherOrder(name) {
  console.log(name);
}
function calling(order) {
  let name = "omprakash_behera";
  console.log(order(name));
}
calling(higherOrder); */

// 2

/*function multiply(facter) {
  return function (num) {
    return facter * num;
  };
}
const double = multiply(2);
console.log(double(5));  */

// -----------------------------------

// 3. callback function

// 1.
/*function calculation(a, b, operation) {
  return operation(a, b);
}
function sum(x, y) {
  return x + y;
}
function mul(m, n) {
  return m * n;
}
function sub(y, z) {
  return y - z;
}
console.log(calculation(4, 5, sum));
console.log(calculation(4, 5, mul));
console.log(calculation(4, 5, sub));  */

// 2.

/*function callback(name, call) {
  console.log(name);
  call();
}
function greetings() {
  console.log(30);
}
callback("omprakash", greetings);  */

// 3

// --------------------------------------------
// closures

// 1

/*function outerFunction() {
  let name = "omprakash";
  function innerFunction() {
    console.log(name);
  }
  return innerFunction;
}
const fn = outerFunction();
fn();  */

// 2

/*function counter() {
  let count = 0;
  function inner() {
    count++;
    return count;
  }
  return inner;
}
const fn = counter();
console.log(fn());
console.log(fn());
console.log(fn());   */

// 3.

// ----------------------------------

// promise

/*
const promise = new Promise((resolve, reject) => {
  let isExist = false;
  setTimeout(() => {
    if (isExist == true) {
      resolve("exist");
    } else {
      reject("Not exist");
    }
  }, 2000);
});
promise
  .then((data) => {
    console.log(data, "user exist in DB");
  })
  .catch((error) => {
    console.error(error, "user isnt exist in DB");
  });
*/

// --------------------------------------------------

// async function
/*
async function getUser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error("API failed");
    }
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error("Error", err.message);
  }
}
getUser();
*/

// -----------------------------------------------

//  currying
/*
function addSum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
console.log(addSum(4)(5)(1));
*/

// 2
/*
function discount(discountPercent) {
  return function (price) {
    return price - (price * discountPercent) / 100;
  };
}
const tenPercentage = discount(10);

console.log(tenPercentage(500));
console.log(tenPercentage(100));
*/

// -------------------------------------------------------

//  memoization
/*
const cache = {};
function square(num) {
  if (cache[num]) {
    console.log("From cache");
    return cache[num];
  }
  console.log("calculated");
  const result = num * num;
  cache[num] = result;
  return result;
}
console.log(square(5));
console.log(square(5));
console.log(square(10));
console.log(square(10));
*/
//  Method --------------------------------

// call

/*
const users = {
    name:"omprakash",
    age:30
}
function getData(city){
    console.log(`My  name is ${this.name} and city name is ${city}`);
}
getData.call(users,'bhadrak'); 
*/

// apply

/*
const users = {
    name:"omprakash",
    age:30
}
function getData(city){
    console.log(`My  name is ${this.name} and city name is ${city}`);
}
getData.apply(users,['Aranapal']); 
*/

// bind

/*
const users = {
  name: "omprakash",
  age: 30,
};
function getData(city) {
  console.log(`My  name is ${this.name} and city name is ${city}`);
}
const result = getData.bind(users, "Odisha");
result();
*/

// shallow copy
/*
const users = {
  name: "gopal",
  age: 2,
  address: {
    city: "bhadrak",
    school: "todoga",
  },
};
const copyUser = {...users};
copyUser.address.city= 'Aranapal';
console.log(users.address.city);
console.log(copyUser.address.city);

*/

// deep copy
/*
const users = {
  name: "gopal",
  age: 2,
  address: {
    city: "bhadrak",
    school: "todoga",
  },
};
const copyUser= JSON.parse(JSON.stringify(users));
copyUser.address.city = "Aranapal";
console.log(users.address.city);
console.log(copyUser.address.city);
*/

// prototype----------------------------------------------------------
/*
const users = {
  name: "omprakash",
  getCity: function () {
    console.log(` City name is ${this.city}`);
  },
};
const cityName = {
  city: "Bhadrak",
};

cityName.__proto__= users;
cityName.getCity();
*/

// 2.
/*
function user(name){
    this.name = name;
}
user.prototype.sayHello = function (){
    return ` Hello My name is ${this.name}`
}
let student = new user ('omprakash');
let teacher = new user('OPB');

console.log(student.name);
console.log(teacher.name); 
*/

// 3.
/*
let user = [12, 23, 34, 34];

Array.prototype.firstElement = function () {
  return this[1];
};
console.log(user.firstElement());
*/

// polyfill -----------------------------------------------

// foreach

/*
Array.prototype.myForeach= function (call){
 for(let i=0 ; i< this.length;i++){
    call(this[i],i,this)
 }
}

const numbers =[1,2,3,4];
numbers.myForeach(function(num){
    console.log(num);
})

*/

// map
/*
Array.prototype.myMap = function (call) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(call(this[i], i, this));
  }
  return result;
};

let arr=[1,2,3,4];
const result= arr.myMap((num)=> num * 2);
console.log(result);
*/

// filter

/*
Array.prototype.myFilter = function(call){
    let result=[];
    for(let i = 0; i<this.length;i++){
        if(call(this[i],i,this)){
            result.push(this[i]);
        }
    }
    return result;
}

const arr = [1,2,3,4,5];
const even = arr.myFilter((num)=> num % 2 === 0 );
console.log(even);  */

// reduce
/*
Array.prototype.myReduce = function (call, initial) {
  let acc = initial;
  for (let i = 0; i < this.length; i++) {
    acc = call(acc, this[i], i, this);
  }
  return acc;
};

const arr = [1, 2, 3, 4];
const sum = arr.myReduce((accu, curr) => {
  return accu + curr;
}, 0);
console.log(sum);
*/

// --------------------------------------------------------------------

// constructor
/*
function car(brand, model) {
  this.brand = brand;
  this.model = model;
}
let tata = new car("TATA", "Nexon-600");
let mahindra = new car("Mahindra", "XUV-700");
console.log(tata.model);
console.log(mahindra);
*/

// -------------------------------------------

// classs

/*
class player{
  constructor(name,health){
   this.name = name;
   this.health = health;
  }
  getName(){
    console.log(`My name is ${this.name}`);
  }
  getHealth(){
    console.log(`Health is ${this.health}`);
  }
}
const result = new player('omprakash',95);
result.getName();
result.getHealth();
const result2 = new player('ganesh',100);
result2.getName();
result2.getHealth();

*/

// ---------------------------------------------

// rest

// 1.
/*
function add(...numbers) {
  console.log(numbers);
}
add(11, 34, 34);

*/
// 2

/*
const user = {
  name: "omprakash",
  age: 30,
  city: "Bhadrak",
};

const { name, ...rest } = user;
console.log(rest);

*/

// spread

/*
const  user = ['om','go','bani'];
const newVal = [...user,'ganesh','bou'];
console.log(newVal);
*/

/*
const user={
  name:'omprakash',
  age:30
}
const updateUser={
  ...user,
  city:'Bhadrak'
}
console.log(updateUser);

*/
// local storage-------------------------------
/*
localStorage.setItem('name','om');

const data = localStorage.getItem('name');
console.log(data);


const remove = localStorage.removeItem('name');
console.log(remove);

const clearData = localStorage.clear();
console.log(clearData);
*/

// throttling---------------------------------------------



// html

{
  /* <button id="click">Click Me</button> */
}

// js

/*
const btn = document.getElementById('click');
let isAllowed = true;
btn.addEventListener('click',()=>{
  if(!isAllowed) return;
  console.log('button clicked');
  isAllowed = false;
  setTimeout(()=>{
    isAllowed = true;
  },2000)
})
*/

// Debouncing  ------------------------------------

// html
/*
<input type="text" id="search" placeholder="Search..."/> 
<p id="output"></p>
*/

// js
/*
let searchInput = document.getElementById("search");
let result = document.getElementById("output");

let timer;
searchInput.addEventListener("input", () => {
  clearTimeout(timer);
  timer = setTimeout(() => {
    result.textContent = `Result: ${searchInput.value}`;
  }, 2000);
});

*/
// ----------------------------------------------------------

