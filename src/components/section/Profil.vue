<script setup>
import { ref } from 'vue';

const title = ref("A propos de moi");
const subtitle = ref("Sous-titre");
const photo = ref("chemin/vers/photo.jpg");
const paragraph = ref("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae justo sed nunc fringilla ultrices. Nulla facilisi. Sed nec nunc id nunc lacinia lacinia. Nullam auctor, nunc id aliquet tincidunt, nunc nunc facilisis nunc, vitae lacinia nunc nunc at nunc. Sed id nunc id nunc lacinia lacinia. Nullam auctor, nunc id aliquet tincidunt, nunc nunc facilisis nunc, vitae lacinia nunc nunc at nunc.");
</script>

<template>
    <section id="a-propos">
        <div class="header">
            <h1>{{ title }}</h1>
            <h2>{{ subtitle }}</h2>
            <img :src="photo" alt="Profile Photo">
        </div>
        <p>{{ paragraph }}</p>
    </section>
</template>

<style scoped>
section {
    width: 70%;
    left: 15%;
    margin-top: 5%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-content: center;
    text-align: center;

    &>* {
      margin-bottom: 1rem;  
    }
}
</style>