<script setup>
import { ref } from 'vue';
import Header from "@component/Header.vue";
import Footer from "@component/Footer.vue";
import ProjetDetail from "@component/projet/ProjetDetail.vue";
import ListProjet from "@component/projet/ListProjet.vue";
import Caroussel from "@component/section/Caroussel.vue";

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
    <div class="space" />
    <!--id present-->
    <ProjetDetail v-if="props.id" :id="props.id" :lang="props.lang"/>
    <!--id absent-->
    <ListProjet v-else/>
    <Caroussel/>
    <Footer disableContact/>
</template>

<style scoped>
.space {
    height: 15rem;
}
</style>