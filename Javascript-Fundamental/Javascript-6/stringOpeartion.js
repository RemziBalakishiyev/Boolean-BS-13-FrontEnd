let stringExampleOne = 'Boolean Teach is best programmming course';
let stringExampleTwo = 'and You can follow from instagram this course';

// charAt
console.log(stringExampleOne.charAt(0));

// Concat
console.log(stringExampleOne.concat(stringExampleTwo));

console.log(stringExampleOne.toUpperCase());

/*
    Verilmis string deyerdeki sozlerin hamisinin bassh herifini boyukle yazan alqoritm qurun
*/

console.log(
  stringExampleOne.indexOf('best') > 0
    ? 'Bele bir soz movucddur'
    : 'Bele bir soz yoxdur'
);

// include

console.log(
  stringExampleTwo.includes('facebook')
    ? 'Bele bir soz movucddur'
    : 'Bele bir soz yoxdur'
);

console.log(stringExampleTwo.endsWith('a'));

console.log(stringExampleOne.length);
console.log(stringExampleOne.trimEnd());

console.log(stringExampleOne.slice(-2));

console.log(stringExampleOne.split(' '));

console.log(stringExampleOne.substr(3, 4));

console.log(stringExampleOne.substring(3, 5));

let courseText = stringExampleOne.slice(-6);

console.log(courseText.padStart(stringExampleOne.length, '*'));
