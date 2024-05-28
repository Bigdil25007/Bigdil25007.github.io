<script setup>
const props = defineProps({
  isActive: {
    type: Boolean,
    default: false
  },
  img: {
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
  description: {
    type: String,
    default: ''
  }
});
</script>

<template>
  <div :class="['carousel-item', { active: isActive }]">
    <div class="img-container">
      <router-link :to="link">
        <img :src="img" :alt="imgAlt" class="d-block w-100">
      </router-link>
      <span class="overlay-text">En savoir plus</span>
    </div>
    <div class="carousel-caption d-md-block">
      <h5>{{ title }}</h5>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<style scoped>
.img-container {
  display: flex;
  justify-content: center;
  transition: all 0.3s ease-in-out;

  :hover {
      background-color: black;
  }
}

img {
  object-fit: fill;
  width: 1000px;
  height: 445px;
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

.carousel-caption {
  bottom: 0;
  background-color: #323131;
  text-align: center;
  padding: 1rem;
  border-radius: 2rem;

  & h5 {
    font-weight: bold;
    color: #EF3724;
  }

  & p {
    color: white;
  }
}

</style>