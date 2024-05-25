<script setup>
import Header from "@component/Header.vue";
import Footer from "@component/Footer.vue";
import Accueil from "@component/section/Accueil.vue";
import Profil from "@component/section/Profil.vue";
import Parcours from "@component/section/Parcours.vue";
import Competences from "@component/section/Competences.vue";
import Caroussel from "@component/section/Caroussel.vue";
import Banner from "@component/utils/Banner.vue";

import yml from '@content/pages/main_page.yml';

import { getContent } from '/src/utils.js';
import { useRoute } from 'vue-router';

const content = getContent(yml, useRoute().params.lang);
const banner0 = content.banners[0];
const banner1 = content.banners[1];
</script>

<template>
  <Header />
  <Accueil />
  <Profil />
  <Banner :src="banner0.src">
    <component v-for="(item, index) in banner0.html" :is="item.type" :key="index">
      {{ item.content }}
    </component>
  </Banner>
  <Parcours />
  <Banner :src="banner1.src" />
  <Competences />
  <Caroussel />
  <Footer />
</template>

<style scoped>
</style>