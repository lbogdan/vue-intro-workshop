<template>
  <div class="col-lg-6 px-2">
    <div class="card mt-4">
      <div class="card-body">
        <h5 class="card-title">
          {{ item.title }} <small>({{ item.year }})</small>
        </h5>
        <h6 class="card-subtitle text-muted">{{ item.genre }}</h6>
        <hr />
        <div class="row">
          <div class="col-sm-4">
            <img :src="item.poster" class="img-fluid" alt="Movie poster" />
          </div>
          <div class="col-sm-8">
            <p>{{ item.plot }}</p>
          </div>
        </div>
        <div class="row mt-4">
          <movie-comment :comment="item.comment" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MovieComment from './MovieComment.vue';

export default {
  name: 'movie-item',
  components: {
    MovieComment,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>
