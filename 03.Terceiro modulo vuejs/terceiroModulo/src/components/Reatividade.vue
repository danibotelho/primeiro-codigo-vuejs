<script setup>
import { ref, reactive } from "vue";

const contador = ref(0);
const addContador = () => {
  contador.value++;
};

const contadorReactive = reactive({ contador: 0 });
//reactive: se limita ao tipo de valor que ele recebe, ele só funciona para objetos,
// arrays, tipos de coleção como map, set. Não funciona para tipos prmitivos.

</script>

<template>
  <div>
    <button @click="addContador">Contador: {{ contador }}</button>
    <button @click="contadorReactive.contador++">
      Contador Reactive: {{ contadorReactive.contador }}
    </button>
  </div>
</template>
