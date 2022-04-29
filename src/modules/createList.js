export const ToDoList = document.getElementById('to-do-list');

const createTodoItem = (obj) => {
  const tdoItem = document.createElement('div');
  tdoItem.className = 'tdo-item';
  tdoItem.id = `${obj.index}`;
  tdoItem.innerHTML = ` <span class="before"></span>
  <input 
  id="${obj.index}"
    class="${obj.completed ? 'completed' : ''}"
    type="button"
    value="${obj.description}"

  />
  <span class="icon-container"><i class="fa-solid fa-trash-can"></i> <i class="fa-solid fa-ellipsis-vertical"></i></span>
  `;
  ToDoList.append(tdoItem);
};

export default createTodoItem;
