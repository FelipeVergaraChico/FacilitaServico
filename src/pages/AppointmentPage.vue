<template>
  <q-page class="bg-grey-2 q-pa-md">
    <div class="q-pa-md bg-white rounded-borders shadow-2">
      <div class="row q-col-gutter-xl">
        <!-- Imagem do serviço -->
        <div class="col-12 col-md-6">
          <q-img src="../assets/teste.png" class="img" />
        </div>

        <!-- Informações e agendamento -->
        <div class="col-12 col-md-6">
          <div class="text-h6">{{ service.title }}</div>
          <q-badge color="green" class="q-mt-sm">{{ service.category }}</q-badge>
          <div class="text-h4 q-mt-sm">{{ formatPrice(service.price) }}</div>
          <div class="text-subtitle2 q-mb-md">{{ service.category }}</div>

          <!-- Data e Horário -->
          <div class="row q-col-gutter-sm q-mb-md">
            <div class="col">
              <q-input
                v-model="day"
                mask="##/##/####"
                type="datetime-local"
                label="Agendar data"
                outlined
              >
              </q-input>
            </div>
          </div>

          <q-input
            v-model="address"
            label="Endereço para atendimento"
            outlined
            class="q-mb-md"
          />

          <q-btn color="black" label="Agendar" @click="handleBooking" class="full-width" />

          <!-- Descrição -->
          <q-expansion-item icon="info" label="Descrição" class="q-mt-md">
            <div class="text-body2">{{ service.description }}</div>
          </q-expansion-item>
        </div>
      </div>

      <!-- Avaliações -->
      <div class="q-mt-xl">
        <div class="text-h6 q-mb-md">Avaliações</div>
        <div class="row q-col-gutter-md">
          <div
            v-for="review in reviews"
            :key="review.name"
            class="col-12 col-md-4"
          >
            <q-card flat bordered>
              <q-card-section>
                <q-rating v-model="review.rating" max="5" size="20px" readonly color="yellow" />
                <div class="text-subtitle2 q-mt-sm">{{ review.title }}</div>
                <div class="text-caption text-grey">{{ review.comment }}</div>
                <div class="text-caption text-bold q-mt-sm">
                  <q-avatar size="24px" class="q-mr-xs">
                    <img :src="review.avatar" />
                  </q-avatar>
                  {{ review.name }}
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { api } from 'src/boot/axios'
import { checkUser } from '../services/useAuth'

export default {
  data() {
    return {
      service: {
        title: '',
        price: 0,
        category: '',
        description: '',
        selfEmployed: {
          _id: '',
          name: '',
          email: ''
        }
      },
      client: {
        _id: '',
        name: '',
        email: ''
      },
      day: '',
      address: '',
      reviews: [
        {
          name: 'Maria',
          title: 'Incrível',
          comment: 'Melhor costureira da cidade!',
          rating: 5,
          avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
        },
        {
          name: 'Priscila',
          title: 'MA RA VI LHO SA',
          comment: 'Meu vestido ficou PERFEITO, adorei!',
          rating: 5,
          avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
        },
        {
          name: 'Dona Elza',
          title: 'Saia',
          comment: 'Adorei, minha saia rendada. Aprovado.',
          rating: 5,
          avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
        },
      ],
    }
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
    formatPrice(value) {
      return `R$${Number(value).toFixed(2).replace('.', ',')}`
    },
    async fetchService() {
      const id = this.$route.params.id
      try {
        const response = await api.get(`/servicead/${id}`)
        const s = response.data
        // Supondo que s.selfEmployed já tem _id, name, email
        this.service = {
          title: s.title,
          price: s.price,
          category: s.category,
          description: s.description,
          selfEmployed: s.selfEmployed
        }
      } catch (error) {
        console.error('Erro ao carregar serviço:', error)
      }
    },
    async fetchClient() {
      const token = localStorage.getItem('token')
      try {
        const response = await api.get('/user/myprofile', {
          headers: { Authorization: `Bearer ${token}` }
        })
        const u = response.data
        this.client = {
          _id: u._id,
          name: u.name,
          email: u.email
        }
      } catch (error) {
        console.error('Erro ao buscar cliente:', error)
      }
    },
    async handleBooking() {
      if (!this.day || !this.address) {
        alert('Por favor, preencha todos os campos antes de agendar.')
        return
      }

      try {
        const token = localStorage.getItem('token')
        await api.post('/appointments/', {
          client: this.client,
          selfEmployed: this.service.selfEmployed,
          day: this.day,
          address: this.address,
          status: 'pending'
        }, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        alert('Serviço agendado com sucesso!')
        this.$router.push('/history')
      } catch (error) {
        console.error('Erro ao agendar serviço:', error)
        alert('Erro ao agendar serviço. Tente novamente mais tarde.')
      }
    },
  },
  mounted() {
    this.fetchService()
    this.fetchClient()
  }
}
</script>

<style scoped>
.img {
  object-fit: cover;
  width: 100%;
  height: 900px;
}
</style>