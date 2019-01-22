import Vue from 'vue';
import VueRouter from 'vue-router';
import MovieList from '@/pages/MovieList.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: MovieList,
    },
  ],
});
