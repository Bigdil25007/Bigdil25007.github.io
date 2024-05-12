<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isOpaque = ref(false);
const currentSection = ref('');

const sections = ['projets', 'competences', 'parcours', 'a-propos'];

const detectCurrentSection = () => {
  for (const id of sections) {
    const element = document.getElementById(id);
    if (!element) continue;

    const rect = element.getBoundingClientRect();
    if (rect.top <= 0 && rect.bottom >= 0) return id;
  }

  return ''
}

const handleScroll = () => {
  //Passage du header en opaque
  const scrollPosition = window.scrollY;
  const threshold = 200;
  isOpaque.value = scrollPosition > threshold;

  currentSection.value = detectCurrentSection();
}

const linkClasses = (section) => {
  return currentSection.value === section ? 'current' : '';
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header :class="{ opaque: isOpaque }">
    <a id="boutonAccueil" href="/" title="Bilal Oulahal">Bilal Oulahal</a>
    <ul class="nav">
      <li><a :class="linkClasses('projets')" href="#projets">projets</a></li>
      <li><a :class="linkClasses('competences')" href="#competences">compétences</a></li>
      <li><a :class="linkClasses('parcours')" href="#parcours">parcours</a></li>
      <li><a :class="linkClasses('a-propos')" href="#a-propos">à propos de moi</a></li>
    </ul>
  </header>
</template>

<style scoped>
header.opaque {
  background-color: rgba(86, 83, 233, 0.9); /* Modifier cette valeur pour ajuster l'opacité */
  backdrop-filter: blur(10px); /* Modifier cette valeur pour ajuster l'effet de glassmorphism */
  height: 8%;
}

.current {
  color: #F54337;
}

header {
  position: fixed;
  display: flex;
  align-items: center;

  top: 0;
  left: 0;
  z-index: 10;

  width: 100%;
  height: 12%;
  background-color: transparent;
  transition: all 0.4s cubic-bezier(.71, .15, .17, .77);

  #boutonAccueil {
    flex: 0 1 33%;
    margin-left: 5%;
    font-size: 1.75rem;
  }

  .nav {
    margin-bottom: 1%;
    margin-left: 25%;
    display: flex;
    flex: 0 1 40%;
    flex-flow: row-reverse wrap;
    justify-content:space-around;
    margin-top: 1.6%;
    list-style-type: none;

    &>li a {
        transition: color 0.4s cubic-bezier(.71, .15, .17, .77);

        &::after {
            content: "";
            display: block;
            height: 0.15rem;
            background-color: white;
            margin: auto;
            width: 0;
            background: transparent;
            transition: all 0.4s cubic-bezier(.71, .15, .17, .77);
        }

        &:hover {
            color: #F54337;

            &::after {
                background-color: #F54337;
                width: 95%;
            }
        }
    }
  }
}

a {
    text-transform: uppercase;
    color: white;
    text-decoration: none;
}
</style>
