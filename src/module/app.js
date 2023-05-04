const clear = document.querySelector('.clear');
const list = document.getElementById('list');
const input = document.getElementById('input');

const CHECK = 'fa fa-check-circle';
const UNCHECK = 'fa-circle-thin';
const LINE_THROUGH = 'lineThrough';

let LIST;
let id;

const data = localStorage.getItem('TODO');

clear.addEventListener('click', () => {
  localStorage.clear();
  window.location.reload();
});

function addToDo(name, index, done, trash) {
  if (trash) {
    return;
  }

  const DONE = done ? CHECK : UNCHECK;
  const LINE = done ? LINE_THROUGH : '';

  const item = `<li class = 'item'>
                    <i class="fa ${DONE} co" job="complete" id="${index}"></i>
                    <p class="text ${LINE}">${name}</p>
                    <i class="fa fa-trash-o de" job="remove" id="${index}"></i> 
                </li>                
                `;

  const position = 'beforeend';

  list.insertAdjacentHTML(position, item);
}

function loadList(listArray) {
  listArray.forEach((item) => {
    addToDo(item.name, item.index, item.done, item.trash);
  });
}

if (data) {
  LIST = JSON.parse(data);
  id = LIST.length;
  loadList(LIST);
} else {
  LIST = [];
  id = 1;
}

document.addEventListener('keyup', (event) => {
  if (event.keyCode === 13) {
    const toDo = input.value;

    if (toDo) {
      addToDo(toDo, id, false, false);

      LIST.push({
        name: toDo,
        index: id,
        done: false,
        trash: false,
      });

      localStorage.setItem('TODO', JSON.stringify(LIST));

      id += 1;
    }
    input.value = '';
  }
});

function completeToDo(element) {
  element.classList.toggle(CHECK);
  element.classList.toggle(UNCHECK);
  element.parentNode.querySelector('.text').classList.toggle(LINE_THROUGH);

  LIST[element.id - 1].done = !LIST[element.id - 1].done;
}

function removeToDo(element) {
  element.parentNode.parentNode.removeChild(element.parentNode);

  LIST[element.id - 1].trash = true;
}

list.addEventListener('click', (event) => {
  const element = event.target;
  const elementJob = element.attributes.job.value;

  if (elementJob === 'complete') {
    completeToDo(element);
  } else if (elementJob === 'remove') {
    removeToDo(element);
  }

  localStorage.setItem('TODO', JSON.stringify(LIST));
});
