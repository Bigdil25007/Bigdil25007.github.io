<script setup>
import { onMounted, ref, watch } from 'vue';

import Anchor from '@component/utils/Anchor.vue';
import TimelineItem from '@component/utils/TimelineItem.vue';

import yml from '@content/section/parcours.yml';
import { useRoute } from 'vue-router';

const router = useRoute();
const content = ref(yml[router.params.lang]);

watch(() => router.params.lang, (newLang) => {
  content.value = yml[newLang];
});

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function callbackFunc(listItems) {
    for (var i = 0; i < listItems.length; i++) {
      if (!listItems[i].classList.contains("in-view") && isElementInViewport(listItems[i])) 
        listItems[i].classList.add("in-view");
    }
}

onMounted(() => {
    const listItems = document.querySelectorAll(".timeline li");
    window.addEventListener("load", () => callbackFunc(listItems));
    window.addEventListener("resize", () => callbackFunc(listItems));
    window.addEventListener("scroll", () => callbackFunc(listItems));
});
</script>

<template>
  <Anchor :id="content.id"/>
  <section>
    <div class="title">
        <h1>{{ content.title }}</h1>
        <p>{{ content.description }}</p>
    </div>
    <div class="timeline">
      <ul>
        <TimelineItem
          v-for="(item, index) in content.items"
          :key="index"
          v-bind="item"
        />
      </ul>
    </div>
  </section>
</template>

<style scoped>
.title {
    text-align: center;
    margin-bottom: 50px;
}

section {
    padding: 2% 0;
}
</style>