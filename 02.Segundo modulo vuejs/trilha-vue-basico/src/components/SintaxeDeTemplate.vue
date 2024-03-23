<script setup>
const text = "Vue.js  3";
const spanTag = "<sapn>Código HTML</span>";
</script>

<template>
  <div>O melhot framework é {{ text }} .</div>
  <div v-html="spanTag"></div>
  <div>{{ text.split("").reverse().join("") }}</div>
</template>
