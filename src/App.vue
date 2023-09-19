<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
import { routes } from './router';
</script>

<template>
  <nav>
    <router-link
      v-for="route in routes"
      :to="{ name: route.name }"
    >
      {{ route.name }}
    </router-link>
  </nav>
  <RouterView />
</template>

<style scoped>

nav {
  display: flex;
  flex-direction: row;
  gap: 15px;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
