<template>
  <div class="col-lg-6 px-2">
    <div class="card mt-4">
      <div class="card-body">
        <router-link
          class="card-link text-dark"
          :to="{ name: 'movie', params: { id: item.id.toString() } }"
        >
          <h5 class="card-title">
            {{ item.title }} <small>({{ item.year }})</small>
          </h5>
        </router-link>
        <h6 class="card-subtitle text-muted">{{ item.genre }}</h6>
        <hr />
        <div class="row">
          <div class="col-sm-4">
            <router-link
              :to="{ name: 'movie', params: { id: item.id.toString() } }"
            >
              <img :src="item.poster" class="img-fluid" alt="Movie poster" />
            </router-link>
          </div>
          <div class="col-sm-8">
            <p>{{ item.plot }}</p>
          </div>
        </div>
        <div class="row mt-4">
          <movie-comment v-model="item.comment" />
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
  watch: {
    item: {
      handler(newValue) {
        this.$emit('change', newValue);
      },
      deep: true,
    },
  },
};
</script>
