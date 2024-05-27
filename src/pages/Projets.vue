<script setup>
import Header from "@component/Header.vue";
import Footer from "@component/Footer.vue";
import ProjetDetail from "@component/projet/ProjetDetail.vue";
import ListProjet from "@component/projet/ListProjet.vue";
import Caroussel from "@component/section/Caroussel.vue";
import Banner from "@component/utils/Banner.vue";

const props = defineProps({
    id: String,
    lang: {
        type: String,
        required: true
    }
});
</script>

<template>
    <Header noeffect/>
    <ProjetDetail v-if="props.id" :id="props.id" :lang="props.lang"/>
    <ListProjet v-else/>
    <Banner src="/background/computer.jpg?url"/>
    <Caroussel/>
    <Footer disableContact/>
</template>

<style scoped>
.space {
    height: 15rem;
}
</style>