/* eslint-disable import/prefer-default-export */
import { localStorage } from './localStorage';

export const addTodo = () => {
  const todoDesc = document.getElementById('todo-input').value;
  const index = localStorage.items.length > 0 ? localStorage.items.length + 1 : 1;
  const todo = {
    key: index,
    data: { index, descrption: todoDesc, completed: false },
  };
  localStorage.setItem(todo);
};
export const removeToDo = (index) => {
  const newItems = localStorage.items.filter(
    (item) => item.data.index !== index,
  );
  localStorage.items = newItems;
};
// code
export const editToDo = (description, index) => {
  const todo = localStorage.items.filter(
    (item) => item.data.index === index,
  )[0];
  todo.data.descrption = description;
  const todoDesc = document.getElementById('todo-input');
  todoDesc.value = description;
};

export const updateStatus = (index) => {
  const todo = localStorage.items.filter(
    (item) => item.data.index === index,
  )[0];
  todo.data.completed = true;
};

export const deleteCompleted = () => {
  const newItems = localStorage.items.filter(
    (item) => item.data.completed !== true,
  );
  localStorage.items = newItems;
};