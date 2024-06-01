<script setup>
const props = defineProps({
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
      default: '',
  },
  description: {
      type: String,
      default: '',
  }
});
</script>

<template>
  <div class="card">
    <router-link :to="link">
      <img :src="img" :alt="imgAlt">
    </router-link>
    <div class="overlay">
      <h5>{{ title }}</h5>
      <p>{{ description }}</p>
    </div>       
  </div>
</template>

<style scoped>
.card {
    position: relative;
    width: 25rem;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    background-color: #fff;
    box-shadow: 0 6px 15px .5px black;
}

img {
    width: 100%;
    display: block;
    height: auto;
}

.overlay {
    position: absolute;
    bottom: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.7);
    color: #fff;
    padding: 10px;
    text-align: center;
    transition: transform 0.3s ease-in-out;
    transform: translateY(100%);
}

.card:hover .overlay {
    transform: translateY(0);
}

.card p {
    margin: 5px 0;
}
</style>