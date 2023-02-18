const cities = ["Baku", "Paris", "Ankara"];

const employee = [
  {
    Department: "IT",
    Fullname: "Elon Musk",
    salary: 2000,
  },
  {
    Department: "HR",
    Fullname: "Jeff Bezos",
    salary: 2500,
  },
];

const allNumbers = [-23, -113, 1300, 200, 4000, -60];

// console.log(cities.includes("Ankara"));
// console.log(cities.find((x) => x === "Baku"));

// console.log(employee.find((x) => x.Department == "HR"));

// employee.some((x) => x.Department === "IT");

// console.log(employee.some((x) => x.Department === "IT"));
// console.log(employee.every((x) => x.salary > 1900));
// console.log(employee.every((x) => x.Department === "IT"));

console.log(cities.sort());
console.log(allNumbers.sort());
//=> + musbet eded qayidacaqsa A,B => kicikden boyuye
//=> - menfi eded qayidacaqsa A,B => eksine
const sort = allNumbers.sort((a, b) => a - b);

console.log(sort);
