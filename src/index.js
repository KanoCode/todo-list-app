import "./style.css";
import "./modules/dependencies";
import "./modules/UpdateList";
import createList from "./modules/createList";
import { ToDoList } from "./modules/createList";

import reloadList from "./modules/preload";

const toDoList = JSON.parse(localStorage.getItem("activityArr"));

const todoItems = ToDoList.childNodes;

// const removeClass = (arr) => {
// arr.forEach((a)=>{
//   a
// })
  
// };

reloadList(toDoList);

todoItems.forEach((node, i,arr) => {
  let deleteBtns = node.childNodes[5];
  deleteBtns.addEventListener("click", () => {
    if (input.value === "") {
      toDoList.splice(i, 1);
      localStorage.setItem("activityArr", JSON.stringify(toDoList));
      window.location.reload();
    } else {
      window.location.reload();
    }
  });

  input.addEventListener("click", (e) => {
    input.setAttribute("type", "text");
    input.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        if (input.value === "") {
          toDoList.splice(i, 1);
          localStorage.setItem("activityArr", JSON.stringify(toDoList));
          window.location.reload();
        } else {
          let newList = JSON.parse(localStorage.getItem("activityArr"));

          newList[i].description = input.value;

          localStorage.setItem("activityArr", JSON.stringify(newList));
          window.location.reload();
        }
      }
    });
  });
});


const active = document.querySelectorAll(`tdo-item`);
console.log(active)