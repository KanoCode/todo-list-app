import "./style.css";
import "./modules/dependencies";
import "./modules/UpdateList";
import * as lo from "lodash";
import { ToDoList } from "./modules/createList";
import removeAll from "./modules/removeAll";

import reloadList from "./modules/preload";

const toDoList = JSON.parse(localStorage.getItem("activityArr"));

const todoItems = ToDoList.childNodes;

reloadList(toDoList);

const allToDoInputs = document.querySelectorAll("#to-do-list .tdo-item");

todoItems.forEach((node, i) => {
  const input = node.childNodes[3];
  const deleteBtns = node.childNodes[5];
  deleteBtns.addEventListener("click", () => {
    if (input.value === "") {
      const filterdDoList = lo.without(toDoList, toDoList[i]);
      filterdDoList.map((obj, i) => {
        obj.index = i;
        return obj;
      });
      reloadList(filterdDoList);
      localStorage.setItem("activityArr", JSON.stringify(filterdDoList));
      window.location.reload();
    } else {
      window.location.reload();
    }
  });

  if (node.classList.contains("completed")) {
    node.childNodes[1].innerHTML = '<i class="fa-solid fa-check"></i>';
  }

  // input events form editing
  input.addEventListener("click", () => {
    const lists = document.querySelectorAll(".to-do-list input[type=text]");
    lists.forEach((item) => {
      item.type = "button";
    });
    input.type = "text";

    input.addEventListener(
      "keypress",
      (e) => {
        if (e.key === "Enter") {
          if (input.value === "") {
            const filterdDoList = lo.without(toDoList, toDoList[i]);
            reloadList(filterdDoList);

            filterdDoList.map((obj, i) => {
              obj.index = i;
              return obj;
            });

            localStorage.setItem("activityArr", JSON.stringify(filterdDoList));
            window.location.reload();
          } else {
            const newList = JSON.parse(localStorage.getItem("activityArr"));

            newList[i].description = input.value;

            localStorage.setItem("activityArr", JSON.stringify(newList));
            window.location.reload();
          }
        }
      },
      false
    );
  });
});

// make active class
allToDoInputs.forEach((a, i, arr) => {
  const copyArr = Array.from(arr);
  a.addEventListener("click", (e) => {
    const filterd = copyArr.filter((a) => a.id !== e.target.id);

    filterd.forEach((a) => {
      a.classList.remove("active");
    });
    const clicked = lo.difference(copyArr, filterd)[0];
    clicked.className = "active tdo-item";

    const toNodeList = function (arrayOfNodes) {
      const fragment = document.createDocumentFragment();
      arrayOfNodes.forEach((item) => {
        fragment.appendChild(item.cloneNode());
      });
      return fragment.childNodes;
    };

    toNodeList(copyArr);
  });
});

// checkboxes
const checkboxes = document.querySelectorAll(".before");

checkboxes.forEach((a, i) => {
  a.addEventListener("click", () => {
    if (a.parentElement.classList.contains("completed")) {
      a.parentElement.classList.remove("completed");
      const currentLocalList = JSON.parse(localStorage.getItem("activityArr"));
      currentLocalList[i].completed = false;
      localStorage.setItem("activityArr", JSON.stringify(currentLocalList));
      a.innerHTML = "";
    } else {
      a.parentElement.classList.add("completed");
      a.innerHTML = '<i class="fa-solid fa-check"></i>';
      const currentLocalList = JSON.parse(localStorage.getItem("activityArr"));
      currentLocalList[i].completed = true;
      localStorage.setItem("activityArr", JSON.stringify(currentLocalList));
      window.location.reload();
    }
  });
});

// remove all completed items
const removeCompleted = document.querySelector(".last-row");
removeCompleted.addEventListener("click", removeAll);
