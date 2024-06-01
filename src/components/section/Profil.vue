<script setup>
import Anchor from '@component/utils/Anchor.vue';
import { formatHTML } from '/src/utils.js';
import { useRoute } from 'vue-router';
import { ref, watch } from 'vue';

import yml from '@content/section/profil.yml';

const router = useRoute();
const content = ref(yml[router.params.lang]);

watch(() => router.params.lang, (newLang) => {
  content.value = yml[newLang];
});
</script>

<template>
  <Anchor :id="content.id"/>
  <section class="profil">
    <h1>{{ content.title }}</h1>
    <div class="content">
      <div class="imgwrapper">
        <img :src="content.img.src" :alt="content.img.alt">
      </div>
      <div class="text">
          <p v-html="formatHTML(content.paragraph)"></p>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  width: 60%;
  margin: 2% auto;
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
}


.imgwrapper {
  position: relative;
  height: 20rem;
  width: auto;
  margin-right: 15%;

  img {
    height: 100%;
    width: auto;
  }

  /* Cadre avec offset */
  &::before {
    content: "";
    position: absolute;
    top: 20px; 
    right: -20px; 
    bottom: -20px; 
    left: 20px; 
    border: 5px solid #b31616; 
    z-index: -1;
 }
}

.content {
  margin: 5% auto;
  display: flex;
  flex-direction: row;
  text-align: left;
  align-items: center;

  & > * {
      margin-bottom: 1.5rem;
      text-align: justify;
  }
}

@media (max-width: 1200px) {
  .content {
    flex-direction: column;
  }

  .imgwrapper {
    margin-right: 0;
    margin-bottom: 10% !important;
  }
}
</style>