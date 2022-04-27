import './style.css';
import './modules/dependencies';
import './modules/UpdateList'
import createList from './modules/createList'

const toDoList = [
  { description: 'Wash the dishes', completed: false, index: 0 },
  { description: 'Complete To Do list Project', completed: false, index: 1 },
];



toDoList.forEach((a) => {
  createList(a);
});
