<script setup>
import { ref, computed } from "vue";

const numeroDeLivros = ref(10);
const numeroDeLivrosLidos = ref(7);
const metaDeLivrosLidos = ref(0.7);

const bateuAMetaDeLivros = computed(() => {
  return numeroDeLivrosLidos.value / numeroDeLivros.value >=
    metaDeLivrosLidos.value
    ? "Sim"
    : "Não";
});
</script>

<template>
  <div>
    <p>Bateu a meta de livros</p>
    <p>{{ bateuAMetaDeLivros }}</p>
  </div>
</template>
