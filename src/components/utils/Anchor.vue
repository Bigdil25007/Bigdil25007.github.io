<script setup>
const props = defineProps({
    id: {
        type: String,
        required: true
    }
});
</script>

<template>
    <div :id="id" class="anchor"></div>
</template>

<style scoped>
.anchor {
    height: 4rem;
}
</style>