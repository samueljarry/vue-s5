<script setup lang="ts">
  import { Ref, ref } from 'vue';
  let awesome: Ref<boolean> = ref(true);

  const randArray: number[] = Array.from(({ length: 10 }), () => 
    Math.ceil(Math.random() * 20)
  )

  const notes: { [key: string]: number } = {
    symfony: 0,
    integration: 10,
    reseau: 15
  }
</script>

<template>
  <section>
    <button v-on:click="awesome = !awesome">
      Click me
    </button>
  
    <div v-if="awesome">It's awesome 🥳</div>
    <div v-else>It's not awesome 🤨</div>
  </section>

  <section>
    <strong>Boucle à partir d'un objet: </strong>

    <div v-for="matiere in Object.keys(notes)">
      <span>Note en {{ matiere }}: {{ notes[matiere] }}</span>
    </div>
    
    <br />
    <strong>Notes randoms:</strong>

    <div v-for="note in randArray">
      <span>
        Note: <span :class="note >= 10 ? 'green' : 'red'">{{ note }}</span>
      </span>
    </div>
  </section>
</template>

<style scoped>
  section {
    text-align: start;
    margin: 30px 0
  }

  .red {
    color:red;
  }

  .green {
    color: green;
  }
</style>