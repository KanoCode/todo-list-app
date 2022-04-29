import createList, { ToDoList } from './createList';

const reloadList = (arr) => {
  ToDoList.innerHTML = '';
  arr.forEach((a) => {
    createList(a);
  });
};
export default reloadList;