<template>
  <div class="row">
    <div class="col d-flex align-items-center justify-content-center mt-5">
      <div class="spinner-border mr-2" role="status" aria-hidden="true"></div>
      <strong v-if="message">{{ message }}</strong>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loading',
  props: {
    message: {
      type: String,
      required: false,
    },
  },
};
</script>
