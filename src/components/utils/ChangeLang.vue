<script setup>
const props = defineProps({
    path: {
        type: String,
        required: true
    },
});

const languages = [
    { lang: 'fr', img: '/lang/fr.jpg?url', path: '/fr' },
    { lang: 'en', img: '/lang/en.jpg?url', path: '/en' }
];

const getPath = (extension) => {
    return extension + props.path.substring(3);
}
</script>

<template>
  <div class="languages">
    <div v-for="lang in languages" :key="lang.lang">
      <router-link :to="getPath(lang.path)">
        <img :src="lang.img" />
      </router-link> 
    </div>
  </div>
</template>

<style>
.languages {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 1rem;
}

img {
    width: 30px;
    height: 30px;
    margin: 0 0.5rem;
    cursor: pointer;

    &:hover {
        transform: scale(1.1);
    }
}

@media (max-width: 400px) {
    .languages {
        flex-direction: column;
    }
}
</style>