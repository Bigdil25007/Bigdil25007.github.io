<script setup>
import { ref, onMounted, watch } from 'vue';
import { formatBackline } from '/src/utils.js';
import ImageViewer from '@component/utils/ImageViewer.vue';

let showOverlay = ref(false);
let overlayImageSrc = ref('');
const content = ref(null);

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

const activateViewer = (imageSrc) => {
  overlayImageSrc.value = imageSrc;
  showOverlay.value = true;
};

watch(() => props.id, async () => {
  content.value = await loadProject();
});

onMounted(async () => {
  content.value = await loadProject();
});
</script>

<template>
  <div class="header" v-if="content !== null">
    <h1>{{ content.title }}</h1>
    <p>{{ content.description }}</p>
  </div>

  <div class="projet" v-if="content !== null">
    <section v-for="(section, index) in content.sections" :key="index">
      <div class="wrapper">
        <h1>{{ section.subtitle }}</h1>
        <p v-html="formatBackline(section.paragraph)"></p>
      </div>
      <img :src="section.image" alt="" @click="activateViewer(section.image)"/>
    </section>
    <ImageViewer :show="showOverlay" :image-src="overlayImageSrc" @update:show="showOverlay = $event" />
  </div>
</template>

<style scoped>
.header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin: 8rem 0;
}

.projet {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;

}

.projet > section{
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
}

.projet > section:nth-child(3n) {
  flex-direction: row-reverse;
}

.projet > section:nth-child(3n + 1) {
  flex-direction: row;
}

.projet > section:nth-child(3n + 2) {
  flex-direction: column;
}

img {
  width: 50%;
  height: auto;
  max-height: 400px;
  max-width: 600px;
  object-fit: contain;
  transition: all 0.3s ease-out;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
    filter: brightness(0.85);
  }
}

</style>