<script setup>
import { ref, watch, watchEffect } from "vue";

const frase = ref("");
// watch(frase, (fraseNova, fraseAntiga) => {
//   document.title = fraseNova;
// });

watchEffect(() => {
  document.title = frase.value;
});
</script>

<template>
  <div>Watcher</div>
  <div>
    <input type="text" v-model="frase" />
  </div>
</template>
