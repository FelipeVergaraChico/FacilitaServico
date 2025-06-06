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
                label="Tipo de Serviço"
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

export default {
  name: 'AddNewJob',
  data() {
    return {
      title: '',
      description: '',
      price: null,
      category: '',
      categories: ['Beleza', 'Serviços Gerais', 'Educação'],
      error: null,
      loading: false,
    }
  },
  methods: {
    async submitService() {
      if (!this.title || !this.description || !this.price || !this.category) {
        alert('Por favor, preencha todos os campos.')
        return
      }

      const { createServiceAd, error, loading } = useServiceAd()

      this.loading = true
      this.error = null

      const success = await createServiceAd(
        this.title,
        this.description,
        this.price,
        this.category
      )

      this.loading = loading.value
      this.error = error.value

      if (success) {
        alert('Anúncio criado com sucesso!')
        this.$router.push('/jobs')
      } else {
        alert('Erro ao criar anúncio: ' + this.error)
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
