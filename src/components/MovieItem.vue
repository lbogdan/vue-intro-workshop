<template>
  <div>
    <h1>{{ title }} ({{ year }})</h1>
    <h2>{{ genre }}</h2>
    <p>
      {{ plot }}
    </p>
    <img v-bind:src="poster" alt="poster" />
  </div>
</template>

<script>
export default {
  name: 'movie-item',
  data() {
    return {
      title: 'Star Wars: The Last Jedi',
      year: 2017,
      genre: 'Action, Adventure, Fantasy',
      plot:
        'Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.',
      poster:
        'https://images-na.ssl-images-amazon.com/images/I/51ih4cPagFL.jpg',
    };
  },
};
</script>
