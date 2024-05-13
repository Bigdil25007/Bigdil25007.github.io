<script setup>
import { onMounted } from 'vue';
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
    scale: 1.25
};

onMounted(() => {
  var image = document.getElementsByClassName('thumbnail');
  new simpleParallax(image, params);
});
</script>

<template>
    <div class="thumbnail">
        <img class="thumbnail" :src="props.src" :alt="props.alt">
        <div class="slot-wrapper">
          <slot></slot>
        </div>
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

.slot-wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
  
  & * {
    font-size: 1.5rem;
    padding: 2%;
  }
}

</style>