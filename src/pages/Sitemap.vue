<script setup>
import Header from "@component/Header.vue";
import Footer from "@component/Footer.vue";
import yml from '@content/pages/site_map.yml';

import { getContent } from '/src/utils.js';
import { useRoute } from 'vue-router';

const content = getContent(yml, useRoute().params.lang);
const links = content.links;
</script>

<template>
  <Header noeffect/>
  <section class="sitemap">
    <div>
      <h1>{{ content.title }}</h1>
      <ul>
        <li v-for="link in links" :key="link.path">
          <router-link :to="link.path">{{ link.name }}</router-link>
        </li>
      </ul>
    </div>
  </section>
  <Footer />
</template>

<style scoped>
.sitemap {
  margin: 14rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1 {
  font-size: 3rem;
  color: #333;
  font-weight: 200;
  color: rgb(3, 34, 76);
  margin-bottom: 3rem;
}

li {
  list-style: circle;
  margin: 1rem;

  a {
    font-size: 1.2rem;
    color: black;
    transition: all 0.25s cubic-bezier(.71, .15, .17, .77);

    &:hover {
      color: #696868;
    }
  }
}

</style>