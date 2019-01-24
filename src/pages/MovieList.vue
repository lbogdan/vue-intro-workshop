<template>
  <loading-indicator v-if="isLoading" message="Loading movies..." />
  <div v-else class="row">
    <movie-item
      v-for="movie in movies"
      :item="movie"
      :key="movie.id"
      @change="onChange"
    />
  </div>
</template>

<script>
import { saveMovie } from '@/api-rest';
import MovieItem from '@/components/MovieItem.vue';
import LoadingIndicator from '@/components/LoadingIndicator.vue';

export default {
  name: 'movie-list-page',
  components: {
    MovieItem,
    LoadingIndicator,
  },
  computed: {
    movies() {
      return this.$store.getters.movies;
    },
    isLoading() {
      return this.$store.getters.isLoading;
    },
  },
  created() {
    this.$store.dispatch('loadMovies');
  },
  methods: {
    onChange(movie) {
      saveMovie(movie);
    },
  },
};
</script>
