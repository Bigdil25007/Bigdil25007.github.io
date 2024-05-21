<script setup>
const props = defineProps({
    id: {
        type: String,
        required: true
    }
});
</script>

<template>
    <div>
        <h1>Projet Detail</h1>
        <p>Id: {{ id }}</p>
    </div>
</template>

<style scoped>
/* Styles spécifiques au composant ProjetDetail */
</style>