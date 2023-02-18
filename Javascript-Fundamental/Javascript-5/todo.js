const log = console.log;
const qSel = selector => document.querySelector(selector);

const getById = id => document.getElementById(id);

const getByClass = clasName => document.getElementsByClassName(clasName);

const qSelAll = selector => document.querySelectorAll(selector);

let inputTodo = qSel('#inp-todo');
let addBtn = getById('add');
let updateBtn = getByClass('upd_btn');

let editBtn = getByClass('edit-btn');
let deleteBtn = getByClass('del-btn');
let todoList = getById('todo-list');

inputTodo.addEventListener('click', () => {
  inputTodo.style.backgroundColor = '#dde1e7';
  inputTodo.style.border = 'none';
});

const createItem = function () {
  //   debugger;
  let li = document.createElement('li');
  li.classList.add('list-group-item', 'shadow-sm');

  li.innerHTML += `${inputTodo.value}`;
  let div = document.createElement('div');
  div.classList.add('editDel');

  let createEditButton = document.createElement('a');
  createEditButton.classList.add('edit-btn');
  createEditButton.innerHTML = "<i class='fa fa-pen-nib'></i>";

  let createdDeleteButton = document.createElement('a');
  createdDeleteButton.classList.add('del-btn');
  createEditButton.innerHTML = "<i class='fas fa-trash'></i>";

  div.appendChild(createEditButton);
  div.appendChild(createdDeleteButton);
  li.appendChild(div);

  todoList.appendChild(li);
};

const addItem = function () {
  addBtn.addEventListener('click', function () {
    createItem();
  });
};

addItem();
