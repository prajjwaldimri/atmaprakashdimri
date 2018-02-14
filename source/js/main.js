import '../scss/main.scss';
import './partials/notification';

document.addEventListener(
  'DOMContentLoaded',
  function () {
    document.querySelector('.file').onchange = updateFileInputs;
  },
  false
);

var updateFileInputs = function () {
  var fileInput = document.querySelectorAll('.file');
  fileInput.forEach(input => {
    var fileName = input.querySelector('.file-input').files[0].name;
    input.querySelector('.file-name').innerHTML = fileName;
  });
};
