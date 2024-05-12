<script setup>
import { onMounted, useSlots } from 'vue';
import simpleParallax from '@parallax/simpleParallax';

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

const params = {
    scale: 1.15
};

onMounted(() => {
  var image = document.getElementsByClassName('thumbnail');
  new simpleParallax(image, params);
});
</script>

<template>
    <div class="thumbnail">
        <img class="thumbnail" :src="props.src" :alt="props.alt">
        <slot></slot>
    </div>
</template>

<style scoped>
.thumbnail {
  width: 100vw;
  height: 25rem;

  & img {
    object-fit: cover;
    filter: brightness(50%);
  }
}

</style>