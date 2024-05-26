<script setup>
import { ref } from 'vue';

const imgPath = ref("/projets/remindr/dashboard.png?url")
const title = ref("Remindr")
const description = ref("- Application web de gestion de tâches groupées")
</script>

<template>
  <div class="image-frame" :style="{ backgroundImage: `url(${imgPath})` }">
    <div class="info-frame">
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<style scoped>
.image-frame {
  /* Ajustez ces valeurs pour correspondre à la taille de votre image */
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  position: relative;
}

.info-frame {
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Fond semi-transparent noir */
  color: white; /* Texte blanc */
  padding: 1rem;
}
</style>