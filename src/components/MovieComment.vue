<template>
  <div class="col-md-8 form-group mb-0">
    <template v-if="isEditing">
      <textarea
        class="form-control"
        rows="3"
        placeholder="Did you like this movie?"
        v-model="comment"
      ></textarea>
      <div :class="[commentWordCount > 0 ? 'text-success' : 'text-danger']">
        {{ commentWordCount }} word{{ commentWordCount !== 1 ? 's' : '' }}
      </div>
    </template>
    <div v-else v-html="formattedComment" />
    <button class="btn btn-primary mt-2" @click="editOrSave">
      {{ isEditing ? 'Save comment' : 'Edit comment' }}
    </button>
    <button
      class="btn btn-outline-danger ml-2 mt-2"
      v-if="isEditing"
      @click="cancel"
    >
      Cancel editing
    </button>
  </div>
</template>

<script>
export default {
  name: 'movie-comment',
  data() {
    return {
      comment: this.value,
      isEditing: false,
    };
  },
  props: {
    value: {
      type: String,
      required: true,
    },
  },
  computed: {
    commentWordCount() {
      return this.comment.split(/\s+/).filter(word => word !== '').length;
    },
    formattedComment() {
      if (!this.commentWordCount) {
        return 'No comment yet.';
      }
      return `Your comment: <b>${this.comment}</b>`;
    },
  },
  methods: {
    editOrSave() {
      if (this.isEditing) {
        this.$emit('input', this.comment); // update the v-model value in parent
      }
      this.isEditing = !this.isEditing;
    },
    cancel() {
      this.comment = this.value;
      this.isEditing = false;
    },
  },
  watch: {
    value(newValue) {
      this.comment = newValue;
    },
  },
};
</script>
