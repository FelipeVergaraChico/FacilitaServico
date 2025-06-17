<template>
  <q-page class="flex flex-center">
    <div class="profile-card q-pa-lg bg-white rounded-borders shadow-2">
      <div class="row items-center q-mb-md">
        <q-avatar size="64px" style="cursor: pointer;" @click="$router.push('/myprofile')">
          <img :src="`https://facilitaservicoapi.onrender.com/img/${user.image}`" alt="avatar"/>
        </q-avatar>
        <div class="q-ml-md">
          <div class="text-h6">{{ user.name }}</div>
          <div class="text-caption text-grey">{{ user.email }}</div>
        </div>
        <q-space />
        <q-btn flat dense icon="close" @click="goBack" />
      </div>

      <q-separator />

      <div class="q-my-md">
        <div class="q-mb-sm text-bold">Nome</div>
        <div>{{ user.name }}</div>
      </div>

      <div class="q-my-md">
        <div class="q-mb-sm text-bold">Endereço email</div>
        <div>{{ user.email }}</div>
      </div>

      <div class="q-my-md">
        <div class="q-mb-sm text-bold">Endereço</div>
        <div>{{ user.address }}</div>
      </div>

        <q-btn
        label="Editar Perfil"
        color="primary"
        class="full-width q-mt-lg"
        @click="() => $router.push('/edit-profile')"
      />
    </div>
  </q-page>
</template>

<script>
import { api } from 'src/boot/axios'
import { useAuth } from '../services/useAuth'

export default {
  name: 'ProfilePage',
  data() {
    return {
      user: {
        name: '',
        email: '',
        address: '',
        image: ''
      }
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
    async fetchUserProfile() {
      const token = localStorage.getItem('token')

      try {
        const response = await api.get('/user/myprofile', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        this.user = response.data
      } catch (err) {
        alert('Erro ao carregar perfil do usuário')
        console.error(err)
      }
    },

    goBack() {
      this.$router.go(-1)
    }
  },
  mounted() {
    this.fetchUserProfile()
  }
}
</script>

<style scoped>
.profile-card {
  width: 350px;
  max-width: 90vw;
  border-radius: 12px;
}
</style>
