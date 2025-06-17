<template>
  <q-page class="bg-grey-2 q-pa-md">
    <div class="q-pa-md bg-white rounded-borders shadow-2">
      <div class="row q-col-gutter-lg">
        <div class="col-12 col-md-6 offset-md-3">
          <q-card flat bordered class="q-pa-lg">
            <q-card-section>
              <div class="text-h6 q-mb-md">Anunciar Novo Serviço</div>

              <q-input
                v-model="title"
                label="Título do Serviço"
                outlined
                class="q-mb-md"
                dense
              />

              <q-input
                v-model="description"
                label="Descrição do Serviço"
                type="textarea"
                outlined
                class="q-mb-md"
                dense
              />

              <q-input
                v-model.number="price"
                label="Preço do Serviço"
                type="number"
                outlined
                prefix="R$"
                class="q-mb-md"
                dense
              />


              <q-select
                v-model="category"
                :options="categories"
                label="Categoria"
                outlined
                dense
                class="q-mb-md"
              />

              <q-btn
                :loading="loading"
                label="Anunciar Serviço"
                color="dark"
                class="full-width"
                @click="submitService"
              />
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { useServiceAd } from '../services/useServiceAdd'
import { useAuth } from '../services/useAuth'

export default {
  name: 'AddNewJob',
  data() {
    return {
      title: '',
      description: '',
      price: null,
      category: '',
      categories: [
        { label: 'Designer Gráfico', value: 'Designer Gráfico' },
        { label: 'Desenvolvedor Web', value: 'Desenvolvedor Web' },
        { label: 'Fotógrafo', value: 'Fotógrafo' },
        { label: 'Personal Trainer', value: 'Personal Trainer' },
        { label: 'Consultor Financeiro', value: 'Consultor Financeiro' },
        { label: 'Artesão', value: 'Artesão' },
        { label: 'Manicure/Pedicure', value: 'Manicure/Pedicure' },
        { label: 'Cabeleireiro', value: 'Cabeleireiro' },
        { label: 'Barbeiro', value: 'Barbeiro' },
        { label: 'Eletricista', value: 'Eletricista' },
        { label: 'Encanador', value: 'Encanador' },
        { label: 'Mecânico', value: 'Mecânico' },
        { label: 'Redator Freelancer', value: 'Redator Freelancer' },
        { label: 'Tradutor', value: 'Tradutor' },
        { label: 'Professor Particular', value: 'Professor Particular' },
        { label: 'Técnico de Informática', value: 'Técnico de Informática' },
      ],
      error: null,
      loading: false,
    }
  },
  methods: {
      async checkUser() {
      try {
        await useAuth().checkUser()
      } catch (err) {
        this.$router.push('/login')
        alert('Você precisa estar logado para acessar esta página.')
        console.error(err)
      }
    },
  async submitService() {
    if (!this.title || !this.description || !this.price || !this.category) {
      alert('Por favor, preencha todos os campos.')
      return
    }

    this.loading = true
    this.error = null

    try {
      // Cria o anúncio
      const { createServiceAd } = useServiceAd()
      const sucesso = await createServiceAd(
        this.title,
        this.description,
        this.price,
        this.category.label
      )
      console.log(this.category.label)

      if (sucesso) {
        alert('Anúncio criado com sucesso!')
        this.$router.push('/jobs')
      } else {
        alert('Erro ao criar anúncio.')
      }
    } catch (err) {
      alert('Erro inesperado ao criar anúncio.')
      console.error(err)
    } finally {
      this.loading = false
    }
  },
},
}
</script>

<style scoped>
.full-width {
  width: 100%;
}
</style>
