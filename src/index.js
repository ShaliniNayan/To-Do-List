/* eslint-disable no-unused-vars */
import _ from 'lodash';
import AddItems from './print';
// import printMe from './print.js';
import './style.css';

const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const button = document.getElementById('todo-button');
const list = document.getElementById('todo-list');
const clearButton = document.getElementById('todo-clear-button');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function createTask(task, index, completed) {
  return `
  <li class="todo-item ${completed ? 'completed' : ''}" data-index="${index}">
    <input type="checkbox" class="todo-checkbox" ${completed ? 'checked' : ''} />
    <span class="todo-description">${task}</span>
    <button class="todo-delete">x</button>
  </li>
  `;
}

function renderTasks() {
  list.innerHTML = tasks.map((task, index) => createTask(task.description, index, task.completed)).join('');
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function addTask(event) {
  event.preventDefault();
  if (!input.value.trim()) {
    return;
  }
  const task = {
    description: input.value.trim(),
    completed: false,
    index: tasks.length + 1
  };
  tasks.push(task);
  renderTasks();
  input.value = '';
}

function completeTask(event) {
  if (!event.target.matches('.todo-checkbox')) {
    return;
  }
  const index = event.target.parentNode.dataset.index;
  tasks[index].completed = event.target.checked;
  renderTasks();
}

function deleteTask(event) {
  if (!event.target.matches('.todo-delete')) {
    return;
  }
  const index = event.target.parentNode.dataset.index;
  tasks.splice(index, 1);
  renderTasks();
}

function clearCompleted() {
  tasks = tasks.filter(task => !task.completed);
  renderTasks();
}

form.addEventListener('submit', addTask);
list.addEventListener('change', completeTask);
list.addEventListener('click', deleteTask);
clearButton.addEventListener('click', clearCompleted);

renderTasks();
