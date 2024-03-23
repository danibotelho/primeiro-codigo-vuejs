<script setup>
import { ref, onMounted } from "vue";

const inputRef = ref(null);

onMounted(() => {
  inputRef.value.focus();
});
</script>

<template>
  <div>
    <h1>Template Ref</h1>
    <input ref="inputRef" type="text" />
  </div>
</template>

<!-- Como acessar diretamente elementos DOM -->
