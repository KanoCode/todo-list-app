import createList from './createList';

import reloadList from './preload';

const input = document.getElementById('add-to-List');

// const

// add to local storage
const isNull = JSON.parse(localStorage.getItem('activityArr'));
const list = [];

const addItem = () => {
  if (!isNull) {
    const newlist = [];
    if (input.value !== '') {
      const obj = {
        description: input.value,
        completed: false,
        index: 0,
      };

      newlist.push(obj);

      createList(obj);
      input.value = '';

      localStorage.setItem('activityArr', JSON.stringify(newlist));
      location.reload();
    }
  } else {
    const updatedList = JSON.parse(localStorage.getItem('activityArr'));

    if (input.value !== '') {
      const obj = {
        description: input.value,
        completed: false,
        index: updatedList.length,
      };
      updatedList.push(obj);
      createList(obj);
      input.value = '';
      localStorage.setItem('activityArr', JSON.stringify(updatedList));
      location.reload();
    }
  }
};
input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addItem();
  }
});
