<script setup>
import { onMounted } from 'vue';
import TimelineItem from './TimelineItem.vue';

const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
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
      if (isElementInViewport(listItems[i])) listItems[i].classList.add("in-view");
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
    <section class="timeline">
      <ul>
        <TimelineItem
          v-for="(item, index) in items"
          :key="index"
          v-bind="item"
        />
      </ul>
    </section>
</template>