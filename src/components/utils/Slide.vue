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
  max-height: 30%;
  bottom: 0;
  background-color: #323131;
  text-align: center;
  padding: 1rem;
  border-radius: 2rem;

  & h5 {
    font-weight: bold;
    font-size: 1rem;
    color: #EF3724;
  }

  & p {
    color: white;
    font-size: 0.9rem;
  }
}


@media (max-width: 900px) {
  img {
    object-fit: scale-down;
    width: fit-content;
    height: auto;
  }

  .carousel-caption {
    padding: 0.5rem;

    & h5 {
      font-size: 0.8rem;
    }
  
    & p {
      font-size: 0.5rem;
    }
  }
}
</style>