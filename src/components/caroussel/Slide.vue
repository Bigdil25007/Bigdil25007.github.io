<script setup>
const props = defineProps({
  isActive: {
    type: Boolean,
    default: false
  },
  imgSrc: {
    type: String,
    required: true
  },
  link: {
    type: String,
    default: '/'
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
    <div class="img-container">
      <a :href="link">
        <img :src="imgSrc" :alt="imgAlt" class="d-block w-100">
      </a>
      <span class="overlay-text">En savoir plus</span>
    </div>
    <div class="carousel-caption d-md-block">
      <h5>{{ title }}</h5>
      <p>{{ content }}</p>
    </div>
  </div>
</template>

<style scoped>
* {
    color: black;
}

.img-container {
  display: flex;
  justify-content: center;
  position: relative;
  width: 80%;
  left: 10%;
}

img {
  object-fit:scale-down;
  transition: all 0.3s ease-in-out;

  :hover {
      background-color: black;
  }
}


.overlay-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  visibility: hidden;
  transition: all 0.3s ease-in-out;
}

.img-container:hover + .overlay-text {
  visibility: visible;
} 

</style>