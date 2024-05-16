<script setup>
const props = defineProps({
    src: {
        type: String,
        required: true
    },
    alt: {
        type: String,
        default: ''
    },
    height: {
        type: String,
        default: '25rem'
    }
});
</script>

<template>
    <div class="banner" :style="{ height: props.height }">
        <img :src="props.src" :alt="props.alt">
        <div class="slot-wrapper">
          <slot></slot>
        </div>
    </div>
</template>

<style scoped>
.banner {
  position: relative;
  width: 100vw;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(60%);
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