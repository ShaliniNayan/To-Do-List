const todoList = document.getElementById('todo-list');
const inputTask = document.getElementById('input-task');
const addBtn = document.getElementById('add-btn');

const tasks = [];

function displayTasks() {
  todoList.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${task}</span>
      <button class="delete-btn" data-index="${index}">Delete</button>
      <button class="complete-btn" data-index="${index}">Complete</button>
    `;
    if (task.completed) {
      li.classList.add('completed');
    }
    todoList.appendChild(li);
  });
}

addBtn.addEventListener('click', () => {
  const task = inputTask.value;
  if (task) {
    tasks.push({
      task,
      completed: false,
    });
    displayTasks();
    inputTask.value = '';
  }
});

todoList.addEventListener('click', (event) => {
  if (event.target.className === 'delete-btn') {
    const index = event.target.getAttribute('data-index');
    tasks.splice(index, 1);
    displayTasks();
  } else if (event.target.className === 'complete-btn') {
    const index = event.target.getAttribute('data-index');
    tasks[index].completed = true;
    displayTasks();
  }
});

displayTasks();
