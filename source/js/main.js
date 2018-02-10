import '../scss/main.scss';
import './partials/notification';

import Vue from 'vue';

var app = new Vue({
  el: '#app',
  data: {
    name: 'Vue Test!',
    message: 'Test Message'
  },
  methods: {
    greet: function () {
      return this.name + 'Function';
    }
  }
});
