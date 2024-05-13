<script setup>
import Anchor from '@component/utils/Anchor.vue';
import Timeline from '@component/timeline/Timeline.vue';

const items = [
    {
        imageUrl: "/parcours/images.jpg?url",
        date: "1937",
        paragraph: "Proin quam velit, efficitur vel neque vitae, rhoncus commodo mi. Suspendisse finibus mauris et bibendum molestie. Aenean ex augue, varius et pulvinar in, pretium non nisi."
    },
    {
        date: "1940",
        paragraph: "Proin iaculis, nibh eget efficitur varius, libero tellus porta dolor, at pulvinar tortor ex eget ligula. Integer eu dapibus arcu, sit amet sollicitudin eros."
    },
    {
        date: "1943",
        paragraph: "In mattis elit vitae odio posuere, nec maximus massa varius. Suspendisse varius volutpat mattis. Vestibulum id magna est."
    },
    {
        date: "1946",
        paragraph: "In mattis elit vitae odio posuere, nec maximus massa varius. Suspendisse varius volutpat mattis. Vestibulum id magna est."
    },
    {
        date: "1946",
        paragraph: "In mattis elit vitae odio posuere, nec maximus massa varius. Suspendisse varius volutpat mattis. Vestibulum id magna est."
    }
];
</script>

<template>
    <Anchor id="parcours"/>
    <section>
        <div class="title">
            <h1>Mon parcours</h1>
            <p>Voici mon parcours professionnel dans le développement web</p>
        </div>
        <Timeline :items="items"/>
    </section>

</template>

<style scoped>
.title {
    text-align: center;
    margin-bottom: 50px;
}

section {
    padding: 2% 0;
}
</style>