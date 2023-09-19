<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Pokemon from '../components/Pokemon.vue';
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

  const searchInput = ref<string>('');
  const allPokemons = ref<Pokemon[]>([]);
  const filteredPokemons = ref<Pokemon[]>([]);

  const search = (): void => {
    filteredPokemons.value = allPokemons.value.filter(({ name }: Pokemon) => 
      name.toLowerCase().includes(searchInput.value.toLowerCase())
    )
  }

  onMounted(async () => {
    const datas: Data = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')
      .then(res => res.json());
    
    for(const data of datas.results) {
      const pokemon = await fetch(data.url).then(res => res.json())
      allPokemons.value.push(pokemon)
    }

    filteredPokemons.value = allPokemons.value
  })
</script>

<template>
  <section>
    <div class="search">
      <input placeholder="Search" @:keydown="search()" @:keyup="search()" v-model="searchInput" type="text">
      <button @:click="search()">Recherche</button>
    </div>
  </section>
  <section>
    <Pokemon 
      v-for="pokemon in filteredPokemons" 
      :name="pokemon.name" 
      :sprites="pokemon.sprites" 
    />
  </section>
</template>

<style scoped>
  .search {
    display:flex;
    gap: 20px;
  }

  input {
    border: none;
    border-radius: 6px;
    padding: 0 20px;
  }
</style>