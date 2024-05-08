<script setup>
import Header from "@component/Header.vue";
import Accueil from "@component/Accueil.vue";
import Caroussel from "@component/caroussel/Caroussel.vue";
</script>

<template>
  <Header />
  <Accueil />
  <div class="separator"></div>
  <Caroussel />
</template>

<style scoped>
.separator {
  height: 5rem;
  background-color: #1c385e;
}
</style>
