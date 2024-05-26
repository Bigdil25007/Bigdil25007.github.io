<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { formatBackline } from '/src/utils.js';

const router = useRoute();
const PATH = "../../content/projet";

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

const content = ref(null);

const loadProject = async (id) => {
  try {
    const project = await import(`${PATH}/${id}.yml`);
    content.value = project.default[props.lang];
  } catch (error) {
    console.error('Error loading project:', error);
  }
};

onMounted(() => {
  loadProject(props.id);
});

watch(() => props.id, (newId) => {
  loadProject(newId);
});
</script>

<template>

</template>

<style scoped>

</style>