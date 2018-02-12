import Vue from 'vue';

const notifications = document.querySelectorAll('.notification');

Array.prototype.forEach.call(
  notifications,
  (el, index) =>
    new Vue({
      el,
      data: {
        show: true
      },
      methods: {
        disappear: function () {
          this.show = false;
        }
      }
    })
);
