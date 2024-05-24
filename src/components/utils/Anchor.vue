<script setup>
const props = defineProps({
    id: {
        type: String,
        required: true
    },
    height : {
        type: String,
        default: '4rem'
    }
});
</script>

<template>
    <div :id="id" class="anchor" :style="{ height: height }"></div>
</template>