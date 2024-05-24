<script setup>
import Header from "@component/Header.vue";
import Accueil from "@component/section/Accueil.vue";
import Profil from "@component/section/Profil.vue";
import Parcours from "@component/section/Parcours.vue";
import Competences from "@component/section/Competences.vue";
import Caroussel from "@component/section/Caroussel.vue";
import Banner from "@component/utils/Banner.vue";

import yml from '@content/fr/main_page.yml'

const banner0 = yml.banners[0];
const banner1 = yml.banners[1];
</script>

<template>
  <Header :content="yml.header"/>
  <Accueil :content="yml.accueil"/>
  <Profil :content="yml.profil"/>
  <Banner :src="banner0.src">
    <component v-for="(item, index) in banner0.html" :is="item.type" :key="index">
      {{ item.content }}
    </component>
  </Banner>
  <Parcours :content="yml.parcours"/>
  <Banner :src="banner1.src" />
  <Competences :content="yml.competences"/>
  <Caroussel :content="yml.caroussel" />
</template>

<style scoped>
</style>