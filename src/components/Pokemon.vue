<script setup lang="ts">
  import { defineProps } from 'vue';

  type Props = {
    name: string;
    sprites: { [key: string]: string };
   }

  const { name, sprites } = defineProps<Props>()

</script>

<template>
  <div>
    <img :src="sprites['front_default']" alt="{{ name }}">
    {{ name }}
  </div>
</template>