<script setup>
import { defineAsyncComponent, watch } from "vue";
import Header from "@component/Header.vue";
import Footer from "@component/Footer.vue";

const props = defineProps({
    id: String,
    lang: {
        type: String,
        required: true
    }
});

/* Importation dynamique */
let ProjetDetail, ListProjet, Caroussel, Banner;

const update = () => {
    if (props.id) {
        ProjetDetail = defineAsyncComponent(() => import("@component/projet/ProjetDetail.vue"));
        Banner = defineAsyncComponent(() => import("@component/utils/Banner.vue"));
        Caroussel = defineAsyncComponent(() => import("@component/section/Caroussel.vue"));
        ListProjet = null;
    } else {
        ListProjet = defineAsyncComponent(() => import("@component/projet/ListProjet.vue"));
        ProjetDetail = null;
        Banner = null;
        Caroussel = null;
    }
};

// Initial render
update();

watch(() => props.id, () => {
  update();
});
</script>

<template>
    <Header noeffect/>
    <ListProjet v-if="ListProjet" :lang="props.lang"/>
    <ProjetDetail :id="props.id" :lang="props.lang" v-if="ProjetDetail"/>
    <Banner src="/background/computer.jpg?url" v-if="Banner"/>
    <Caroussel v-if="Caroussel"/>
    <Footer disableContact/>
</template>

<style scoped>
.space {
    height: 15rem;
}
</style>