/* eslint-disable import/prefer-default-export */
import { localStorage } from "./localStorage.js";

export const addTodo = () => {
  const todoDesc = document.getElementById("todo-input").value;
  const index =
    localStorage.items.length > 0 ? localStorage.items.length + 1 : 1;
  const todo = {
    key: index,
    data: { index, descrption: todoDesc, completed: false },
  };
  localStorage.setItem(todo);
};
export const removeToDo = (index) => {
  const newItems = localStorage.items.filter(
    (item) => item.data.index !== index
  );
  localStorage.items = newItems;
};
