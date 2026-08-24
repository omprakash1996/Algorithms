// #1.-------primitive types----------

// let id:number = 101;
// let username:string = "omprakash";
// let isActive:boolean =true;
// let big:bigint = 100n;
// let sym: symbol = Symbol("key");
// let notAssigned: undefined = undefined;
// let empty:null = null;

// #2.-----------Array and Tuples------------

// let scores:number[] = [90,30,70];
// let names:Array<string>=["om","bapini"];
// let point:[number,number] = [10,20];
// let namedTuple:[id:number,label:string] = [1,"first"];


// #3.------- any vs unknown------------

// let valAny:any = 10;

/*
let valueUnknown: unknown = 10;
if (typeof valueUnknown === "number") {
    console.log(valueUnknown + 1);
}

*/

// #.4------ void vs never----------------

/*
function logMessage(msg: string): void {
    console.log(msg);
}
*/

/*
function throwError(msg: string): void {
    throw new Error(msg);
}
*/

// #5.-----Functions with typed params/return------

/*
function add(a: number, b: number): number {
    return a + b;
}
const multiply = (a: number, b: number): number => a * b;
console.log(add(2, 3));       
console.log(multiply(4, 5));  
*/

// #6.----- Optional & Default Parameters------

/*
function greet(name: string, greeting: string = "Hello"): string {
    return `${name}, ${greeting}`;
}
console.log(greet('omprakash'));
*/

/*
function printInfo(name: string, age?: number): void {
    console.log(name, age ?? "unknown age");
}
console.log(printInfo('omprakash'));
*/

// #7.-----Interfaces ------------

/*
interface Person {
    readonly id: number;
    name: string;
    nickname?: string;
}
const p1:Person = {id:1,name:"omprakash"};
console.log(p1);
*/

// #8.-----Type Aliases ----

/*
type PersonType = {
    readonly id: number;
    name: string;
    age?: number;
};
const p1: PersonType = { id: 1, name: "omprakash" };
console.log(p1);
*/

// #9----- Union & Intersection Types ----

/*
type Status = "success" | "error" | "loading";

type Loud = { volume: number };
type Bright = { brightness: number };
type LoudAndBright = Loud & Bright;

function handleStatus(status: Status) {
    if (status === "success") {
        console.log("Yay! Operation completed successfully.");
    } else if (status === "error") {
        console.log("Oops! Something went wrong.");
    } else if (status === "loading") {
        console.log("Please wait... still loading.");
    }
}

handleStatus("success"); 
handleStatus("error"); 
handleStatus("loading"); 
*/

// Example of LoudAndBright object
/*
const device: LoudAndBright = {
    volume: 80,
    brightness: 60
};

console.log(`Device settings → Volume: ${device.volume}, Brightness: ${device.brightness}`);
*/

// #10. ---- 10. Type Inference ----

// let message = "Hello";  // string 
// let count = 42;   // number
// let isActive = true; // boolean

// #11.----Enums --------------------

/*
enum Status {
    Success,
    Error,
    Loading
}

let currentStatus: Status = Status.Success;
console.log(currentStatus); 

export {};
*/

/*
enum StatusMessage {
  Success = "SUCCESS",
  Error = "ERROR",
  Loading = "LOADING"
}

function handleStatus(status: StatusMessage) {
  if (status === StatusMessage.Success) {
    console.log("Yay! Operation completed successfully.");
  } else if (status === StatusMessage.Error) {
    console.log("Oops! Something went wrong.");
  } else {
    console.log("Still loading...");
  }
}

handleStatus(StatusMessage.Success); // Output: Yay! Operation completed successfully.
*/

/*
const Direction = {
  Up: 0,
  Down: 1,
  Left: 2,
  Right: 3
} as const;

type Direction = typeof Direction[keyof typeof Direction];

function move(direction: Direction) {
  switch (direction) {
    case Direction.Up:
      console.log("Moving up!");
      break;
    case Direction.Down:
      console.log("Moving down!");
      break;
    case Direction.Left:
      console.log("Moving left!");
      break;
    case Direction.Right:
      console.log("Moving right!");
      break;
  }
}

move(Direction.Left);
export {};

*/

// #12.------Generics ----

/*
function identity<T>(value: T) {
    return value;
}
console.log(identity<string>("hello"));
console.log(identity<number>(23));
*/

/*
class Box<T>{
   constructor(private content:T){}
   getContent():T{
    return this.content;
   } 
}
const numberBox = new Box<number>(5);
console.log(numberBox.getContent());
*/
