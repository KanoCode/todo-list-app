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
  <i class="fa-solid hidden fa-trash-can"></i>
  <i class="fa-solid fa-ellipsis-vertical"></i>
  `;
    ToDoList.append(tdoItem);
  };

  export default createTodoItem
  