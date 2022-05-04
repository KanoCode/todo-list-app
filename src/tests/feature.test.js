import { addTodo, removeToDo } from "../__mocks__/features.js";
import { localStorage } from "../__mocks__/localStorage.js";

describe("Test to do list add and remove features", () => {
  test("Should add item in local storage", () => {
    document.body.innerHTML =
      'c<input type="text" value="Go to gym" id="todo-input">';
    addTodo();
    addTodo();

    expect(localStorage.items.length).toBe(2);
    expect(localStorage.getItem(1).data.descrption).toBe("Go to gym");
  });
  test("Should remove todo item from local storage ", () => {
    removeToDo(1);
    expect(localStorage.items.length).toBe(1);
    expect(localStorage.getItem(1).completed).toBeFalsy();
  });
});
