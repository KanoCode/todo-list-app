import createList from './createList';

const input = document.getElementById('add-to-List');

// add to local storage
const isNull = JSON.parse(localStorage.getItem('activityArr'));

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
      window.location.reload();
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
      window.location.reload();
    }
  }
};
input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addItem();
  }
});
