import './style.css';
import todos from './modules/todos.js';
import todoList from './modules/htmlElements.js';

todos.forEach((todo) => {
  const content = document.createElement('li');
  content.setAttribute('class', 'todo');
  content.innerHTML = `
    <div class="todo-left">
      <input type="checkbox" class="checkbox" ${todo.isComplete ? 'checked' : ''}>
      <label class="todo-text">${todo.description}</label>
    </div>
    <button class="options-button"><span class="iconify options" data-icon="mi:options-vertical"></span></button>
  `;
  todoList.appendChild(content);
});