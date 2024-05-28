<script setup>
import { onMounted, ref, watch } from 'vue';

import Slide from "@component/utils/Slide.vue";
import Anchor from '@component/utils/Anchor.vue';

import yml from '@content/section/caroussel.yml';
import yml_projet from '@content/projets.yml';
import { useRoute } from 'vue-router';

const router = useRoute();

const content = ref(yml[router.params.lang]);
const link = ref(content.value.link);

const slides = ref(yml_projet[router.params.lang]);

watch(() => router.params.lang, (newLang) => {
  content.value = yml[newLang];
  slides.value = yml_projet[newLang];
  link.value = content.value.link;
});


onMounted(() => {
  let script = document.createElement('script');
  script.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js";
  script.crossOrigin = "anonymous";
  document.body.appendChild(script);

  script = document.createElement('script');
  script.src = "https://code.jquery.com/jquery-3.6.0.min.js";
  document.body.appendChild(script);
});
</script>

<template>
  <Anchor :id="content.id"/>
  <section>
    <h1 style="margin: 3% 0">{{ content.title }}</h1>
    <div id="caroussel" class="carousel slide">
      <div class="carousel-indicators">
        <button
          v-for="(slide, index) in slides"
          :key="index"
          data-bs-target="#caroussel"
          :data-bs-slide-to="index"
          :class="{ active: index === 0 }"
        ></button>
      </div>
      <div class="carousel-inner">
        <Slide 
          v-for="(slide, index) in slides"
          :key="index"
          v-bind="slide"
          :isActive="index === 0"
        />
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#caroussel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon"></span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#caroussel" data-bs-slide="next">
        <span class="carousel-control-next-icon"></span>
      </button>
    </div>
    <router-link :to="link.path" class="textLink">{{ link.text }}</router-link>
  </section>
</template>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#caroussel {
  width: 75%;
  height: 50%;
}

/* Boutons défilement */
#caroussel > button {
  top: 40%;
  height: 20%;
  width: 10%;
  background-color: black;
  border-radius: 100px;
}

/* Boutons sélection */
.carousel-indicators {
  margin-bottom: 0.5rem;
}

.carousel-indicators > button {
  background-color: rgb(0, 0, 0);
  height:0.4rem;

  &:hover {
    background-color: rgb(110, 109, 109);
  }

  &.active {
    background-color: rgb(215, 211, 211);
  }
}

/* Lien page projet */
a {
  padding-top: 1rem;
  font-size: 1.1rem;
}
</style>

