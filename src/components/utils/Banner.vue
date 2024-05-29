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
        <div class="img-wrapper">
            <img :src="props.src" :alt="props.alt" :style="{ height: props.height }">
        </div>
        <div class="slot-wrapper">
          <slot></slot>
        </div>
    </div>
</template>

<style scoped>
.banner {
  position: relative;
  width: 100vw;

  & .img-wrapper::after {
    content: "";
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(31, 31, 90, 0.219); /* blue overlay */
    filter: blur(8px);
  }

  & img {
    width: 100%;
    object-fit: cover;
    filter: brightness(60%);
  }
}

.slot-wrapper {
  position: absolute;
  top: 50%;
  left: 50%;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  transform: translate(-50%, -50%);
  color: white;
  
  & * {
    text-transform: inherit;
    padding: 2%;
  }
}

p {
  font-size: 1rem;
}

h1, h2 {
  font-size: 1.5rem;
}

</style>