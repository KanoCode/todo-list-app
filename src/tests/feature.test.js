/*
 * @jest-environment jsdom
 */
/* eslint-disable import/no-extraneous-dependencies */

import { describe, expect, test } from '@jest/globals';
import {
  addTodo, removeToDo, editToDo, updateStatus, deleteCompleted,
} from '../__mocks__/features';
import { localStorage } from '../__mocks__/localStorage';

describe('Test to do list add and remove features', () => {
  test('Should add item in local storage', () => {
    document.body.innerHTML = '<input type="text" value="Go to gym" id="todo-input">';
    addTodo();
    addTodo();

    expect(localStorage.items.length).toBe(2);
    expect(localStorage.getItem(1).data.descrption).toBe('Go to gym');
  });
  test('Should remove todo item from local storage ', () => {
    removeToDo(2);
    expect(localStorage.items.length).toBe(1);
    expect(localStorage.getItem(1).data.completed).toBe(false);
  });
// code
});

test('Should Edit The Value Inputted', () => {
  document.body.innerHTML = '<input type="text" value="Go to gym" id="todo-input">';
  editToDo('Take A Walk', 1);
  const taskEdited = document.getElementById('todo-input').value;
  expect(localStorage.getItem(1).data.descrption).toBe('Take A Walk');
  expect(taskEdited).toBe('Take A Walk');
});
test('Should Update Status of Task', () => {
  updateStatus(1);
  expect(localStorage.getItem(1).data.completed).toBe(true);
});
test('Should remove all completed taks', () => {
  deleteCompleted();
  expect(localStorage.items.length).toBe(0);
});

// Comment to be removed