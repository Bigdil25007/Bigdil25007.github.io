<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  particlesJS.load('particles-js', 'src/particle-js/particles.json', function() {
      console.log('particles.js loaded - callback');
  });
});
</script>

<template>
    <section>
        <div id="particles-js"></div>
        <div class="content">
            <h1>Bilal Oulahal</h1>
            <h2>Développeur Web - Backend</h2>
            <button><a href="/#aboutMe"></a>Qui-suis je ?</button>
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
    width: 40%;
    left: 30%;
    right: auto;
    text-align: center;
    color: white;
    pointer-events: none;
    
    h1 {
        font-size: 4rem;
        margin-bottom: 1.5rem;
    }

    h2 {
        font-size: 2.5rem;
        margin-bottom: 1.5rem;
    }
}

button {
    pointer-events: all;
    color: white;
    text-transform: uppercase;
    padding: 0.5rem 1rem;
    font-size: 1.5rem;
    background-color: #1c385e;
    transition: all 0.3s ease-in-out;

    &:hover {
        cursor: pointer;
        background-color: #050a11;
    }
}
</style>