<script setup>
import Anchor from '@component/utils/Anchor.vue';
import Timeline from '@component/timeline/Timeline.vue';

const props = defineProps({
  content: {
    type: Object,
    required: true
  }
});
</script>

<template>
    <Anchor id="parcours"/>
    <section>
        <div class="title">
            <h1>{{ content.title }}</h1>
            <p>{{ content.description }}</p>
        </div>
        <Timeline :items="content.items"/>
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