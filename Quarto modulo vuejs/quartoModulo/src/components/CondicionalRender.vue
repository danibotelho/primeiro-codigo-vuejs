<script setup>
import { ref } from "vue";

const maravilhoso = ref(false);
const letra = ref("E");
const mostrar = ref(true);
</script>

<template>
  <div>
    <h1> V - IF/ELSE</h1>
    <h1 v-if="maravilhoso">Vue é Maravilhoso</h1>
    <h1 v-else=>Não é o Vue</h1>
    
    <div v-if="letra === 'A'">A</div>
    <div v-else-if="letra === 'B'">B</div>
    <div v-else-if="letra === 'C'">C</div>
    <div v-else>Não ABC</div>
  </div>

  <div> 
    <h1> V-Show  </h1>  
    <h1 v-show="mostrar"> Mostrar Elemento</h1>
    </div>
    
</template>

<!-- usando o v-if, o elemento só é renderizado, caso a variavel seja verdadeira -->
<!-- o v-show renderiza o elemento, porem não exibe o elemento, ele muda as propriedades para que não seja exibido, aparece como display: none -->
<!-- v-if é mais pesado em processamento por ter que ligar e desligar algo do template, v-show é mais pesado em pocessamento por criar divs que provavelmente não será usada -->
<!-- v-if: algo que não vai ficar mudando de exibição, v-show: será exibido e escodido por diversas vezes.  -->