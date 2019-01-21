<template>
  <div id="app" class="container">
    <movie-item :item="movie" />
  </div>
</template>

<script>
import MovieItem from './components/MovieItem.vue';

export default {
  name: 'app',
  components: {
    MovieItem,
  },
  data() {
    return {
      movie: {
        title: 'Star Wars: The Last Jedi',
        year: 2017,
        genre: 'Action, Adventure, Fantasy',
        plot:
          'Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.',
        poster:
          'https://images-na.ssl-images-amazon.com/images/I/51ih4cPagFL.jpg',
        comment: '',
      },
    };
  },
};
</script>
