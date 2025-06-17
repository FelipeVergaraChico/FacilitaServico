<template>
  <q-page class="q-pa-md bg-grey-2">
    <div class="q-pa-md bg-white rounded-borders shadow-2">
      <div class="row q-col-gutter-lg">
        <div class="col-12 col-md-8 offset-md-2">
          <q-card flat bordered class="q-pa-lg">

            <q-card-section>
              <div class="text-h6 q-mb-md">Editar Serviço</div>

              <q-input
                v-model="form.title"
                label="Título do Serviço"
                outlined
                dense
                class="q-mb-md"
              />

              <q-input
                v-model.number="form.price"
                label="Preço"
                prefix="R$"
                type="number"
                outlined
                dense
                class="q-mb-md"
              />

              <q-select
                v-model="form.category"
                :options="categories"
                label="Categoria"
                outlined
                dense
                class="q-mb-md"
              />

              <q-input
                v-model="form.description"
                label="Descrição"
                type="textarea"
                outlined
                dense
                class="q-mb-md"
              />

              <div class="row q-gutter-sm">
                <q-btn
                  label="Salvar Alterações"
                  color="primary"
                  :loading="loading"
                  @click="submitChanges"
                  class="col"
                />
                <q-btn
                  flat
                  label="Cancelar"
                  @click="cancelEdit"
                  class="col"
                />
              </div>
            </q-card-section>

          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { api } from 'src/boot/axios'
import { useAuth } from '../services/useAuth'

export default {
  name: 'EditJob',
  data() {
    return {
      form: {
        title: '',
        price: null,
        category: '',
        description: '',
      },
      categories: [
        'Designer Gráfico',
        'Desenvolvedor Web',
        'Fotógrafo',
        'Personal Trainer',
        'Consultor Financeiro',
        'Artesão',
        'Manicure/Pedicure',
        'Cabeleireiro',
        'Barbeiro',
        'Eletricista',
        'Encanador',
        'Mecânico',
        'Redator Freelancer',
        'Tradutor',
        'Professor Particular',
        'Técnico de Informática',
      ],
      loading: false,
      jobId: null,
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
    async fetchJob() {
      const token = localStorage.getItem('token')
      this.loading = true
      try {
        const response = await api.get(`/servicead/${this.jobId}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        this.form = response.data
      } catch (err) {
        alert('Erro ao carregar dados do serviço.')
        console.error(err)
      } finally {
        this.loading = false
      }
    },
    async submitChanges() {
      const token = localStorage.getItem('token')
      this.loading = true
      try {
        await api.patch(`/servicead/${this.jobId}`, this.form, {
          headers: { Authorization: `Bearer ${token}` },
        })
        alert('Serviço atualizado com sucesso!')
        this.$router.push('/jobs')
      } catch (err) {
        alert('Erro ao atualizar serviço.')
        console.error(err)
      } finally {
        this.loading = false
      }
    },
    cancelEdit() {
      this.$router.push('/jobs')
    },
  },
  mounted() {
    this.jobId = this.$route.params.id
    this.fetchJob()
  },
}
</script>

<style scoped>
.rounded-borders {
  border-radius: 12px;
}
</style>
