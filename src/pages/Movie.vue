<template>
  <loading-indicator v-if="isLoading" message="Loading movie..." />
  <form v-else-if="movie" @submit.prevent="save">
    <div class="row justify-content-center">
      <div class="col" style="max-width: 800px;">
        <h2 class="mt-4">Edit movie</h2>
        <div class="row">
          <div class="col-md-8">
            <div class="form-group">
              <label for="title">Title</label>
              <input
                v-model="movie.title"
                class="form-control"
                id="title"
                placeholder="Enter title"
              />
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label for="year">Year</label>
              <input
                v-model="movie.year"
                class="form-control"
                id="year"
                placeholder="Enter year"
              />
            </div>
          </div>
        </div>
        <div class="form-group">
          <label for="plot">Plot</label>
          <textarea
            v-model="movie.plot"
            class="form-control"
            id="plot"
            placeholder="Enter plot"
            rows="5"
          />
        </div>
        <button class="btn btn-primary" :disabled="isSaving">
          {{ isSaving ? 'Saving...' : 'Save' }}
        </button>
        <button
          type="button"
          class="btn btn-outline-danger ml-2"
          @click="cancel"
        >
          Cancel
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import { getMovie, saveMovie } from '@/api-rest';
import LoadingIndicator from '@/components/LoadingIndicator.vue';

export default {
  name: 'movie-page',
  components: {
    LoadingIndicator,
  },
  data() {
    return {
      movie: null,
      isLoading: false,
      isSaving: false,
    };
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  created() {
    this.isLoading = true;
    getMovie(parseInt(this.id)).then(movie => {
      this.movie = movie;
      this.isLoading = false;
    });
  },
  methods: {
    cancel() {
      this.$router.push({ name: 'home' });
    },
    save() {
      this.isSaving = true;
      saveMovie(this.movie).then(() => this.$router.push({ name: 'home' }));
    },
  },
};
</script>
