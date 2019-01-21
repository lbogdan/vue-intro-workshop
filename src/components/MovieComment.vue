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
    <button class="btn btn-primary mt-2" @click="isEditing = !isEditing">
      {{ isEditing ? 'Save comment' : 'Edit comment' }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'movie-comment',
  data() {
    return {
      comment: '',
      isEditing: false,
    };
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
};
</script>
