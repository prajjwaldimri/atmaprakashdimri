import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import Routes from './vueroutes';
import App from '../components/App.vue';

import '../scss/main.scss';
import './partials/notification';
import WOW from 'wowjs';

Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

var app = new Vue({
  el: '#app',
  render: h => h(App),
  router: router
});

new WOW.WOW().init();

document.addEventListener(
  'DOMContentLoaded',
  function () {
    var file = document.querySelector('.file');
    if (file) {
      file.onchange = updateFileInputs;
    }
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
