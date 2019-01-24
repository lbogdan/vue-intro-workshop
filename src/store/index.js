import Vue from 'vue';
import Vuex from 'vuex';

import { getMovies } from '@/api-rest';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movies: [],
    isLoading: false,
  },
  getters: {
    movies: state => state.movies,
    isLoading: state => state.isLoading,
  },
  mutations: {
    updateMovies: (state, payload) => (state.movies = payload),
    updateLoading: (state, payload) => (state.isLoading = payload),
  },
  actions: {
    loadMovies({ commit }) {
      commit('updateLoading', true);
      return getMovies().then(movies => {
        commit('updateMovies', movies);
        commit('updateLoading', false);
      });
    },
  },
});
