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

const textoDoInput = ref("");

const mensagem = ref("");
const check = ref(false);
const radio = ref("");
const select = ref("");
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
    <div>
      <h1>Formulario Vue</h1>

      <input @input="(event) => (textoDoInput = event.target.value)" />
      <p>{{ textoDoInput }}</p>
      <br />
      <input v-model="mensagem" />
      <p>{{ mensagem }}</p>
      <br />

      <div>
        <h2>Checkbox , Radio , Select</h2>
        <input type="checkbox" id="checkobox" v-model="check"/>
        <p>Checkbox: {{ check}}</p>

        <label for="um">Um</label>
        <input type="radio" id="um" value="Um" v-model="radio"/>
       
        <label for="dois">Dois</label>
        <input type="radio" id="dois" value="Dois" v-model="radio"/>
        <p>Opção radio: {{radio}}</p>

        <select v-model="select">
          <option disabled value=""> Selecione um valor</option>
          <option  value="A"> A </option>
          <option  value="B"> B</option>
          <option  value="C"> C</option>
          
        </select>
        <p>Item selecionado: {{select}}</p>
      </div>
    </div>
  </div>
</template>
