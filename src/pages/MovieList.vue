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
import { getMovies, saveMovie } from '@/api';
import MovieItem from '@/components/MovieItem.vue';
import LoadingIndicator from '@/components/LoadingIndicator.vue';

export default {
  name: 'movie-list-page',
  components: {
    MovieItem,
    LoadingIndicator,
  },
  data() {
    return {
      movies: [],
      isLoading: false,
    };
  },
  created() {
    this.isLoading = true;
    getMovies().then(movies => {
      this.movies = movies;
      this.isLoading = false;
    });
  },
  methods: {
    onChange(movie) {
      saveMovie(movie);
    },
  },
};
</script>
