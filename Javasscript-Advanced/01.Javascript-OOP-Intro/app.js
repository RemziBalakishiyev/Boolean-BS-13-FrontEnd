//ES5
const Student = function (stdName, stdCourse) {
  this.fullName = stdName;
  this.course = stdCourse;
  this.tasks = [];
};
Student.prototype.addTask = function (task) {
  this.tasks.push(task);
};

const gunel = new Student("Gunel", "Front-End");
const heshim = new Student("Heshim", "Backend");
const mircamal = new Student("Mircamal", "Sql");
heshim.addTask("Ado net");

console.dir(Student.prototype.constructor);

//1. Merhele New bosh  obyekt yaradir -- {}
//2. Merhele funksiya cagrilir , ve this keyword hemin obyekte beraber olur this = {}
//3. Merhele {} protottype baglanilir
//4. Merhele avtomatik olaraq return edir {}

// ES6

class StudentES6 {
  constructor(stdName, stdSurname, stdCourse, birthDate) {
    this.firstName = stdName;
    this.lastName = stdSurname;
    this.course = stdCourse;
    this.birthDate = birthDate;
    this.tasks = [];
  }

  get fullName() {
    return this.lastName + " " + this.firstName;
  }

  set detail(teacher) {
    this.details = `My Name is Aynur , my birthdate is ${this.birthDate} my  teacher is ${teacher}`;
  }
  addTask(task) {
    this.tasks.push(task);
  }
}
StudentES6.prototype.calcAge = function () {
  return 2022 - this.birthDate;
};

const aynur = new StudentES6("Aynur", "Axundzade", "Backend", 2000);

aynur.addTask("Entity Framework Project ");
aynur.addTask("Ado net project");

aynur.detail = "Remzi Balakishiyev";
console.log(aynur);
console.log(aynur.fullName());
console.log(aynur.calcAge());
