import Vue from 'vue';
import VueRouter from 'vue-router';
import MovieList from '@/pages/MovieList.vue';
import Movie from '@/pages/Movie.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: MovieList,
    },
    {
      path: '/movie/:id',
      name: 'movie',
      component: Movie,
      props: true,
    },
  ],
});
