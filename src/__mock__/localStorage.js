/* eslint-disable import/prefer-default-export */
const items = [];
export const localStorage = {
  items,
  setItem: (task) => {
    items.push(task);
  },
  getItem: (key) => items.filter((item) => item.key === key)[0],
};


