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
      <button class="carousel-control-prev" type="button" data-bs-target="#caroussel" data-bs-slide="prev"></button>
      <button class="carousel-control-next" type="button" data-bs-target="#caroussel" data-bs-slide="next"> </button>
  </div>
</template>

<style scoped>
button span {
  color: black;
}
</style>

