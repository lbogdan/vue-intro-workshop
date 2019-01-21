<template>
  <div id="app" class="container mb-4">
    <div class="row">
      <movie-item :item="movie" />
      <movie-item :item="movie2" />
    </div>
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
      movie2: {
        title: 'Black Swan',
        year: 2010,
        genre: 'Drama, Thriller',
        plot:
          'A committed dancer wins the lead role in a production of Tchaikovskys "Swan Lake" only to find herself struggling to maintain her sanity.',
        poster:
          'https://images-na.ssl-images-amazon.com/images/I/615yWgAir2L._SY500_.jpg',
        comment: '',
      },
    };
  },
};
</script>
