<script setup>
import { ref } from 'vue';
import Header from "@component/Header.vue";
import Footer from "@component/Footer.vue";
import ProjetDetail from "@component/projet/ProjetDetail.vue";
import ListProjet from "@component/projet/ListProjet.vue";
import Caroussel from "@component/section/Caroussel.vue";


const imgPath = ref("/projets/remindr/dashboard.png?url")
const title = ref("Remindr")
const description = ref("- Application web de gestion de tâches groupées")

const paramsProps = defineProps({
    id: String,
    lang: {
        type: String,
        required: true
    }
});
</script>

<template>
    <Header noeffect/>
    <div></div>
    <!--id present-->
    <ProjetDetail v-if="paramsProps.id" :id="paramsProps.id"/>
    <!--id absent-->
    <ListProjet v-else/>
    <Caroussel/>
    <Footer disableContact/>
</template>

<style scoped>
div {
    height: 15rem;
}
</style>