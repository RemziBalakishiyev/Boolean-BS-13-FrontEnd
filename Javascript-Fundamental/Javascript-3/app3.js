// const user = {
//   u_userName: "Admin",
//   u_password: "12345",
//   u_mail: "admin@test.com",
// };

// let callingInformation = prompt("User deyerini elde et");

// console.log(callingInformation);

// let userMail = user[`u_${callingInformation}`];

// console.log(userMail);

// const user = {
//   firstName: "Remzi",
//   lastName: "Balakishiyev",
//   DOB: 2000,
//   age: function () {
//     console.log(this);
//     return 2022 - this.DOB;
//   },
//   hash(psw, hashAlgorithm) {
//     let passwordHash = psw + hashAlgorithm;
//     this.password = passwordHash;
//   },
//   companies: ["Uniser MMC", "Aist Group", "Cybernet"],
// };

// user.id = 1;
// user.userName = "Admin";
// user.hash(12345, "1e123e");

// user.companies.forEach((c) => {
//   console.log(c);
// });

// const calcAge = user.age();

// console.log(user);

const employees = [
  {
    firstName: 'Remzi',
    lastName: 'Balakishiyev',
    salar: 2000,
    skills: ['Software', 'Backend'],
  },
  {
    firstName: 'Bruce',
    lastName: 'Balakishiyev',
    salar: 2000,
    skills: ['Software', 'Backend'],
  },
  {
    firstName: 'Tom',
    lastName: 'Balakishiyev',
    salar: 2000,
    skills: ['Software', 'Backend'],
  },
  {
    firstName: 'Jane',
    lastName: 'Balakishiyev',
    salar: 2000,
    skills: ['Software', 'Backend'],
  },
];

const empObj = {
  firstName: 'Walter',
  lastName: 'White',
  salar: 1000,
  skills: ['Front end', 'Design'],
};

function CalcSalary(salary) {
  return salary * 0.04;
}

let sum = 0;
for (const emp of employees) {
  debugger;
  let salary = CalcSalary(emp.salar);
  sum += salary;
}
console.log(sum);

// for (let index = 0; index < employees.length; index++) {
//   const employee = employees[index];

//   for (const keyEmp in employee) {
//     if (employee[keyEmp] == "Tom") {
//       break;
//     }
//     console.log(employee[keyEmp]);
//   }
// }

// for (let index = 0; index < employees.length; index++) {
//   const employee = employees[index];

//   for (const skill of employee.skills) {
//     console.log(`skill of ${employee.firstName}  : ${skill} `);
//   }
// }
