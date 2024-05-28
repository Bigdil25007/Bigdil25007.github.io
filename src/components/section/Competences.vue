<script setup>
import Anchor from '@component/utils/Anchor.vue';
import CV from "@component/CV.vue";
import ProgressBar from "@component/utils/ProgressBar.vue";

import yml from '@content/section/competences.yml';
import { useRoute } from 'vue-router';
import { ref, watch } from 'vue';

const router = useRoute();
const content = ref(yml[router.params.lang]);

watch(() => router.params.lang, (newLang) => {
  content.value = yml[newLang];
});
</script>

<template>
  <Anchor :id="content.id"/>
  <section>
    <div class="title">
        <h1>{{ content.title }}</h1>
        <h2>{{ content.description }}</h2>
    </div>
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
.title {
  display: flex;
  flex-direction: column;
  align-items: center;
}

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
    margin-bottom: 1rem;
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