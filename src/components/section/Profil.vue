<script setup>
import { ref } from 'vue';
import Anchor from '@component/utils/Anchor.vue';

const title = ref("A propos de moi");
const subtitle = ref("Sous-titre");
const paragraph = ref("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae justo sed nunc fringilla ultrices. Nulla facilisi. Sed nec nunc id nunc lacinia lacinia. Nullam auctor, nunc id aliquet tincidunt, nunc nunc facilisis nunc, vitae lacinia nunc nunc at nunc. Sed id nunc id nunc lacinia lacinia. Nullam auctor, nunc id aliquet tincidunt, nunc nunc facilisis nunc, vitae lacinia nunc nunc at nunc.");
</script>

<template>
    <Anchor id="about-me"/>
    <section class="profil">
        <h1>{{ title }}</h1>
        <div class="content">
            <img src="/divers/profile.jpg?url" alt="Profile Photo">
            <div class="text">
                <p>{{ paragraph }}</p>
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