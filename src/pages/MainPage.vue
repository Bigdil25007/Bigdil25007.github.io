<script setup>
import Header from "@component/Header.vue";
import Accueil from "@component/section/Accueil.vue";
import Profil from "@component/section/Profil.vue";
import Parcours from "@component/section/Parcours.vue";
import Competences from "@component/section/Competences.vue";
import Contact from '@component/section/Contact.vue';
import Caroussel from "@component/caroussel/Caroussel.vue";
import Banner from "@component/utils/Banner.vue";

import yml from '@content/fr/main_page.yml'
</script>

<template>
  <Header :content="yml.header"/>
  <Accueil :content="yml.accueil"/>
  <Profil :content="yml.profil"/>
  <Banner src="/background/servor.jpg?url">
    <h1>Actuellement : </h1>
    <p>Développeur logiciel chez OVHcloud (stage)</p>
  </Banner>
  <Parcours :content="yml.parcours"/>
  <Banner src="/background/servor.jpg?url">
  </Banner>
  <Competences />
  <Caroussel />
  <Contact />
</template>

<style scoped>
</style>