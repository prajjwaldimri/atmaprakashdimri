import Vue from 'vue';
import UserGallery from '../components/UserGallery.vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

var gallery = new Vue({
  el: '#galleryContainer',
  render: h => h(UserGallery)
});
