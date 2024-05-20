<script setup>
import Header from "@component/Header.vue";
</script>

<template>
  <Header noeffect/>
  <section class="sitemap">
    <div>
      <h1>Plan du site</h1>
      <ul>
        <li>
          <a href="/">Présentation Bilal Oulahal</a>
        </li>
        <li>
          <a href="/projets">Projets</a>
        </li>
        <li>
          <a href="/mentions-legales">Mentions légales</a>
        </li>
        <li>
          <a href="/plan-site">Plan du site</a>
        </li>
      </ul>
    </div>
  </section>
</template>



<style scoped>
.sitemap {
    margin-top: 13rem;
    margin-bottom: 11rem;
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