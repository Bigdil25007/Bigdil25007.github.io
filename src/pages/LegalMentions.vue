<script setup>
import Header from "@component/Header.vue";
import Footer from "@component/Footer.vue";
import yml from '@content/pages/legal_mentions.yml';

import { getContent } from '/src/utils.js';
import { useRoute } from 'vue-router';

const content = getContent(yml, useRoute().params.lang);
const sections = content.sections;
</script>

<template>
  <Header noeffect/>
  <section class="legal-mentions">
    <h1>{{ content.title }}</h1>
    
    <div v-for="(section, index) in sections" :key="index" class="wrapper">
      <h2>{{ section.title }}</h2>
      <p v-html="section.content"></p>
    </div>
  </section>
  <Footer />
</template>

<style scoped>
.legal-mentions {
    margin-top: 13rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.wrapper {
  width: 80%; 
  max-width: 1000px; 
  margin: 0 auto;
  box-sizing: border-box;

  * {
    text-align: justify;
  }
}

h1, h2 {
  color: #333;
  font-weight: 200;
  color: rgb(3, 34, 76);
}

h1 {
  font-size: 3rem;
  margin-bottom: 3rem;
  text-align: center;
}

h2 {
  margin-top: 2rem;
  margin-bottom: 1rem;
}
</style>