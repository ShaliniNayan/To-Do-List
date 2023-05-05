import { todosTest } from './todos.js';

document.body.innerHTML = `
  <main>
    <header>
      <h1>Today's To Do</h1>
      <button type="button" class="refresh-icon-button"><span class="iconify" data-icon="fa:refresh"></span></button>
    </header>
    <input type="text" name="todo-input" id="todo-input" class="todo-input" placeholder="Add to your list...">
    <ul class="todo-list" id="todo-list"></ul>
    <button type="button" class="clear-btn" id="clear-btn">Clear all completed</button>
  </main>
`;

const todoList = document.getElementById('todo-list');

const displayTodos = () => {
  while (todoList.firstChild) {
    todoList.removeChild(todoList.firstChild);
  }

  for (let i = 0; i < todosTest.todos.length; i += 1) {
    const content = document.createElement('li');
    content.setAttribute('class', 'todo');
    content.innerHTML = `
      <div class="todo-left">
        <input type="checkbox" class="checkbox" ${todosTest.todos[i].isComplete ? 'checked' : ''}>
        <label class="todo-text" contenteditable="true" ${todosTest.todos[i].isComplete ? 'style="text-decoration: line-through;"' : ''}>${todosTest.todos[i].description}</label>
      </div>
      <button class="remove-button"><span class="iconify delete" data-icon="fa-solid:trash-alt"></span></button>
    `;
    todoList.appendChild(content);
  }
};

export default displayTodos;