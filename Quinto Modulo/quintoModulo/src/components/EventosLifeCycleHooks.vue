<script setup>
//exemplo botão em javascript
// const meuBotao = document.getElementById(".meu-botao");
// const clickBotao = () => {
//   console.log("clickBotao");
// };
// meuBotao.addEventListener("click", clickBotao);

//exemplo botão com vue.js
import { ref } from "vue";

const contador = ref(0);
const nome = ref("vue.js");

const olaVue = () => {
  alert(`Olá ${nome.value}`);
};

const logar = () => {
  console.log("Vue");
};

const enviarMensagem = () => {
  alert(`Mensagem Enviada`);
};

const botaoDireito = () => {
  alert(`Clicou com o botão direito`);
};
</script>
<!-- stopPropgation() conceito -->
<!-- a propagação é interrompida, então numa situação onde pai e filho 
  recebem o mesmo evento de click, qndo o filho for acionado, 
  o evento não será passado para o pai -->


<template>
  <div>
    <h1>Eventos LifeCycle Hooks</h1>
    <div @click="logar">
      <button @click="contador++">Contador: {{ contador }}</button>
      <button @click="olaVue">Mensagem</button>
      <button @click.stop="logar">Stop</button>
    </div>
    <input @keyup.enter="enviarMensagem" />
    <button @click.right="botaoDireito">Envento Mouse</button>
  </div>
</template>
