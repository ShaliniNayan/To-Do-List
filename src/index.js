import './style.css';
import { todos } from './modules/todos.js';
import storageAvailable from './modules/storageAvailable.js';
import { clearBtn, todoInput } from './modules/htmlElements.js';
// import completeToDo from './modules/completedCheck.js';

if (storageAvailable('localStorage')) {
  todos.checkStorage();

  todos.showTodos();

  // Remove a To-Do
  for (let i = 0; i < todos.todos.length; i += 1) {
    const removeButtons = document.querySelectorAll('.remove-button');
    removeButtons[i].addEventListener('click', () => {
      todos.delete(i);
    });
  }

  // Mark a To-Do as completed
  completeToDo(todos);

  // Edit a To-Do
  for (let i = 0; i < todos.todos.length; i += 1) {
    const todoTexts = document.querySelectorAll('.todo-text');
    todoTexts[i].addEventListener('keydown', (event) => {
      if (event.keyCode === 13) {
        event.preventDefault();
      }
    });
    todoTexts[i].addEventListener('input', () => {
      todos.edit(i, todoTexts[i].innerHTML);
    });
  }

  // Add a To-Do
  todoInput.addEventListener('keyup', (event) => {
    if (todoInput.value !== '') {
      if (event.keyCode === 13) {
        todos.add({
          description: todoInput.value,
          isComplete: false,
          index: todos.todos.length + 1,
        });
        todoInput.value = '';
      }
    }
  });

  // Clean completed To-Dos
  clearBtn.addEventListener('click', () => {
    todos.clearCompleted();
  });
}
