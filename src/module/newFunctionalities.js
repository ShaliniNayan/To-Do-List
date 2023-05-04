// Define the constants and variables used in the code
const todoList = document.querySelector('#list');
let LIST = [];
const CHECK = 'fa-check-circle';

function sortListAlphabetically() {
  const listItems = todoList.querySelectorAll('.item');
  const sortedItems = Array.from(listItems).sort((a, b) => {
    const textA = a.querySelector('.text').textContent.toLowerCase();
    const textB = b.querySelector('.text').textContent.toLowerCase();
    if (textA < textB) return -1;
    if (textA > textB) return 1;
    return 0;
  });
  todoList.innerHTML = '';
  sortedItems.forEach((item, index) => {
    index += 1;
    item.querySelector('.num').textContent = index;
    todoList.appendChild(item);
  });
  // Update the local storage to reflect the sorted list
  LIST = sortedItems.map((item, index) => {
    const itemId = parseInt(item.querySelector('.co').getAttribute('id'), 10);
    index += 1;
    return {
      name: item.querySelector('.text').textContent,
      done: item.querySelector('.co').classList.contains(CHECK),
      trash: item.querySelector('.de').getAttribute('job') === 'remove',
      id: itemId,
      index,
    };
  });
  localStorage.setItem('TODO', JSON.stringify(LIST));
}

// Call the sortListAlphabetically function when needed
const sortBtn = document.querySelector('#sort-btn');
if (sortBtn) {
  sortBtn.addEventListener('click', sortListAlphabetically);
} else {
  console.error('sortBtn not found'); // Check for errors with the sort button
}
if (todoList) {
  // Check for errors with the list element
} else {
  console.error('todoList not found');
}
