const completeToDo = (todos) => {
  for (let i = 0; i < todos.todos.length; i += 1) {
    const checkboxes = document.querySelectorAll('.checkbox');
    const todoTexts = document.querySelectorAll('.todo-text');
    checkboxes[i].addEventListener('change', (e) => {
      todos.complete(i, e.target.checked);
      todoTexts[i].style = e.target.checked ? 'text-decoration: line-through' : 'text-decoration: none';
    });
  }
};

export default completeToDo;