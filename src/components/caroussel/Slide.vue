<script setup>
import { ref } from 'vue';

const props = defineProps({
  isActive: {
    type: Boolean,
    default: false
  },
  imgSrc: {
    type: String,
    required: true
  },
  imgAlt: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  content: {
    type: String,
    default: ''
  }
});
</script>

<template>
  <div :class="['carousel-item', { active: isActive }]">
    <img :src="imgSrc" :alt="imgAlt" class="d-block w-100">
    <div class="carousel-caption d-none d-md-block">
      <h5>{{ title }}</h5>
      <p>{{ content }}</p>
    </div>
  </div>
</template>

<style scoped>
img {
    object-fit:scale-down;
}

* {
    color: black;
}
</style>