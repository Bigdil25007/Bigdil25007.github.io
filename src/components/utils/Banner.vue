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
        default: '20rem'
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

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(31, 31, 90, 0.219); /* blue overlay */
    filter: blur(8px);
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