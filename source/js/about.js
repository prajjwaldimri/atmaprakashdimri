import Vue from 'vue';
import AboutPage from '../components/AboutPage.vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

var about = new Vue({
  el: '#aboutContainer',
  render: h => h(AboutPage)
});
