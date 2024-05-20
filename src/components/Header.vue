<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
    noeffect: {
        type: Boolean,
        default: false
    }
});


const isOpaque = ref(props.noeffect);
const currentSection = ref('');

let sections = {};
const threshold = 200;

const detectCurrentSection = (scrollPosition) => {
  const sectionNames = Object.keys(sections);
  return sectionNames.find((section, i) => {
    const currentSectionStart = sections[section];
    const nextSectionStart = sections[sectionNames[i + 1]] || Infinity;
    return scrollPosition >= currentSectionStart && scrollPosition < nextSectionStart;
  }) || '';
}

const handleScroll = () => {
  const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
  
  //Passage du header en opaque
  isOpaque.value = scrollPosition > threshold;

  //scrollspy
  currentSection.value = detectCurrentSection(scrollPosition);
}

const setSections = () => {
  return document.querySelectorAll('.anchor').forEach((section) => {
    sections[section.id] = section.offsetTop;
  });
}

const linkClasses = (section) => {
  return currentSection.value === section ? 'current' : '';
};

onMounted(() => {
  //On désactive l'effet de scroll si la props noeffect est à true
  if (props.noeffect) return;

  setSections();
  window.addEventListener('scroll', handleScroll)
})
</script>

<template>
  <header :class="{ opaque: isOpaque }">
    <a id="boutonAccueil" href="/" title="Bilal Oulahal">Bilal Oulahal</a>
    <ul class="nav">
      <li><a :class="linkClasses('contact')" href="/#contact">contacts</a></li>
      <li><a :class="linkClasses('projets')" href="/#projets">projets</a></li>
      <li><a :class="linkClasses('competences')" href="/#competences">compétences</a></li>
      <li><a :class="linkClasses('parcours')" href="/#parcours">parcours</a></li>
      <li><a :class="linkClasses('about-me')" href="/#about-me">à propos de moi</a></li>
    </ul>
  </header>
</template>

<style scoped>
header.opaque {
  background-color: rgba(85, 83, 233, 0.604); /* Modifier cette valeur pour ajuster l'opacité */
  backdrop-filter: blur(1rem); /* Modifier cette valeur pour ajuster l'effet de glassmorphism */
  height: 5rem;
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
  height: 13%;
  background-color: transparent;
  transition: all 0.4s cubic-bezier(.71, .15, .17, .77);

  #boutonAccueil {
    flex: 0 1 33%;
    margin-left: 5%;
    font-size: 1.75rem;
  }

  a {
    text-transform: uppercase;
  }
}

.nav {
  margin-bottom: 1%;
  margin-left: 20%;
  display: flex;
  flex: 0 1 80%;
  flex-flow: row-reverse wrap;
  justify-content:space-around;
  margin-top: 1.6%;

  &>li a {
      font-size: 1.2rem;
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
</style>