import about from '../components/AboutPage.vue';
import gallery from '../components/UserGallery.vue';
import blogs from '../components/UserBlogs.vue';
import blog from '../components/BlogPage.vue';
import awards from '../components/AwardsPage.vue';

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
  },
  {
    path: '/blog/:id',
    component: blog
  },
  {
    path: '/awards',
    component: awards
  }
];
