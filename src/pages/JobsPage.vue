<template>
  <q-page class="bg-grey-2 q-pa-md">
    <div class="row q-col-gutter-md">
      <!-- Sidebar de Filtros -->
      <div class="col-12 col-md-3">
        <q-card flat class="q-pa-md bg-white">
          <div class="text-subtitle1 q-mb-sm">Palavras-chave</div>

          <q-slider v-model="priceRange" label-always :min="0" :max="3000" class="q-mb-md" />

          <q-option-group
            v-model="selectedProfessions"
            :options="professionOptions"
            type="checkbox"
            label="Profissão"
            class="q-mb-md"
          />
        </q-card>
      </div>

      <div class="col-12 col-md-9">
        <div class="row items-center q-mb-md">
          <div class="col">
            <q-input
              dense
              rounded
              outlined
              v-model="search"
              placeholder="Pesquisar"
              class="search"
            />
          </div>
          
          <!-- Botão Novo só aparece se o usuário for Self-employed -->
          <div class="col-auto" v-if="user.position === 'Self-employed'">
            <q-btn color="dark" label="Novo" to="/newjob"/>
          </div>
          <div class="col-auto">
            <q-btn flat label="Preço Crescente" @click="setSortAsc" />
            <q-btn flat label="Preço Decrescente" @click="setSortDesc" />
          </div>
        </div>

        <div class="row q-col-gutter-md">
          <div
            v-for="service in filteredServices"
            :key="service.title"
            class="col-12 col-sm-6 col-md-4"
          >
            <q-card class="q-pa-none">
              <q-card-section>
                <img src="../assets/teste.png" alt="" class="img" />
                <div class="text-subtitle1">{{ service.title }}</div>
                <div class="text-caption">{{ formatPrice(service.price) }}/H</div>
                <q-btn
                  v-if="service.selfEmployed._id === user._id"
                  flat
                  color="primary"
                  :to="`/servicead/${service._id}`"
                  class="q-mt-sm"
                >Editar</q-btn>
                <q-btn
                  v-if="service.selfEmployed._id === user._id"
                  flat
                  color="negative"
                  @click="deleteService(service._id)"
                >Remover</q-btn>
                <q-btn v-if="user.position === 'Client'" flat color="secondary" :to="`/appointments/${service._id}`" class="q-mt-sm">
                  Agendar
                </q-btn>
              </q-card-section>
            </q-card>
          </div>
        </div>

        <div class="row justify-center q-mt-md">
          <q-pagination v-model="page" :max="pages" color="dark" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { api } from 'src/boot/axios'
import { checkUser } from '../services/useAuth'

export default {
  name: 'ServicosPage',
  data() {
    return {
      categories: ['Beleza', 'Serviços Gerais', 'Educação'],
      selectedCategory: '',
      priceRange: 3000,
      selectedProfessions: [],
      professionOptions: [
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
      search: '',
      page: 1,
      serviceAds: [],
      sortOrder: null,
      user: {
        position: ''
      }
    }
  },
  computed: {
    filteredServices() {
      let filtered = this.serviceAds

      // Filtro por categoria
      if (this.selectedCategory && this.selectedCategory !== 'Todas') {
        filtered = filtered.filter(service =>
          service.category === this.selectedCategory
        )
      }

      // Filtro por faixa de preço (até o valor do slider)
      if (this.priceRange !== null) {
        filtered = filtered.filter(service =>
          service.price <= this.priceRange
        )
      }

      // Filtro por profissão
      if (this.selectedProfessions.length > 0) {
        filtered = filtered.filter(service =>
          this.selectedProfessions.includes(service.category)
        )
      }

      // Filtro por busca
      if (this.search) {
        filtered = filtered.filter(service =>
          service.title.toLowerCase().includes(this.search.toLowerCase())
        )
      }

      // Ordenação
      if (this.sortOrder === 'asc') {
        filtered.sort((a, b) => a.price - b.price)
      } else if (this.sortOrder === 'desc') {
        filtered.sort((a, b) => b.price - a.price)
      }

      return filtered
    },
    pages() {
      return 10
    },
  },
  methods: {
      async checkUser() {
      try {
        await checkUser()
      } catch (err) {
        this.$router.push('/login')
        alert('Você precisa estar logado para acessar esta página.')
        console.error(err)
      }
    },
    async fetchServices() {
      try {
        const response = await api.get('/servicead/')
        this.serviceAds = response.data.serviceAds
      } catch (error) {
        console.error('Erro ao buscar serviços:', error)
        this.serviceAds = []
      }
    },
    async fetchUser() {
      const token = localStorage.getItem('token')
      try {
        const response = await api.get('/user/myprofile', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })

        this.user = response.data
        console.log('Usuário logado:', this.user)
      } catch (error) {
        console.error('Erro ao buscar usuário:', error)
      }
    },

    async deleteService(serviceId) {
    const token = localStorage.getItem('token')
    if (!confirm('Tem certeza que deseja remover este serviço?')) return
    try {
      await api.delete(`/servicead/${serviceId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      this.serviceAds = this.serviceAds.filter(service => service._id !== serviceId)
      alert('Serviço removido com sucesso!')
    } catch (error) {
      alert('Erro ao remover serviço. Tente novamente mais tarde.')
      console.error('Erro ao remover serviço:', error)
    }
  },
    formatPrice(value) {
      return `R$${value.toFixed(2).replace('.', ',')}`
    },
    setSortAsc() {
      this.sortOrder = 'asc'
    },
    setSortDesc() {
      this.sortOrder = 'desc'
    },
  },
  mounted() {
    this.fetchServices()
    this.fetchUser()
  },
}
</script>

<style scoped>
.search {
  margin-right: 20px;
}
.q-card-section {
  padding-bottom: 8px;
}

.img {
  width: 100%;
  object-fit: cover;
  height: 200px;
  object-position: 22% 22%;
}
</style>
