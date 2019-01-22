<template>
  <div>Movie #{{ id }}</div>
</template>

<script>
export default {
  name: 'movie-page',
  props: {
    id: {
      type: String,
      required: true,
    },
  },
};
</script>
