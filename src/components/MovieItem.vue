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
          <div class="col-md-8 form-group mb-0">
            <textarea
              class="form-control"
              rows="3"
              placeholder="Did you like this movie?"
              v-model="item.comment"
            ></textarea>
            <div
              :class="[commentWordCount > 0 ? 'text-success' : 'text-danger']"
            >
              {{ commentWordCount }} word{{ commentWordCount !== 1 ? 's' : '' }}
            </div>
            <button
              class="btn btn-primary mt-2"
              :disabled="item.comment.length === 0"
              @click="item.comment = ''"
            >
              Clear comment
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'movie-item',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  computed: {
    commentWordCount() {
      return this.item.comment.split(/\s+/).filter(word => word !== '').length;
    },
  },
};
</script>
