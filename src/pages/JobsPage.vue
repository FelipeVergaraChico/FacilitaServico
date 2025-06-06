<template>
  <q-page class="bg-grey-2 q-pa-md">
    <div class="row q-col-gutter-md">
      <!-- Sidebar de Filtros -->
      <div class="col-12 col-md-3">
        <q-card flat class="q-pa-md bg-white">
          <div class="text-subtitle1 q-mb-sm">Palavras-chave</div>

          <q-select
            v-model="selectedCategory"
            :options="categories"
            label="Categoria"
            dense
            outlined
            class="q-mb-md"
          />

          <q-slider v-model="priceRange" label-always :min="0" :max="100" class="q-mb-md" />

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
          <div class="col-auto">
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
              <!-- <q-img :src="service.img" :alt="service.title" height="150px" /> -->
              <q-card-section>
                <div class="text-subtitle1">{{ service.title }}</div>
                <div class="text-caption">{{ formatPrice(service.price) }}/H</div>
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

export default {
  name: 'ServicosPage',
  data() {
    return {
      categories: ['Beleza', 'Serviços Gerais', 'Educação'],
      selectedCategory: '',
      priceRange: 50,
      selectedProfessions: [],
      professionOptions: [
        { label: 'Barbeiro', value: 'Barbeiro' },
        { label: 'Costureira', value: 'Costureira' },
        { label: 'Técnico de Informática', value: 'Técnico de Informática' },
      ],
      search: '',
      page: 1,
      serviceAds: [],
      sortOrder: null,
    }
  },
  computed: {
    filteredServices() {
      let filtered = this.serviceAds.filter((service) =>
        service.title.toLowerCase().includes(this.search.toLowerCase()),
      )

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
    async fetchServices() {
      try {
        const response = await api.get('/servicead/')
        this.serviceAds = response.data.serviceAds
      } catch (error) {
        console.error('Erro ao buscar serviços:', error)
        this.serviceAds = []
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
</style>
