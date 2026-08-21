const data = [
  {
    id: 1,
    name: "John",
    company: "Google",
    position: "Software Engineer",
    level: "Entry",
    salary: 35000,
    date: "2024-08-07T09:03:04.000Z",
    age: 30,
    skills: ["javascript", "React.js"],
  },
  {
    id: 2,
    name: "Ann",
    company: "Waymo",
    position: "Product Manager",
    level: "Entry",
    salary: 65000,
    date: "2024-7-09T11:03:04.000Z",
    age: 45,
    skills: ["people management", "menter"],
  },
  {
    id: 3,
    name: "om",
    company: "IT",
    position: "Software Engineer",
    level: "Experience",
    salary: 55000,
    date: "2024-10-04T12:03:04.000Z",
    age: 31,
    skills: ["java", "sql"],
  },
  {
    id: 4,
    name: "bini",
    company: "Waymo",
    position: "Manager",
    level: "Experience",
    salary: 85000,
    date: "2024-11-09T11:03:04.000Z",
    age: 40,
    skills: ["Jira", "excel"],
  },
];
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// @.get name only

/*
const getName = data.map((cur) => cur.name);
console.log(getName);
*/

//@. get name only by position.

/*
const getNameByPos = data
  .filter((cur) => (cur.position === "Software Engineer"))
  .map((cur) => cur.name);
console.log(getNameByPos);
*/

//@. remove duplicate value.
/*
function removeDuplicate(arr){
  let result=[];
  for(let i=0;i<arr.length;i++){
      let isDuplicate= false;
     for(let j=0;j<result.length;j++){
     if(arr[i].id === result[j].id){
         isDuplicate= true;
         break;
     }
     }
     if(!isDuplicate){
         result.push(arr[i])
     }
  }
  return result;
}
console.log(removeDuplicate(data));
*/

// @. add data
/*
data2={ id:4,name: "om",company: "Google",position: "Software Engineer",level: "Entry",
salary: 55000,date: "2025-8-07T9:03:04.000Z",skills: ["people management", "menter"]} 
data.push(data2);
console.log(data); 
*/

// @.check object is same
/*
const user1 = { name: "omprakash", age: 30, address: "Aranapal" };
const user2 = { name: "omprakash", age: 30, address: "Aranapal" };

function compareObject(user1, user2) {
  for (let key in user1) {
    if (user1[key] !== user2[key]) {
      return false;
    }
  }
  for (let key in user2) {
    if (user1[key] === undefined) {
      return false;
    }
  }
  return true;
}
console.log(compareObject(user1,user2));
*/

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 1. get by position

/*
const getByPosition = data.reduce((acc, cur) => {
  if (!acc[cur.position]) {
    acc[cur.position] = [];
  }
  acc[cur.position].push(cur)
  return acc
},{});
console.log(getByPosition);
*/

//2. get by perticular position.-------------------------------------

/*
const getByPerticularPosition = data.reduce((acc, cur) => {
  if (cur.position === "Software Engineer") {
    if(!acc[cur.position]){
       acc[cur.position] = [] 
    }
    acc[cur.position].push(cur)
  }
  return acc
},{});
console.log(getByPerticularPosition);
*/

// 3.average salary ----------------------------------------

/*
const getByAvgSalary = data.reduce((acc,cur)=>{
    return acc + cur.salary

},0)/data.length
console.log(getByAvgSalary);
*/

// 4.Total salary and count  perticular position wise ---------

/*
const result = data.reduce((acc, cur) => {
  const position = cur.position;

  if (!acc[position]) {
    acc[position] = {
      totalSalary: 0,
      count: 0,
    };
  }

  acc[position].totalSalary += cur.salary;
  acc[position].count++;

  return acc;
}, {});

console.log(result);

*/

// 5.average salary of perticular position ---------------------------------------------

/*
const getAvgByPerticularPosition = data.reduce((acc, cur) => {
    if (cur.position === "Software Engineer") {
      acc.totalSalary += cur.salary;
      acc.count++;
    }
    return acc;
  },
  {totalSalary:0,count:0}
);
// console.log(getAvgByPerticularPosition);
const averageSalary = getAvgByPerticularPosition.totalSalary / getAvgByPerticularPosition.count;
console.log("average salary",averageSalary);
*/

// or

/*
const getAvgByPerticularPosition = data.filter((cur)=>(
cur.position === "Software Engineer"))
const avgSalary = getAvgByPerticularPosition.reduce((acc,cur)=>{
    return acc +cur.salary
},0)/getAvgByPerticularPosition.length;
console.log(avgSalary);

*/

// or

/*
const { sum, count } = data.reduce(
  (acc, cur) => {
    if (cur.position === "Software Engineer") {
      acc.sum += cur.salary;
      acc.count++;
    }
    return acc;
  },
  { sum: 0, count: 0 },
);
const findAvgSalary = sum / count;
console.log(findAvgSalary);

*/

// 6.All category Average salary and count  perticular position wise----------

/*
const result = data.reduce((acc, cur) => {
  const category = cur.position;

  if (!acc[category]) {
    acc[category] = {
      count: 0,
      totalSalary: 0,
      averageSalary: 0
    };
  }

  acc[category].count++;
  acc[category].totalSalary += cur.salary;

  acc[category].averageSalary =
    acc[category].totalSalary / acc[category].count;

  return acc;
}, {});

console.log(result);

*/

//  or

/*
const result = {};
data.forEach(cur => {
  const category = cur.position;

  if (!result[category]) {
    result[category] = { count: 0, totalSalary: 0, averageSalary: 0 };
  }

  result[category].count++;
  result[category].totalSalary += cur.salary;
  result[category].averageSalary =
    result[category].totalSalary / result[category].count;
});
console.log(result);
*/

// 7. Highest salary of employees with all data.
/*
const getHighestSalary = data.reduce((acc, cur) => {
  return acc.salary > cur.salary ? acc : cur;
}, 0);
console.log(getHighestSalary);

*/

// 8. Highest salary of employees ,Name and salary.

/*
const getHighestSalary = data.reduce((acc,cur)=>{
  return acc.salary > cur.salary ? acc : cur;
},0)
const {name,salary} = getHighestSalary;
console.log("Name:",name,"-","Salary:",salary);
*/

// 9.sort all salary Highest to lowest.

/*
const getSalaryHighest = [...data].sort((a,b)=>{
 return b.salary - a.salary
},0)
console.log(getSalaryHighest);

*/

// 10.sort salary Highest to lowest,name and salary.

/*
const getSalaryHighest = [...data].sort((a, b) => {
  return b.salary - a.salary;
}, 0);
getSalaryHighest.forEach((person) => {
  console.log("Name:", person.name, "-", "Salary:", person.salary)
});

*/

// 11.Lowest salary of employees with all data.

/*
const LowestSalary = data.reduce((acc, cur) => {
  return acc.salary < cur.salary ? acc : cur;
}, 0);
console.log(LowestSalary);
*/

// 12. Lowest salary of employees ,Name and salary.

/*
const LowestSalary = data.reduce((acc,cur)=>{
  return acc.salary < cur.salary ? acc : cur;
},0)
const {name,salary} = LowestSalary;
console.log("Name:",name,"-","Salary:",salary);
*/

// 13.sort all salary  lowest to Highest .

/*
const getSalaryLowest = [...data].sort((a,b)=>{
 return a.salary - b.salary
},0)
console.log(getSalaryLowest);
*/
// 14.sort salary Lowest to highest,name and salary.

/*
const getSalaryLowest = [...data].sort((a, b) => {
  return a.salary - b.salary;
}, 0);
getSalaryLowest.forEach((person) => {
  console.log("Name:", person.name, "-", "Salary:", person.salary)
});

*/

// 15. sorted date Namewise.
/*
const getSortedValue = [...data].sort((a, b) => {
  return a.name.localeCompare(b.name);
}, 0);
console.log(getSortedValue);
*/

// 16.sorted all date Namewise.
/*
const getSortedValue = [...data].sort((a, b) => {
  return a.name.localeCompare(b.name);
}, 0);
getSortedValue.forEach((person) => {
  console.log("Name:", person.name);
});
*/

// 17. sorted Name of first value.
/*
const getSortedValue = [...data].sort((a, b) => {
  return a.name.localeCompare(b.name);
}, 0);
console.log(getSortedValue[0].name);
*/

// 18.get value for range only.

/*
const getSortedValue = [...data].sort((a,b)=>{
 return b.salary - a.salary
})
getSortedValue.slice(0,1).forEach((person)=>{
console.log("Name:",person.name,"Salary:",person.salary);
})
*/

// 19.get Increase by bonus for total employees .

/*
const increaseBonus = data.reduce((acc,cur)=>{
return acc += cur.salary * 0.10;
},0)
console.log(increaseBonus);
*/

// 20. get Increase by bonus for total employees with data.
/*
const increaseBonus = data.map(
  (cur) => ({ ...cur, salary: cur.salary * 1.10 }),
  0,
);
console.log(increaseBonus);
*/

// 21. get Increase by bonus for total employees by the position with data.

/*
const increaseBonus = data
  .filter(cur => cur.position === "Software Engineer")
  .map(cur => ({
    ...cur,
    salary: Number((cur.salary * 1.10).toFixed(2))
  }));

console.log(increaseBonus);

*/

// 22. get Increase by bonus for total employees by the position with data name and salary only.
/*
const increaseBonus = data
  .filter(cur => cur.position === "Software Engineer")
  .map(cur => ({
    ...cur,
    salary: Number((cur.salary * 1.10).toFixed(2))
  }));
  const {name,salary} = increaseBonus[0];
console.log("Name:",name,"Salary:",salary);
*/

// 23. get Increase by bonus for perticular employees by the position with data name and salary only.
/*
const increaseBonus = data
  .filter(cur => cur.position === "Software Engineer")
  .map(cur => ({
    ...cur,
    salary: Number((cur.salary * 1.10).toFixed(2))
  }));
increaseBonus.forEach((person)=>{
  console.log("Name:", person.name, "Salary:", person.salary)
})
*/

// 24. get salary by recent date.

/*
const getByRecentDate = data.reduce((acc, cur) => {
  return new Date(acc.name) > new Date(cur.name) ? acc : cur;
});
console.log(getByRecentDate);

*/

// 25. get salary by old date.

/*
const getOldDate = data.reduce((acc,cur)=>{
 return new Date(cur.date) < new Date(acc.date)?cur:acc;
})
console.log(getOldDate.date);
*/

// 26.get date only printable date.

/*
const getOldDate = data.map((cur) => {
  const afterTime = cur.date.split("T")[0];
  // const beforeTime = afterTime.split(".")[0];
  // return beforeTime;
  return afterTime;
});
console.log(getOldDate);
*/

// 27.count the product managet.

/*
const getProductManager = data.filter(
  (cur) => cur.position === "Manager",
);
console.log(getProductManager.length);
*/

// 28. total count of all categories.

/*
const totalCount = data.map((cur) => cur.id);
console.log(totalCount.length);
*/

// 29 .find data between age.

const getDataInRange = data
  .filter((cur) => cur.age <= 40 && cur.age > 35)
  .map((cur) => cur.name);

console.log(getDataInRange);
