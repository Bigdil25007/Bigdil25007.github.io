<script setup>
import Header from "@component/Header.vue";
import Footer from "@component/Footer.vue";
import Accueil from "@component/section/Accueil.vue";
import Profil from "@component/section/Profil.vue";
import Caroussel from "@component/caroussel/Caroussel.vue";
import Parallax from "@component/effet/Parallax.vue";
</script>

<template>
  <Header />
  <Accueil />
  <Profil />
  <Parallax src="/background/test.jpg?url"/>
  <Caroussel />
  <Footer />
</template>

<style scoped>
</style>
