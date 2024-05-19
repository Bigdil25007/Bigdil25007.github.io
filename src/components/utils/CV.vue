<script setup>
const pdfImagePath = '/cv/CV.jpg?url';
const pdfFilePath = '/cv/CV.pdf?url';
</script>

<template>
    <div class="cv">
        <img :src="pdfImagePath" alt="Curriculum Vitae"/>
        <button type="submit" @click="() => {window.open(pdfFilePath)}">Télécharger</button>
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