import Vue from 'vue';
var notification = new Vue({
  el: '.notification',
  data: {
    show: true
  },
  methods: {
    disappear: function () {
      this.show = false;
    }
  }
});
