import Vue from 'vue';
import UserBlogs from '../components/UserBlogs.vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

var blogs = new Vue({
  el: '#blogContainer',
  render: h => h(UserBlogs)
});
