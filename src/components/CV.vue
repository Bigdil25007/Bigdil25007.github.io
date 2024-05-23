<script setup>
const { content } = defineProps({
  content: {
    type: Object,
    required: true
  }
});
</script>

<template>
    <div class="cv">
        <img :src="content.pdfImagePath" alt="Curriculum Vitae"/>
        <button type="submit" @click="() => {window.open(content.pdfFilePath)}">{{ content.buttonText }}</button>
    </div>
</template>

<style scoped>
.cv {
    display: flex;
    flex-direction: column;
    align-items: center;

    & img {
        width: 30rem;
        height: auto;
    }

    & button {
        font-size: 1.3rem;
        margin-top: 5%;
        padding: 4% 8%;
        background-color: #007bff;
        color: #fff;
        border: none;
        border-radius: 0.5rem;
        cursor: pointer;

        &:hover {
            background-color: #0056b3;
        }
    }
}
</style>