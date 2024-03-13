<script setup>
import { ref } from "vue";

const ativa = ref(true);
const erro = ref(false);

const classeAtiva = "ativa";
const classeErro = "erro";

const corAtiva = ref("red");
const fontSize = ref(30);
</script>

<template>
  <!-- <div class="estatica" :class="[ativa ? classeAtiva : '', classeErro]"></div> -->
  <div :style="{ color: corAtiva, fontSize: fontSize + 'px' }">Vue.js</div>
</template>

<style>
.estatica {
  width: 200px;
  height: 200px;
  background-color: green;
}

.ativa {
  background-color: rgb(0, 179, 0);
}

.erro {
  background-color: red;
}
</style>
