const addTodoBtn = document.querySelector('#add-new-todo-btn');
const newTodoInput = document.querySelector('#new-todo-input');
const ulTodoList = document.querySelector('#todo-list');
const mainCheckbox = document.querySelector('#check-all-todos');
const removeAll = document.querySelector('.removeAll');


const addTodoFn = function () {



  const inputValue = newTodoInput.value;


 
  const listItem = document.createElement('li');

  listItem.classList.add('single-todo');

  const checkBox = document.createElement('input');
  checkBox.setAttribute('type', 'checkbox');
  checkBox.setAttribute('class', 'single-todo-check');

  checkBox.addEventListener('click', (e) => {
    console.log('todo checked', e.target.checked);
    const checkState = e.target.checked;

    checkBox.nextElementSibling.classList.toggle('cross-line');
 
  });


  const todoText = document.createElement('p');
  todoText.setAttribute('class', 'single-todo-text');
  todoText.innerText = inputValue;

  const singleTodoInput = document.createElement ('input')
    singleTodoInput.setAttribute('class', 'edit-single-todo-text');


  const editBtn = document.createElement('button');
  editBtn.innerText = 'Edit';
  editBtn.setAttribute('class', 'edit-btn');
  editBtn.style.backgroundColor = 'orange'
  editBtn.addEventListener('click', () => {
      console.log('edit btn clicked');
    

        singleTodoInput.value = todoText.innerText;
        doneBtn.style.display = 'inline';
        editBtn.style.display = 'none';
        todoText.style.display = 'none';
        singleTodoInput.style.display = 'inline';
        singleTodoInput.style.type = 'text';

  });

  const doneBtn = document.createElement('button');
  doneBtn.innerText = 'Done';
  doneBtn.setAttribute('class', 'done-btn');
  doneBtn.style.backgroundColor = 'orange';
  doneBtn.style.display = 'none';
  doneBtn.addEventListener('click', () => {
   console.log('done btn clicked');
    
   doneBtn.style.display = 'none';
   editBtn.style.display = 'inline';
   singleTodoInput.style.display = 'none';
   todoText.style.display = 'inline';
   todoText.innerText = singleTodoInput.value;

  })

  const deleteBtn = document.createElement('button');
  deleteBtn.innerText = 'Delete';
  deleteBtn.setAttribute('class', 'delete-btn');
  deleteBtn.addEventListener('click', () => {
    console.log('delete btn clicked');

    deleteBtn.parentElement.remove();

  });


  listItem.appendChild(checkBox);
  listItem.appendChild(todoText);
  listItem.appendChild(singleTodoInput);
  listItem.appendChild(editBtn);
  listItem.appendChild(doneBtn);
  listItem.appendChild(deleteBtn);

  if (inputValue !== '') {
    ulTodoList.appendChild(listItem);
  }
  newTodoInput.value = '';
};

addTodoBtn.addEventListener('click', addTodoFn);