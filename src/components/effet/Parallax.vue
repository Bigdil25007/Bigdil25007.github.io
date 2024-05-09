<script setup>
import { onMounted } from 'vue';
import simpleParallax from '../../parallax-js/simpleParallax';

const props = defineProps({
    src: {
        type: String,
        required: true
    },
    alt: {
        type: String,
        default: ''
    }
});

onMounted(() => {
  var image = document.getElementsByClassName('thumbnail');
  let parallax = new simpleParallax(image);
  parallax.settings({
    scale: 1.5,
  });
});
</script>

<template>
    <img class="thumbnail" :src="props.src" :alt="props.alt">
</template>

<style scoped>
.thumbnail {
  width: 100vw;
  height: 25rem;
  object-fit: cover;
}
</style>