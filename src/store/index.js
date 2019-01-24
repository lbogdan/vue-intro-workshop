import Vue from 'vue';
import Vuex from 'vuex';

import { getMovies, saveMovie } from '@/api-rest';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movies: [],
    isLoading: false,
    isSaving: false,
  },
  getters: {
    movies: state => state.movies,
    isLoading: state => state.isLoading,
    isSaving: state => state.isSaving,
    movie: state => id => state.movies.find(m => m.id === id),
  },
  mutations: {
    updateMovies: (state, payload) => (state.movies = payload),
    updateLoading: (state, payload) => (state.isLoading = payload),
    updateSaving: (state, payload) => (state.isSaving = payload),
    updateMovie: (state, payload) => {
      const index = state.movies.findIndex(m => m.id === payload.id);
      Vue.set(state.movies, index, payload);
    },
  },
  actions: {
    loadMovies({ commit, state }) {
      if (state.movies.length > 0) {
        return Promise.resolve();
      }
      commit('updateLoading', true);
      return getMovies().then(movies => {
        commit('updateMovies', movies);
        commit('updateLoading', false);
      });
    },
    saveMovie({ commit }, payload) {
      commit('updateSaving', true);
      return saveMovie(payload).then(() => {
        commit('updateMovie', payload);
        commit('updateSaving', false);
      });
    },
  },
});
