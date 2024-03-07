// const buttonEl = document.querySelector("button");
// const inputEl = document.querySelector("input");
// const listEl = document.querySelector("ul");

// const adicionarMeta = () => {
//   const meta = inputEl.value;
//   const elementoDaLista = document.createElement("li");
//   elementoDaLista.textContent = meta;

//   //metodo para colocar um elemento como filho de outro.
//   listEl.appendChild(elementoDaLista);

//   inputEl.value = "";
// };

// buttonEl.addEventListener("click", () => {
//   adicionarMeta();
// });

const { createApp, ref } = Vue;

createApp({
  setup() {
    const metas = ref([]);
    const valorDigitado = ref("");

    const adicionarMeta = () => {
      metas.value.push(valorDigitado.value);
      valorDigitado.value = "";
    };

    return { metas, valorDigitado, adicionarMeta };
  },
}).mount("#app");
