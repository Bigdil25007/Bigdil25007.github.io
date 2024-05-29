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

  & img:hover {
      filter: brightness(0.8);
  }
}

img {
  object-fit: fill;
  width: 900px;
  height: 400px;
  transition: all 0.3s ease-in-out;
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