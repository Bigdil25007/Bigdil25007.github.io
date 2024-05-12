<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  particlesJS.load('particles-js', 'src/particle-js/particles.json');
});
</script>

<template>
    <section>
        <div id="particles-js"></div>
        <div class="content">
            <h1>à la recherche d'un développeur web backend ? </h1>
            <h2>Ça tombe bien je suis passionné par ce domaine ! Découvrez juste en dessous mon profil</h2>
            <button><a href="#a-propos">Qui-suis je ?</a></button>
        </div>
    </section>
</template>

<style scoped>
section {
    height: 100vh;
    position: relative;
}

#particles-js {
    width: 100vw;
    height: auto;
    overflow: hidden;
    background-color: #212529;
    background-size: cover;
    background-position: 50% 50%;
}

.content {
    position: absolute;
    top: 40%;
    width: 50%;
    left: 25%;
    right: auto;
    text-align: center;
    color: white;
    pointer-events: none;
    
    h1 {
        text-transform: uppercase;
        font-weight: bold;
        font-size: 2.5rem;
        margin-bottom: 1.5rem;
    }

    h2 {
        color: rgb(203, 203, 203);
        font-size: 1.5rem;
        margin-bottom: 1.5rem;
    }
}

button {
    pointer-events: all;
    padding: 0.5rem 1rem;
    background-color: #1c385e;
    transition: all 0.3s ease-in-out;

    &:hover {
        cursor: pointer;
        background-color: #050a11;
    }

    a {
        font-size: 1.5rem;
        text-transform: uppercase;
        color: white;
        text-decoration: none;
    }
}
</style>