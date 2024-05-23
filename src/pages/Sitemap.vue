<script setup>
import Header from "@component/Header.vue";
import yml from '@content/fr/site_map.yml';

const content = yml.sitemap;
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