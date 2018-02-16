import about from '../components/AboutPage.vue';
import gallery from '../components/UserGallery.vue';
import blogs from '../components/UserBlogs.vue';

export default [
  {
    path: '/about',
    component: about
  },
  {
    path: '/gallery',
    component: gallery
  },
  {
    path: '/blogs',
    component: blogs
  }
];
