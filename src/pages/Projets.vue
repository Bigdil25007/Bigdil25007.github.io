<script setup>
import { defineAsyncComponent } from "vue";
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

if (props.id) {
  ProjetDetail = defineAsyncComponent(() => import("@component/projet/ProjetDetail.vue"));
  Banner = defineAsyncComponent(() => import("@component/utils/Banner.vue"));
  Caroussel = defineAsyncComponent(() => import("@component/section/Caroussel.vue"));
} else {
  ListProjet = defineAsyncComponent(() => import("@component/projet/ListProjet.vue"));
}
</script>

<template>
    <Header noeffect/>
    <ListProjet v-if="ListProjet"/>
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