<script setup>
import Anchor from '@component/utils/Anchor.vue';
import CV from "@component/utils/CV.vue";
</script>

<template>
    <Anchor id="competences"/>
    <section>
        <h1>Compétences</h1>
        <h2>Voici les compétences que j'ai acquises au cours de mes études et de mes expériences professionnelles</h2>
        <div class="content">
            <div class="list">
                <h3>Langages de programmation</h3>
                <ul>
                    <li>Java</li>
                    <li>Python</li>
                    <li>JavaScript</li>
                    <li>HTML/CSS</li>
                    <li>SQL</li>
                </ul>
            </div>
            <CV />
        </div>
    </section>
</template>

<style scoped>
section {
    width: 75%;
    margin: 2% auto;
    position: relative;
    display: flex;
    flex-direction: column;
    text-align: center;
}

.content {
    margin-top: 5%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}


.list {
    display: flex;
    flex-direction: column;
}

@media (max-width: 600px) {
  .content {
    flex-direction: column;
  }
}
</style>