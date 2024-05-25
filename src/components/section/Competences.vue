<script setup>
import Anchor from '@component/utils/Anchor.vue';
import CV from "@component/CV.vue";
import ProgressBar from "@component/utils/ProgressBar.vue";
import yml from '@content/section/competences.yml';

import { getContent } from '/src/utils.js';
import { useRoute } from 'vue-router';

const content = getContent(yml, useRoute().params.lang);
</script>

<template>
  <Anchor :id="content.id"/>
  <section>
    <h1>{{ content.title }}</h1>
    <h2>{{ content.description }}</h2>
    <div class="content">
      <div class="list">
        <div v-for="(category, index) in content.list" :key="index" class="category">
          <h3 :style="{textTransform: 'capitalize' }">{{ Object.keys(category)[0] }}</h3>
          <ProgressBar 
            v-for="(skill, skillIndex) in category[Object.keys(category)[0]]" 
            :key="skillIndex" 
            :title="skill.skill" 
            :fill="skill.value" 
            :color="content.colors[index]"
          />
        </div>
      </div>
      <!-- CV -->
      <CV :content="content.cv"/>
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

@media (max-width: 1150px) {
  .content {
    flex-direction: column;
  }

  .list {
    width: 100%;
  }
}
</style>