/* global CSS */
var adminMenu = document.getElementById('adminMenu');

if (adminMenu) {
  var adminMenuCurrentChildren = adminMenu.querySelector(
    '[href=' + CSS.escape(window.location.pathname) + ']'
  );

  adminMenuCurrentChildren.classList.add('is-active');
}
