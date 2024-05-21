<script setup>
import Anchor from '@component/utils/Anchor.vue';
import yml from '@content/profil.yml'
</script>

<template>
    <Anchor :id="yml.id"/>
    <section class="profil">
        <h1>{{ yml.title }}</h1>
        <div class="content">
            <img :src="yml.img.src" :alt="yml.img.alt">
            <div class="text">
                <p>{{ yml.paragraph }}</p>
            </div>
        </div>
    </section>
</template>

<style scoped>
section {
    width: 70%;
    margin: 2% auto;
    position: relative;
    display: flex;
    flex-direction: column;
    text-align: center;
}

img {
    height: 20rem;
    width: auto;
    margin-right: 15%;
}

.content {
    width: 70%;
    margin: 5% auto;
    display: flex;
    flex-direction: row;
    text-align: left;
    align-items: center;

    &>* {
        margin-bottom: 1.5rem;
        text-align: justify;
    }
}

@media (max-width: 1200px) {
  .content {
    flex-direction: column;
  }

  img {
    margin-right: 0;
  }
}
</style>