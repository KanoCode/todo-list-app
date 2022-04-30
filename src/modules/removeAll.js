const remove = () => {
  let currentLocalList = JSON.parse(localStorage.getItem("activityArr"));

  let filterLocalStorage = currentLocalList.filter((a) => !a.completed);
  localStorage.setItem("activityArr", JSON.stringify(filterLocalStorage));
  window.location.reload();
};

export default remove;
