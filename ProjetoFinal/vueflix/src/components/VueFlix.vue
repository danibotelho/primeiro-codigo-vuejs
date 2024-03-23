<script setup>
import { computed, onMounted, ref, watch } from 'vue'

const filmes = ref([
  {
    nome: 'Vue.js: The Documentary',
    lancamento: '24/02/2020',
    genero: ' Documentário',
    img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/eqNdWOXUuTWefYMycWz7dVE0Irv.jpg',
    like: null
  },
  {
    nome: 'A Origem',
    lancamento: '06/08/2010',
    genero: 'Ficção Cientifica',
    img: 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/9e3Dz7aCANy5aRUQF745IlNloJ1.jpg',
    like: null
  },
  {
    nome: 'Barbie',
    lancamento: '20/07/2023',
    genero: 'Comédia',
    img: 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/yRRuLt7sMBEQkHsd1S3KaaofZn7.jpg',
    like: null
  },
  {
    nome: 'Matrix',
    lancamento: '21/05/1999',
    genero: 'Ficção Cientifica',
    img: 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/lDqMDI3xpbB9UQRyeXfei0MXhqb.jpg',
    like: null
  }
])

const adicionandoFilme = ref(false)

const formFilme = {
  nomeFilme: ref(''),
  lancamentoFilme: ref(''),
  generoFilme: ref(''),
  imgFilme: ref('')
}

const salvarFilme = () => {
  filmes.value.push({
    nome: formFilme.nomeFilme.value,
    lancamento: formFilme.lancamentoFilme.value,
    genero: formFilme.generoFilme.value,
    img: formFilme.imgFilme.value
  })

  cancelarCadastro()
}

const cancelarCadastro = () => {
  formFilme.nomeFilme.value = ''
  formFilme.lancamentoFilme.value = ''
  formFilme.generoFilme.value = ''
  formFilme.imgFilme.value = ''

  adicionandoFilme.value = false
}

const definirLike = (index, like) => {
  filmes.value[index].like = like
}

const excluirFilme = (index) => {
  const texto = `Tem certeza que deseja excluir o filme ${filmes.value[index].nome}`
  if (confirm(texto)) {
    filmes.value.splice(index, 1)
  }
}
// filtros : todos | gostei | não gostei
const filtroSelecionado = ref('todos')
const filmesParaExibir = computed(() => {
  switch (filtroSelecionado.value) {
    case 'gostei':
      return filmes.value.filter((item) => item.like === true)

    case 'não gostei':
      return filmes.value.filter((item) => item.like === false)

    default:
      return filmes.value
  }
})

watch(
  filmes,
  (novoValor, antigoValor) => {
    localStorage.setItem('vueflix', JSON.stringify(novoValor))
  },
  { deep: true }
)

onMounted(() => {
  const dadosLocalStorge = localStorage.getItem('vueflix')
  if (dadosLocalStorge) {
    filmes.value = JSON.parse(dadosLocalStorge)
  }
})
</script>
<template>
  <div class="vueflix">
    <div class="acoes-usuario">
      <div class="filtros">
        <div class="titulo">Filtrar</div>
        <div class="opcoes-filtros">
          <button
            @click="filtroSelecionado = 'todos'"
            class="botao"
            :class="{ ativo: filtroSelecionado === 'todos' }"
          >
            Todos
          </button>
          <button
            @click="filtroSelecionado = 'gostei'"
            class="botao"
            :class="{ ativo: filtroSelecionado === 'gostei' }"
          >
            Gostei
          </button>
          <button
            @click="filtroSelecionado = 'não gostei'"
            class="botao"
            :class="{ ativo: filtroSelecionado === 'não gostei' }"
          >
            Não Gostei
          </button>
        </div>
      </div>

      <div class="novo-filme">
        <div v-if="adicionandoFilme" class="adicionar-filme">
          <input
            v-model="formFilme.nomeFilme.value"
            type="text"
            autocomplete="off"
            placeholder="Nome do Filme"
          />
          <input
            v-model="formFilme.imgFilme.value"
            type="text"
            autocomplete="off"
            placeholder="URL da Imagem"
          />
          <input
            v-model="formFilme.lancamentoFilme.value"
            type="text"
            autocomplete="off"
            placeholder="Ano de Lançamento"
          />
          <input
            v-model="formFilme.generoFilme.value"
            type="text"
            autocomplete="off"
            placeholder="Gênero"
          />
          <div class="acoes">
            <button class="botao ativo" @click="salvarFilme">Salvar</button>
            <button class="botao danger ativo" @click="cancelarCadastro">Cancelar</button>
          </div>
        </div>
        <button v-else class="botao ativo" @click="adicionandoFilme = true">Adicionar Filme</button>
      </div>
    </div>

    <div class="filmes">
      <div v-for="(filme, index) in filmesParaExibir" :key="filme.nome" class="filme">
        <div class="capa-container">
          <div class="acoes-filme">
            <button
              @click="definirLike(index, true)"
              class="botao"
              :class="{ ativo: filme.like === true }"
            >
              Gostei
            </button>
            <button
              @click="definirLike(index, false)"
              class="botao danger"
              :class="{ ativo: filme.like === false }"
            >
              Não Gostei
            </button>
            <button @click="excluirFilme(index)" class="botao danger">Excluir</button>
          </div>
          <img class="capa" :src="filme.img" alt="" />
        </div>
        <div class="nome">{{ filme.nome }}</div>
        <div class="info">{{ filme.lancamento }} - {{ filme.genero }}</div>
      </div>
      <p
        v-if="filmesParaExibir.length === 0"
        :style="{ flex: 1, textAlign: 'center', marginTop: '16px', fontSize: '1.5rem' }"
      >
        Não há filmes para exibir
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.vueflix {
  padding: 16px;

  .acoes-usuario {
    display: flex;
    justify-content: space-between;
    align-items: end;
    margin: 30px 0;

    .adicionar-filme {
      display: flex;
    }
  }

  .filmes {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    min-height: 350px;

    .filme {
      .capa-container {
        width: 200px;
        height: auto;
        position: relative;
        .capa {
          width: 100%;
          height: 100%;
        }

        .acoes-filme {
          position: absolute;
          bottom: 0;
          padding-bottom: 12px;
          background-image: linear-gradient(to bottom, rgba(255, 0, 0, 0), rgb(0, 0, 0));
          display: none;
          flex-direction: column;
          width: 100%;
          height: 100%;
          justify-content: flex-end;
        }
      }

      .nome {
        font-weight: bold;
      }

      .info {
        font-size: 12px;
      }

      &:hover {
        .acoes-filme {
          display: flex;
        }
      }
    }
  }
}
</style>
