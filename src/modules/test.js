import { todosTest } from './todos.js';
import displayTodos from './displaytest.js';

delete window.location;
window.location = { reload: jest.fn() };

todosTest.checkStorage();

const classCheckbox = document.getElementsByClassName('checkbox');

describe('Test add To-Do', () => {
  test('Test localStorage', () => {
    todosTest.add({
      description: 'Test 1',
      isComplete: false,
      index: 1,
    });
    expect(todosTest.todos).toEqual([
      {
        description: 'Test 1',
        isComplete: false,
        index: 1,
      },
    ]);
    todosTest.add({
      description: 'Test 2',
      isComplete: false,
      index: 2,
    });
    todosTest.add({
      description: 'Test 3',
      isComplete: false,
      index: 3,
    });
    todosTest.add({
      description: 'Test 4',
      isComplete: false,
      index: 4,
    });
    todosTest.add({
      description: 'Test 5',
      isComplete: false,
      index: 5,
    });
    expect(todosTest.todos).toHaveLength(5);
  });

  test('Test item is displayed when added', () => {
    todosTest.add({
      description: 'Test 6',
      isComplete: false,
      index: 6,
    });

    displayTodos();

    const todoLi = document.querySelectorAll('.todo');

    expect(todoLi).toHaveLength(6);
  });
});

describe('Test remove To-Do', () => {
  test('Test remove in localStorage', () => {
    todosTest.delete(0);
    expect(todosTest.todos).toHaveLength(5);
  });

  test('Test item is removed visually', () => {
    todosTest.delete(0);
    displayTodos();

    const todoLi = document.querySelectorAll('.todo');

    expect(todoLi).toHaveLength(4);
  });
});

describe('Test Edit To-Do', () => {
  test('Test edit in localStorage', () => {
    todosTest.edit(0, 'test edited');
    expect(todosTest.todos[0].description).toBe('test edited');
  });

  test('Test item is edited visually', () => {
    displayTodos();
    const classLabel = document.querySelectorAll('.todo-text');
    expect(classLabel[0].innerHTML).toBe('test edited');
  });
});

describe('Test Mark To-Do as completed', () => {
  test('Test mark to-do completed in localStorage', () => {
    todosTest.complete(0, true);
    expect(todosTest.todos[0].isComplete).toBe(true);
  });

  test('Test item is marked as completed visually', () => {
    displayTodos();
    expect(classCheckbox[0].checked).toBe(true);
  });
});

describe('Test Clear completed To-Dos', () => {
  test('Test completed to-dos removed in localStorage', () => {
    todosTest.clearCompleted();
    expect(todosTest.todos).toHaveLength(3);
  });

  test('Test completed to-dos removed visually', () => {
    displayTodos();
    const todoLi = document.querySelectorAll('.todo');
    expect(todoLi).toHaveLength(3);
  });
});