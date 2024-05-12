<script setup>
import { ref } from 'vue';
import Anchor from '@component/utils/Anchor.vue';

const title = ref("A propos de moi");
const subtitle = ref("Sous-titre");
const paragraph = ref("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae justo sed nunc fringilla ultrices. Nulla facilisi. Sed nec nunc id nunc lacinia lacinia. Nullam auctor, nunc id aliquet tincidunt, nunc nunc facilisis nunc, vitae lacinia nunc nunc at nunc. Sed id nunc id nunc lacinia lacinia. Nullam auctor, nunc id aliquet tincidunt, nunc nunc facilisis nunc, vitae lacinia nunc nunc at nunc.");
</script>

<template>
    <Anchor id="a-propos"/>
    <section>
        <img src="/divers/profile.jpg?url" alt="Profile Photo">
        <div class="content">
            <h1>{{ title }}</h1>
            <h2>{{ subtitle }}</h2>
            <p>{{ paragraph }}</p>
        </div>
    </section>
</template>

<style scoped>
section {
    width: 70%;
    left: 15%;
    margin: 5% 0;
    position: relative;
    display: flex;
    align-content: center;
    text-align: center;

    & img {
        width: 25%;
        height: fit-content;
        margin-right: 15%;
    }
}

.content {
    width: 70%;
    margin-left: 5%;
    margin-top: 5%;
    display: flex;
    flex-direction: column;
    text-align: left;

    &>* {
        margin-bottom: 1.5rem;
    }
}
</style>