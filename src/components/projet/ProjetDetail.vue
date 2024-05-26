<script setup>
import { ref, onMounted, watch } from 'vue';
import { formatBackline } from '/src/utils.js';

const props = defineProps({
    id: {
        type: String,
        required: true
    },
    lang: {
        type: String,
        required: true
    }
});

const loadProject = async () => {
  try {
    const project = await import(`../../content/projet/${props.id}.yml`);
    return project.default[props.lang];
  } catch (error) {
    console.error('Error loading project:', error);
    return null
  }
};

const content = ref(null);

watch(() => props.id, async () => {
  content.value = await loadProject();
});

onMounted(async () => {
  content.value = await loadProject();
});
</script>

<template>
  <div class="projet" v-if="content !== null">
    <div class="header">
      <h1>{{ content.title }}</h1>
      <p>{{ content.description }}</p>
    </div>
    <section v-for="(section, index) in content.sections" :key="index">
      <img :src="section.image" alt="" />
      <div class="wrapper">
        <h1>{{ section.subtitle }}</h1>
        <p v-html="formatBackline(section.paragraph)"></p>
      </div>
    </section>
  </div>
</template>

<style scoped>

</style>