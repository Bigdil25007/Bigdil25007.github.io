<script setup>
import Accueil from "@component/section/Accueil.vue";
import Profil from "@component/section/Profil.vue";
import Parcours from "@component/section/Parcours.vue";
import Competences from "@component/section/Competences.vue";
import Contact from '@component/section/Contact.vue';
import Caroussel from "@component/caroussel/Caroussel.vue";
import Banner from "@component/utils/Banner.vue";
</script>

<template>
  <Accueil />
  <Profil />
  <Banner src="/background/servor.jpg?url">
    <h1>Actuellement : </h1>
    <p>Développeur logiciel chez OVHcloud (stage)</p>
  </Banner>
  <Parcours />
  <Banner src="/background/servor.jpg?url">
  </Banner>
  <Competences />
  <Caroussel />
  <Contact />
</template>

<style scoped>
</style>