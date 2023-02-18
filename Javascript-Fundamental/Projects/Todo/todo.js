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
  // Bir li elementi yaradir ve hemin elemente ashagida olan classlarin verir
  let li = document.createElement('li');
  li.classList.add('list-group-item', 'shadow-sm');

  //Li elementin icine deyer olaraq inputdan gelen deyeri yazdiririq
  li.innerHTML += `${inputTodo.value}`;

  let div = document.createElement('div');
  div.classList.add('editDel');

  let createEditButton = document.createElement('a');
  createEditButton.classList.add('edit-btn', 'mx-2');

  createEditButton.innerHTML = "<i class='fas fa-pen'></i>";

  let createdDeleteButton = document.createElement('a');
  createdDeleteButton.classList.add('del-btn');

  createdDeleteButton.innerHTML = "<i class='fas fa-trash'></i>";

  div.appendChild(createEditButton);
  div.appendChild(createdDeleteButton);
  li.appendChild(div);

  todoList.appendChild(li);
};

//Elementlerin silinmesi
const removeItem = function () {
  //Her bir deleteBtn gezir
  for (let index = 0; index < deleteBtn.length; index++) {
    const remove = deleteBtn[index];

    //Her bir deleteBtn gezir her bir elementin her hansi birine click etidyimiz zaman calishir
    remove.addEventListener('click', function () {
      this.parentNode.parentNode.remove(); //-- <a> => <div class="editDel">  => <li>  ---> remove
    });
  }
};

// Update

const updateItem = function (text) {
  updateBtn[0].addEventListener('click', function () {
    console.log(text.data);
    text.data = inputTodo.value;
  });
};

//Edit emeliyyati (Seciline setirdeki elementin inputa doldurulmasi)

const editItem = function () {
  for (let index = 0; index < editBtn.length; index++) {
    const edit = editBtn[index];
    let isStop = false;
    edit.addEventListener('click', function () {
      let textNode = this.parentNode.parentNode.childNodes;

      let text = textNode[0];
      inputTodo.value = text.data.trim();
      updateItem(text);
      isStop = true;
    });
  }
};

// plus isharesini click etidyimizi zaman calisacaq olan kod
const addItem = function () {
  log('Add');
  addBtn.addEventListener('click', function () {
    if (inputTodo.value) {
      createItem();
    }
    removeItem();
    editItem();
  });

  inputTodo.value = '';
};

addItem();
