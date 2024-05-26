<script setup>
import { ref, onMounted } from 'vue';
import { shuffle } from 'lodash';

const categories = ref(['cat1', 'cat2', 'cat3']);
const previews = ref([
  {cat: 'cat1'},
  {cat: 'cat1'},
  {cat: 'cat1'},
  {cat: 'cat2'},
  {cat: 'cat2'},
  {cat: 'cat2'},
  {cat: 'cat2'},
  {cat: 'cat3'},
  {cat: 'cat3'},
]);
const selectedCat = ref('all');

const filter = (selection) => {
  selectedCat.value = selection;
};

console.log(previews.value);

onMounted(() => {
  previews.value = shuffle(previews.value);
});
</script>

<template>
<div id="app">
  <div class="menu">
    <button v-for="(category, index) in categories" @click="filter(category)" :class="{selected: selectedCat === category}">Category {{index + 1}}</button>
    <button @click="filter('all')" :class="{selected: selectedCat === 'all'}">All</button>
  </div>
  <div v-for="preview in previews">
    <div v-if="preview && (selectedCat === preview.cat || selectedCat === 'all')" :class="'preview ' + preview.cat">
    </div>
  </div>
</div>
</template>

<style scoped>
body {
  background: #20262E;
  padding: 20px;
  font-family: Helvetica, Arial, Sans-Serif;
}

#app {
  background: #fff;
  max-width: 420px;
  width: 100%;
  margin: 0 auto;
  border-radius: 4px;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-gap: 10px;
}

.preview {
  height: 100px;
  width: 0%;
  opacity: 0;
  animation: appear .5s ease-in-out forwards;
}

.cat1 {
  background: gold;
}
.cat2 {
  background: #333;
}
.cat3 {
  background: #ddd;
}

.menu {
  grid-column-start: 1;
  grid-column-end: -1;
  display: flex;
  flex-flow: wrap;
  margin: -5px -5px;
}

button {
  cursor: pointer;
  margin: 5px 5px;
  border: 0;
  padding: 5px 10px;
  background: #ddd;
  border: 1px solid #ddd;
  transition: .3s ease-in-out;
  transition-property: background, border, color;
  &.selected {
    background: #fff;
    color: #333;
    border: 1px solid #333;
  }
  &:focus {
    outline: none;
  }
  &:hover {
    color: #fff;
    background: #333;
    border: 1px solid #333;
  }
}

@keyframes appear {
  to {width: 100%; opacity: 1;}
}
</style>
