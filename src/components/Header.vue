<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isOpaque = ref(false);

const handleScroll = () => {
  const scrollPosition = window.scrollY;
  const threshold = 200; // Modifier cette valeur pour ajuster le moment de transition

  isOpaque.value = scrollPosition > threshold;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <header :class="{ opaque: isOpaque }">
    <a
      id="ButtonSideMenu"
      href="index.php#home"
      class="material-symbols-outlined"
    >
      home
    </a>
    <ul>
      <li><a href="index.php">projets</a></li>
      <li><a href="index.php#">compétences</a></li>
      <li><a href="index.php#">parcours</a></li>
      <li><a href="index.php#home">à propos de moi</a></li>
    </ul>
  </header>
</template>

<style scoped>
header {
  position: fixed;
  display: flex;

  top: 0;
  left: 0;
  z-index: 1;

  width: 100%;
  height: 60px;
  justify-content: space-between;
  align-items: center;
  padding: 0 1em;
  background-color: transparent;
  transition: background-color 0.3s ease-in-out;

  &>ul {
    margin-top: 1.6%;
    list-style-type: none;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;
    margin-left: 50vh;

    &>li a {
        color: white;
        padding-right: 1vw;
        text-decoration: none;
        text-transform: uppercase;
        transition: color 0.5s cubic-bezier(.71, .15, .17, .77);
    }

    &>li a::after {
        content: "";
        display: block;
        height: 0.15rem;
        background-color: white;
        margin: auto;
        width: 0;
        background: transparent;
        transition: all 0.5s cubic-bezier(.71, .15, .17, .77);
    }

    &>li a:hover {
        color: #F54337;
    }

    &>li a:hover::after {
        background-color: #F54337;
        width: 95%;
    }
  }
}

header.opaque {
  background-color: rgba(86, 83, 233, 0.9); /* Modifier cette valeur pour ajuster l'opacité */
  backdrop-filter: blur(10px); /* Modifier cette valeur pour ajuster l'effet de glassmorphism */
}
</style>
