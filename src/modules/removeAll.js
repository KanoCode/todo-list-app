const remove = () => {
  const currentLocalList = JSON.parse(localStorage.getItem('activityArr'));

  const filterLocalStorage = currentLocalList.filter((a) => !a.completed);
  localStorage.setItem('activityArr', JSON.stringify(filterLocalStorage));
  window.location.reload();
};

export default remove;
