// get the elements from the DOM
const todoInput = document.getElementById('todo-input');
const addTodoBtn = document.getElementById('add-todo-btn');
const todoList = document.getElementById('todo-list');

// add a new todo item to the list
function addTodo() {
  // get the input value
  const todoText = todoInput.value;

  // create a new li element
  const li = document.createElement('li');

  // create a span element for the todo text
  const todoTextSpan = document.createElement('span');
  todoTextSpan.innerText = todoText;
  todoTextSpan.classList.add('todo-text');

  // create a button element for deleting the todo
  const deleteTodoBtn = document.createElement('button');
  deleteTodoBtn.innerText = 'Delete';
  deleteTodoBtn.classList.add('delete-todo-btn');

  // add an event listener to the delete button
  deleteTodoBtn.addEventListener('click', () => {
    li.remove();
  });

  // append the todo text and delete button to the li element
  li.appendChild(todoTextSpan);
  li.appendChild(deleteTodoBtn);

  // append the li element to the todo list
  todoList.appendChild(li);

  // clear the input value
  todoInput.value = '';
}

// add an event listener to the add todo button
addTodoBtn.addEventListener('click', addTodo);

// add an event listener to the input field to add the todo when the enter key is pressed
todoInput.addEventListener('keydown', (event) => {
  if (event.keyCode === 13) {
    addTodo();
  }
});
