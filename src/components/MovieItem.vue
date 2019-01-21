<template>
  <div class="card mt-4">
    <div class="card-body">
      <h5 class="card-title">
        {{ title }} <small>({{ year }})</small>
      </h5>
      <h6 class="card-subtitle text-muted">{{ genre }}</h6>
      <hr />
      <div class="row">
        <div class="col-sm-4">
          <img :src="poster" class="img-fluid" alt="Movie poster" />
        </div>
        <div class="col-sm-8">
          <p>{{ plot }}</p>
        </div>
      </div>
    </div>
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
