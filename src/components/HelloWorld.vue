<script setup lang="ts">
const notes: { [key: string]: number } = {
  symfony: 0,
  integration: 10,
  reseau: 15
}
</script>

<template>
    <div v-for="matiere in Object.keys(notes)">
    <span>Note en {{ matiere }}: {{ notes[matiere] }}</span>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
