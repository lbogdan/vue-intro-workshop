<template>
  <div id="app" class="container">
    <movie-item />
  </div>
</template>

<script>
import MovieItem from './components/MovieItem.vue';

export default {
  name: 'app',
  components: {
    MovieItem,
  },
};
</script>
