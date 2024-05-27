<script setup>
import { ref } from 'vue';

const props = defineProps({
  show: Boolean,
  imageSrc: String
});

const emit = defineEmits(['update:show']);

const hideOverlay = () => {
  emit('update:show', false);
};
</script>

<template>
  <div v-if="props.show" class="overlay" @click="hideOverlay">
    <img :src="props.imageSrc" alt="" class="overlay-image" @click.stop>
  </div>
</template>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.625);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.overlay-image {
  max-width: 90%;
  max-height: 90%;
}
</style>