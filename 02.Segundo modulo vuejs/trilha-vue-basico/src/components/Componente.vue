<script setup>
import { ref } from "vue";
const contador = ref(0);
</script>

<template>
  <button @click="contador++">você clicou {{ contador }} vezes</button>
</template>
<style></style>
