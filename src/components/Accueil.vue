<script setup>
</script>

<template>
    <section>
        <img src="/defaultBackground.webp?url" alt="Image" class="background-image" />
        <div class="content">
            <h1>Bilal Oulahal</h1>
            <h2>Développeur Web - Backend</h2>
            <button><a href="/#aboutMe"></a>Qui-suis je ?</button>
        </div>
    </section>
</template>

<style scoped>
section {
    height: 100vh;
    position: relative;
}

.background-image {
    width: 100vw;
    height: auto;
    overflow: hidden;
    filter: brightness(80%);
}

.content {
    position: absolute;
    top: 40%;
    width: 100%;
    text-align: center;
    color: white;

    h1 {
        font-size: 4rem;
        margin-bottom: 1.5rem;
    }

    h2 {
        font-size: 2.5rem;
        margin-bottom: 1.5rem;
    }
}

button {
    color: white;
    text-transform: uppercase;
    padding: 0.5rem 1rem;
    font-size: 1.5rem;
    background-color: #1c385e;
    transition: all 0.3s ease-in-out;

    &:hover {
        cursor: pointer;
        background-color: #050a11;
    }
}
</style>