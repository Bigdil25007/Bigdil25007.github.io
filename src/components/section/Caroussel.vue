<script setup>
import { onMounted } from 'vue';
import Slide from "@component/utils/Slide.vue";
import Anchor from '@component/utils/Anchor.vue';

const { content } = defineProps({
  content: {
    type: Object,
    required: true
  }
});

const slides = content.slides;
const link = content.link;


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
    <h2>{{ content.title }}</h2>
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
    <router-link :to="link.path">{{ link.text }}</router-link>
  </section>
</template>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  align-items: center;
}

h2 {
  text-transform: uppercase;
  text-align: center;
  margin: 3% 0;
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
  margin-top: 1rem;
}

.carousel-indicators > button {
  background-color: black;
  height:0.5rem;

  &:hover {
    background-color: rgb(110, 109, 109);
  }
}

button span {
  color: black;
}

/* Lien page projet */
a {
  padding-top: 1rem;
  color: black;
  text-decoration: underline;
  font-size: 1.1rem;

  &:hover {
    color: rgb(12, 10, 70);
  }
}
</style>

