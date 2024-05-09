<script setup>
import Questionnaire from '@component/section/Questionnaire.vue';
</script>

<template>
    <footer>
        <span id="contact">Contactez-moi !</span>
        <div class="barre"></div>
        <ul class="link">
            <a href="https://github.com/Bigdil25007" class="icone-github"> <img src="/icons/github.png?url"></a>
            <a href="https://www.linkedin.com/in/bilal-oulahal" class="icone-linkedin"> <img src="/icons/linkedin.png?url"></a>
        </ul>
    </footer>
</template>

<style scoped>
footer {
    display: flex;
    flex-direction: column;
    position: relative;
    bottom: 0;
    padding-bottom: 2%;
    margin-top: 5vh;
    background-color: #244057;
}

#contact {
    color: white;
    font-size: 200%;
    text-align: center;
}

.barre {
    background-color: #F54337;
    width: 45%;
    height: 1vh;
    margin-top: 1%;
    margin-left: auto;
    margin-right: auto;
}

.link {
    margin-top: 0.8%;
    margin-left: auto;
    margin-right: auto;
    width: 40%;
    display: flex;
    justify-content: space-around;

    img {
        width: 3rem;
        height: auto;
        transition: transform 0.25s ease-in-out;

        &:hover {
            transform: scale(1.1);
            filter: opacity(85%) grayscale(5%);
        }
    }
}
</style>