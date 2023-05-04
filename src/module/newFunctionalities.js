// Define the constants and variables used in the code
const list = document.querySelector('#list');
let LIST = []; // initialize an empty array for storing the sorted list
const CHECK = 'fa-check-circle';

function sortListAlphabetically() {
  const listItems = document.querySelectorAll('.item');
  const sortedItems = Array.from(listItems).sort((a, b) => {
    const textA = a.querySelector('.text').textContent.toLowerCase();
    const textB = b.querySelector('.text').textContent.toLowerCase();
    if (textA < textB) return -1;
    if (textA > textB) return 1;
    return 0;
  });
  list.innerHTML = '';
  sortedItems.forEach((item) => {
    list.appendChild(item);
  });
  // Update the local storage to reflect the sorted list
  LIST = sortedItems.map((item) => {
    const itemId = parseInt(item.querySelector('.co').getAttribute('id'), 10); // add the radix parameter
    return {
      name: item.querySelector('.text').textContent,
      done: item.querySelector('.co').classList.contains(CHECK),
      trash: item.querySelector('.de').getAttribute('job') === 'remove',
      id: itemId,
    };
  });
  localStorage.setItem('TODO', JSON.stringify(LIST));
}

// Call the sortListAlphabetically function when needed
const sortBtn = document.querySelector('#sort-btn');
sortBtn.addEventListener('click', sortListAlphabetically);
