<script setup>
import { watch, ref } from 'vue';

import Header from "@component/Header.vue";
import Footer from "@component/Footer.vue";
import Accueil from "@component/section/Accueil.vue";
import Profil from "@component/section/Profil.vue";
import Parcours from "@component/section/Parcours.vue";
import Competences from "@component/section/Competences.vue";
import Caroussel from "@component/section/Caroussel.vue";
import Banner from "@component/utils/Banner.vue";

import yml from '@content/pages/main_page.yml';
import { useRoute } from 'vue-router';

const router = useRoute();
const content = ref(yml[router.params.lang]);

const banner0 = ref(content.value.banners[0]);
const banner1 = ref(content.value.banners[1]);

watch(() => router.params.lang, (newLang) => {
  content.value = yml[newLang];
  banner0.value = content.value.banners[0];
  banner1.value = content.value.banners[1];
});
</script>

<template>
  <Header />
  <Accueil />
  <Profil />
  <Banner :src="banner0.src" :height="banner0.height">
    <component v-for="(item, index) in banner0.html" :is="item.type" :key="index">
      {{ item.content }}
    </component>
  </Banner>
  <Parcours />
  <Banner :src="banner1.src" :height="banner1.height"/>
  <Competences />
  <Caroussel />
  <Footer :path="router.path"/>
</template>

<style scoped>
</style>