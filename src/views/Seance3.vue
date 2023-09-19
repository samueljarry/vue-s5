<script setup lang="ts">
import { onMounted, ref } from 'vue';
  type Data = {
    count: number;
    next: string | null;
    previous: string | null;
    results: { name: string; url: string; }[]
  }

  type Pokemon = {
    name: string;
    sprites: { [key:string]: string };
    type: { slot: number;  type: { name: string; url: string; } }[]
  }

  const fetchedDatas = ref<Pokemon[]>([])

  onMounted(async () => {
    const datas: Data = await fetch('https://pokeapi.co/api/v2/pokemon/')
      .then(res => res.json());
    

    for(const data of datas.results) {
      const pokemon = await fetch(data.url).then(res => res.json())
      fetchedDatas.value.push(pokemon)
    }
  })
</script>

<template>
  <section>
    <div v-for="pokemon in fetchedDatas">
      <img v-bind:src="pokemon.sprites['front_default']" />
      {{ pokemon.name }}
    </div>
  </section>
</template>