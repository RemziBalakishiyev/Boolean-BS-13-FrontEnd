/// ES5
// const Person = {
//   displayFullname() {
//     console.log(this.firstName + " " + this.lastName);
//   },

//   initial(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   },
// };

// const walter = Object.create(Person);
// walter.initial("Walter", "White");

// walter.displayFullname();

// console.log(Person);

// const Person = function (firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// };

// Person.prototype.displayFullName = function () {
//   console.log(`${this.firstName} ${this.lastName}`);
// };
// ///---------------
// const Actor = function (firstName, lastName, birthDate) {
//   Person.call(this, firstName, lastName);
//   this.birthDate = birthDate;
// };

// Actor.prototype = Person.prototype;
// Actor.prototype = Object.create(Person.prototype);

// Actor.prototype.calcAge = function () {
//   console.log(2022 - this.birthDate);
// };

// const Lawyer = function (firstName, lastName) {
//   Person.call(this, firstName, lastName);
// };

// Lawyer.prototype = Person.prototype;

// const bruce = new Actor("Bruce", "Wayne", 1980);
// const walter = new Lawyer("Bruce", "Wayne");

// bruce.calcAge();
// bruce.displayFullName();

// console.log(walter);
// console.log(bruce.__proto__);

// ES6

class PesonsES6 {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = 1000;
    this._salary = 2000;
  }

  displayFullName() {
    console.log(`${this.firstName} ${this.lastName} my salary ${this._salary}`);
  }
}

class Actor extends PesonsES6 {
  #movies;
  constructor(firstName, lastName, birthDate) {
    super(firstName, lastName);
    this.birthDate = birthDate;

    this.#movies = ["Breaking Bad"];
  }

  _addMovie() {
    return this.#movies;
  }
}

const jessie = new Actor("Jessie", "Pinkman", 1990);
jessie.displayFullName();
console.log(jessie._addMovie());
