import './style.css';
import todos from './modules/todos.js';
import storageAvailable from './modules/storageAvailable.js';
import { todoInput } from './modules/htmlElements.js';

if (storageAvailable('localStorage')) {
  todos.checkStorage();

  todos.showTodos();

  for (let i = 0; i < todos.todos.length; i += 1) {
    const removeButtons = document.querySelectorAll('.remove-button');
    removeButtons[i].addEventListener('click', () => {
      todos.delete(i);
    });
  }

  for (let i = 0; i < todos.todos.length; i += 1) {
    const checkboxes = document.querySelectorAll('.checkbox');
    checkboxes[i].addEventListener('change', (e) => {
      if (e.target.checked) {
        todos.complete(i, true);
      } else {
        todos.complete(i, false);
      }
      todos.save();
    });
  }

  for (let i = 0; i < todos.todos.length; i += 1) {
    const todoTexts = document.querySelectorAll('.todo-text');
    todoTexts[i].addEventListener('keydown', (event) => {
      if (event.keyCode === 13) {
        event.preventDefault();
      }
    });
    todoTexts[i].addEventListener('input', () => {
      todos.edit(i, todoTexts[i].innerHTML);
      todos.save();
    });
  }

  todoInput.addEventListener('keyup', (event) => {
    if (todoInput.value !== '') {
      if (event.keyCode === 13) {
        todos.add({
          description: todoInput.value,
          isComplete: false,
          index: todos.todos.length + 1,
        });
        todos.save();
        todoInput.value = '';
        window.location.reload();
      }
    }
  });
}
