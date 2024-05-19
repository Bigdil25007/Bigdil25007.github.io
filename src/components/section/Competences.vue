<script setup>
import Anchor from '@component/utils/Anchor.vue';
import CV from "@component/utils/CV.vue";
import ProgressBar from "@component/utils/ProgressBar.vue";

const competences = {
    backend: {
        Java: 90,
        Python: 90,
    },
    frontend: {
        Vue: 80,
        HTML: 85,
        CSS: 80,
    },
    applications: {
        Git: 95,
        Docker: 85,
    },
};

const colors = ['rgb(25, 135, 84)', 'rgb(13, 202, 240)', 'rgb(255, 193, 7)'];
</script>

<template>
    <Anchor id="competences"/>
    <section>
        <h1>Compétences</h1>
        <h2>Voici les compétences que j'ai acquises au cours de mes études et de mes expériences professionnelles</h2>
        <div class="content">
          <div class="list">
            <div v-for="(category, categoryName, index) in competences" :key="categoryName" class="category">
              <h3 :style="{textTransform: 'capitalize' }">{{ categoryName }}</h3>
              <ProgressBar v-for="(value, skill) in category" :key="skill" :title="skill" :fill="value" :color="colors[index]"/>
            </div>
          </div>
          <CV />
        </div>
    </section>
</template>

<style scoped>
section {
    width: 75%;
    margin: 2% auto;
    position: relative;
    display: flex;
    flex-direction: column;
    text-align: center;
}

.content {
    margin-top: 5%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.list {
    display: flex;
    flex-direction: column;
    width: 40%;
}

.category {
    margin: 1rem 0;
}

@media (max-width: 600px) {
  .content {
    flex-direction: column;
  }

  .list {
    width: 100%;
  }
}
</style>