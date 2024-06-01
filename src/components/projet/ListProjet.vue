<script setup>
import { ref, watch } from 'vue';
import ProjectCard from '@component/utils/ProjectCard.vue';
import yml from '@content/projets.yml';

const props = defineProps({
    lang: {
        type: String,
        required: true
    }
});

const content = ref(yml[props.lang]);

const NB_COLUMNS = 3;
const columns = ref(Array.from({ length: NB_COLUMNS }, () => []));

const distributeItems = () =>{
    columns.value = Array.from({ length: NB_COLUMNS }, () => []);
    content.value.forEach((item, index) => {
        columns.value[index % NB_COLUMNS].push(item);
    });
}

//Initial distribution
distributeItems();

watch(() => props.lang, (newLang) => {
  content.value = yml[newLang];
  distributeItems();
});
</script>

<template>
  <div class="listProject">
    <div v-for="(column, index) in columns" :key="index" class="column">
      <ProjectCard v-for="(project, projectIndex) in column" :key="projectIndex" v-bind="project"/>
    </div>
  </div>
</template>

<style scoped>
.listProject {
    margin-top: 10rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: start;
    gap: 20px;
    flex-wrap: wrap;
}

.column {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
}
</style>
