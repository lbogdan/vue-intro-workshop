<template>
  <div id="app" class="container mb-4">
    <movie-list />
  </div>
</template>

<script>
import MovieList from '@/pages/MovieList.vue';

export default {
  name: 'app',
  components: {
    MovieList,
  },
};
</script>
