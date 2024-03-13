<script setup>
import { ref, reactive } from "vue";

const mensagemDoEscopoDoPai = "Vue.js Trilha";
const items = ref([{ msg: "vue.js" }, { msg: "listas" }]);

const dados = reactive({
  titulo: "Como renderizar listas no vue",
  autor: "Evan You",
  publicado: "2016-04-10",
});
</script>

<template>
  <div>
    <h1>V-FOR</h1>
    <ul>
      <li v-for="(item, index) in items">
        {{ mensagemDoEscopoDoPai }} -- {{ index }} --{{ item.msg }}
      </li>
      <li v-for="valor in dados">
        {{ valor }}
      </li>
    </ul>
    <span v-for="n in 10">{{ n }}</span>
  </div>
</template>

<!-- diretiva v-for -->
<!-- v-if sempre acontece primeiro que o v-for, em casos necessarios usar v-if e v-for, é recomendado usar uma computed. -->
