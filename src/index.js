import "./style.css";
import "./modules/dependencies";
import "./modules/UpdateList";
import * as lo from "lodash";
import { ToDoList } from "./modules/createList";

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
      reloadList(filterdDoList);
      localStorage.setItem("activityArr", JSON.stringify(filterdDoList));
      window.location.reload();
    } else {
      window.location.reload();
    }
  });

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
  console.log(arr);
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
