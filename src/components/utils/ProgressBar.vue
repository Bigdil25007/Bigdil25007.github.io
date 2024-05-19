<script setup>
const props = defineProps({
    title:  {
        type: String,
        default: 'N/A'
    },
    fill: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        default: 'rgb(220, 53, 69)'
    }
});
</script>

<template>
  <div class="wrapper">
    <span>{{ title }}</span>
    <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
      <div class="progress-bar" :style="{ width: fill + '%', backgroundColor: color}"></div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  margin : 1rem 0;
}

span {
  align-self: flex-start;
}

.progress {
  height: 1rem;
}
</style>