//# Closures

// #1.-------------

/*
function outer() {
  let x = 10;
  function inner() {
    console.log(x);
  }
  inner();
}
outer();   */

// 10 Why: inner is defined inside outer, so it lexically has access to x from its enclosing scope,
// regardless of where inner is called from.

// #2.-----------

/*
function outer() {
  let x = 10;
  return function inner() {
    console.log(x);
  };
}
const fn = outer();
x = 20; 
fn();  */

// 10 Why: The closure inner remembers the x from outer's scope at creation time — not a copy of the value,
//  but a live reference to that specific variable binding.
//  Nothing outside outer can reach that x.

// #3.-----------

/*
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}  */

// 3 3 3 Why: var is function-scoped, not block-scoped.
// There's only one i shared by all three callbacks,
// and by the time they run (after the loop finishes), i is 3

// #4.-----------

/*
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}  */

//  0 1 2 Why: let is block-scoped — each loop iteration gets a new binding of i.
//   Each closure captures its own iteration's i.

// #5.-----------

/*
function counter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
const c1 = counter();
console.log(c1());
console.log(c1());
console.log(c1()); */

// 1 2 3 Why: Each call to counter() creates a fresh count.
//  The returned function closes over that specific count and keeps mutating it across calls.

// #6.-----------

/*
const c1 = counter();
const c2 = counter();
console.log(c1());
console.log(c1());
console.log(c2());

function counter() {
  let count = 0;
  return () => ++count;
}   */

// 1 2 1 Why: c1 and c2 come from separate invocations of counter(),
// so each has its own independent count in its own closure — they don't share state.

// #7.-----------

/*
function makeFns() {
  var arr = [];
  for (var i = 0; i < 3; i++) {
    arr.push(function () {
      return i;
    });
  }
  return arr;
}
const fns = makeFns();
console.log(fns[0](), fns[1](), fns[2]());   */

// 3 3 3 Why: All three functions close over the same var i. By the time any of them is called,
// the loop has completed and i is 3.

// #8.-----------

/*
function makeFns() {
  var arr = [];
  for (var i = 0; i < 3; i++) {
    (function (j) {
      arr.push(function () {
        return j;
      });
    })(i);
  }
  return arr;
}
const fns = makeFns();
console.log(fns[0](), fns[1](), fns[2]());  */

// 0 1 2 Why: The classic IIFE fix for closures-in-loops.
//  Each IIFE call creates a new scope with its own j,
// capturing the current value of i at that iteration.

// #9.-----------

/*
let x = 1;
function a() {
  console.log(x);
  let x = 2;
}
a();  */

// ReferenceError: Cannot access 'x' before initialization Why:
//  This is the Temporal Dead Zone (TDZ). Because x is declared with let inside a,
//   JS lexically scopes x to a() for the entire function body — including before the let line.
//    The inner x shadows the outer one from the very top of the function,
//  but it isn't initialized yet, so accessing it early throws.

// #10.-----------

/*
function outer() {
  let a = 1;
  function middle() {
    let b = 2;
    function inner() {
      console.log(a, b);
    }
    return inner;
  }
  return middle();
}
outer()();  */

// 1 2 Why: Lexical scoping is about where functions are written, 
// not where they're called. inner "sees" a chain of enclosing scopes: inner → middle → outer → global. 
// It can read variables from any level of that chain.

// #11.-----------

/*
function createFuncs() {
  const funcs = [];
  for (let i = 0; i < 3; i++) {
    let doubled = i * 2;
    funcs.push(() => doubled);
  }
  return funcs;
}
console.log(createFuncs().map((f) => f()));  */

// [0, 2, 4] Why: Combines two separate closures per iteration: 
// i is block-scoped (new per loop), 
// and doubled is a fresh let inside the block too — 
// each closure captures its own doubled