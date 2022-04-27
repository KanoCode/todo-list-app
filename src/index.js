import './style.css';
import './modules/dependencies';

const toDoList = [
  { description: 'Wash the dishes', completed: false, index: 0 },
  { description: 'Complete To Do list Project', completed: false, index: 1 },
];

const ToDoList = document.getElementById('to-do-list');

const createTodoItem = (obj) => {
  const tdoItem = document.createElement('div');
  tdoItem.className = 'tdo-item';
  tdoItem.innerHTML = ` <span class="before"></span>
<input
  class="${obj.completed ? 'completed' : ''}"
  type="button"
  value="${obj.description}"
  onclick="msg()"
/>

<i class="fa-solid fa-ellipsis-vertical"></i>
`;
  ToDoList.append(tdoItem);
};

toDoList.forEach((a) => {
  createTodoItem(a);
});
