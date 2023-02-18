let container = document.getElementsByClassName('container')[0];
let list = document.getElementsByClassName('list-group')[0];
let header = document.getElementsByClassName('card-body')[0];
// console.log(conateiner.children);

// console.log(list.lastElementChild.classList.add('active'));

// for (const li of list.children) {
//   if (li.classList.contains('active')) {
//     li.classList.remove('active');
//   }
// // }

// console.log(
//   container.children[0].firstElementChild.firstElementChild.childElementCount
// ); //---> ul

// if (
//   container.children[0].firstElementChild.firstElementChild.childElementCount >
//   6
// ) {
//   container.children[0].children[0].firstElementChild.classList.add(
//     'overflowing'
//   );
// }

console.log(header.previousElementSibling);
let img = document.createElement('img');

img.setAttribute(
  'src',
  'https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
);

container.children[0].appendChild(img).classList.add('card-img-top');

console.log(img);
console.log();
