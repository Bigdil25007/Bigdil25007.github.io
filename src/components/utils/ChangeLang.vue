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
    <div class="link" v-for="lang in languages" :key="lang.lang">
      <router-link :to="getPath(lang.path)">
        <img :src="lang.img" />
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.languages {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 1.5rem;
    gap: 10rem;
}

.link {
    width: 6%;
    height: auto;
}

img {
    width: 100%;
    height: auto;
    object-fit: cover;
    margin: 0 0.5rem;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        transform: scale(1.1);
        opacity: 0.8;
    }
}

@media (max-width: 900px) {
    .link {
        width: 10%;
    }
}
</style>