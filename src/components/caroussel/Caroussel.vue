<script setup>
import Slide from "@component/caroussel/Slide.vue";

const slides = [
  {
    isActive: true,
    imgSrc: "/projets/0/resultat.webp?url",
    imgAlt: "...",
    title: "First slide label",
    content: "Some representative placeholder content for the first slide."
  },
  {
    imgSrc: "/projets/1/code.webp?url",
    imgAlt: "...",
    title: "Second slide label",
    content: "Some representative placeholder content for the second slide."
  },
  {
    imgSrc: "/projets/2/ide.webp?url",
    imgAlt: "...",
    title: "Third slide label",
    content: "Some representative placeholder content for the third slide."
  }
];
</script>

<template>
  <section id="projets">
    <h2>Mes projets</h2>
    <div id="caroussel" class="carousel slide">
      <div class="carousel-indicators">
        <button
          v-for="(slide, index) in slides"
          :key="index"
          data-bs-target="#caroussel"
          :data-bs-slide-to="index"
          :class="{ active: slide.isActive }"
        ></button>
      </div>
      <div class="carousel-inner">
        <Slide 
          v-for="(slide, index) in slides"
          :key="index"
          v-bind="slide"
        />
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#caroussel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon"></span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#caroussel" data-bs-slide="next">
        <span class="carousel-control-next-icon"></span>
      </button>
    </div>
  </section>
</template>

<style scoped>
h2 {
  text-transform: uppercase;
  text-align: center;
  margin: 2% 0 2% 0;
}

#caroussel {
  display: flex;
  left: 20%;
  width: 60%;
}

/* Boutons défilement */
#caroussel > button {
  top: 40%;
  height: 15%;
  width: 10%;
  background-color: black;
  border-radius: 50% 50% 50% 50%;
}

/* Boutons sélection */
.carousel-indicators > button {
  background-color: black;
  height:0.25rem;
}
button span {
  color: black;
}
</style>

