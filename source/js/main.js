import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import Routes from './vueroutes';
import App from '../components/App.vue';

import '../scss/main.scss';
import './partials/notification';
import WOW from 'wowjs';

import 'bulma-extensions/bulma-accordion/dist/bulma-accordion.min';

// Tabs component

Vue.component('tabs', {
  template: `
  <div>
    <div class="tabs is-centered is-fullwidth is-large is-toggle">
      <ul>
        <li v-for="tab in tabs" :class="{'is-active': tab.isActive}">
          <a :href="tab.href" @click="selectTab(tab)"> {{tab.name}}  </a>
        </li>
      </ul>
    </div>

    <div class="tab-details">
      <slot></slot>
    </div>
  </div>
  `,
  data () {
    return {
      tabs: []
    };
  },
  created () {
    this.tabs = this.$children;
  },
  methods: {
    selectTab (selectedTab) {
      this.tabs.forEach(tab => {
        tab.isActive = tab.name === selectedTab.name;
      });
    }
  }
});

Vue.component('tab', {
  template: `<div v-show="isActive"> <slot></slot> </div>`,
  props: {
    name: { required: true },
    selected: { default: false }
  },
  data () {
    return {
      isActive: false
    };
  },
  computed: {
    href () {
      return '#' + this.name.toLowerCase().replace(/ /g, '-');
    }
  },
  mounted () {
    this.isActive = this.selected;
  }
});

Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

// eslint-disable-next-line no-new

// eslint-disable-next-line no-new
new Vue({
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
