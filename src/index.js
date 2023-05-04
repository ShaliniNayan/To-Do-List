// Select the Elements
const clear = document.querySelector('.clear');
const list = document.getElementById('list');
const input = document.getElementById('input');

// Classes Names
const CHECK = 'fa fa-check-circle';
const UNCHECK = 'fa-circle-thin';
const LINE_THROUGH = 'lineThrough';

// Variables
let LIST; let
  id;

// Get Item from Local Storage
const data = localStorage.getItem('TODO');

// Check if data is not empty
if (data) {
  LIST = JSON.parse(data);
  id = LIST.length; // Set the id to the last one in the list
  loadList(LIST); // load the list to the user interface
} else {
  // if data isn't empty
  LIST = [];
  id = 0;
}

// load the items to user's interface
function loadList(array) {
  array.forEach((item) => {
    addToDo(item.name, item.id, item.done, item.trash);
  });
}

// clear the local storage
clear.addEventListener('click', () => {
  localStorage.clear();
  location.reload();
});

// Function Add To-Do
function addToDo(toDo, id, done, trash) {
  if (trash) {
    return;
  }

  const DONE = done ? CHECK : UNCHECK;
  const LINE = done ? LINE_THROUGH : '';

  const item = `<li class = 'item'>
                    <i class="fa ${DONE} co" job="complete" id="${id}"></i>
                    <p class="text ${LINE}">${toDo}</p>
                    <i class="fa fa-trash-o de" job="remove" id="${id}"></i> 
                </li>                
                `;

  const position = 'beforeend';

  list.insertAdjacentHTML(position, item);
}

// Add an item to the list user the enter key
document.addEventListener('keyup', (even) => {
  if (event.keyCode === 13) {
    const toDo = input.value;

    // If input isn't empty
    if (toDo) {
      addToDo(toDo, id, false, false);

      LIST.push({
        name: toDo ? id : id,
        done: false,
        trash: false,
      });

      // Add item to Local Storage(this code must be added where the LIST array is updated )
      localStorage.setItem('TODO', JSON.stringify(LIST));

      id++;
    }
    input.value = '';
  }
});

// Complete to do
function completeTODo(element) {
  element.classList.toggle(CHECK);
  element.classList.toggle(UNCHECK);
  element.parentNode.querySelector('.text').classList.toggle(LINE_THROUGH);

  LIST[element.id].done = !LIST[element.id].done;
}

// Remove to do function
function removeToDo(element) {
  element.parentNode.parentNode.removeChild(element.parentNode);

  LIST[element.id].trash = true;
}

// Traget the items created dynamically

list.addEventListener('click', (event) => {
  const element = event.target; // return the clicked element inside list
  const elementJob = element.attributes.job.value; // complete or delete

  if (elementJob === 'complete') {
    completeTODo(element);
  } else if (elementJob === 'remove') {
    removeToDo(element);
  }
  // Add item to Local Storage(this code must be added where the LIST array is updated )
  localStorage.setItem('TODO', JSON.stringify(LIST));
});
