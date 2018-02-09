var notifications = document.querySelectorAll('.notification');

notifications.forEach(notification => {
  var deleteButton = notification.querySelector('.delete');
  console.log(deleteButton);
  deleteButton.onclick = () => {
    notification.style.display = 'none';
  };
});
