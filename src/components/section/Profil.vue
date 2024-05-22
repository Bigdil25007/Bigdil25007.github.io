<script setup>
import Anchor from '@component/utils/Anchor.vue';

const props = defineProps({
  content: {
    type: Object,
    required: true
  }
});
</script>

<template>
    <Anchor :id="content.id"/>
    <section class="profil">
        <h1>{{ content.title }}</h1>
        <div class="content">
            <img :src="content.img.src" :alt="content.img.alt">
            <div class="text">
                <p>{{ content.paragraph }}</p>
            </div>
        </div>
    </section>
</template>

<style scoped>
section {
    width: 70%;
    margin: 2% auto;
    position: relative;
    display: flex;
    flex-direction: column;
    text-align: center;
}

img {
    height: 20rem;
    width: auto;
    margin-right: 15%;
}

.content {
    width: 70%;
    margin: 5% auto;
    display: flex;
    flex-direction: row;
    text-align: left;
    align-items: center;

    &>* {
        margin-bottom: 1.5rem;
        text-align: justify;
    }
}

@media (max-width: 1200px) {
  .content {
    flex-direction: column;
  }

  img {
    margin-right: 0;
  }
}
</style>