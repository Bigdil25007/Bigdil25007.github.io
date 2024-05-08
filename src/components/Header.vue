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
    <a id="boutonAccueil" href="/">
      <img src="/icons/home.svg?url" alt="Home button">
    </a>
    <ul class="nav">
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
  align-items: center;

  top: 0;
  left: 0;
  z-index: 1;

  width: 100%;
  height: 10%;
  background-color: transparent;
  transition: all 0.4s cubic-bezier(.71, .15, .17, .77);

  #boutonAccueil {
    flex: 0 1 33%;
    margin-left: 2.5%;

    & img {
      width: 3rem;
      height: 3rem;
    }
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
        color: white;
        text-decoration: none;
        text-transform: uppercase;

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

        &:hover::after {
            background-color: #F54337;
            width: 95%;
        }
    }
  }
}

header.opaque {
  background-color: rgba(86, 83, 233, 0.9); /* Modifier cette valeur pour ajuster l'opacité */
  backdrop-filter: blur(10px); /* Modifier cette valeur pour ajuster l'effet de glassmorphism */
  height: 7%;
}
</style>
