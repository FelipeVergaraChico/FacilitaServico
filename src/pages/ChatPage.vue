<template>
  <q-page class="q-pa-md bg-grey-2">
    <div class="text-h5 q-mb-md">Conversas</div>

    <q-card v-if="chats.length === 0" class="q-pa-md">
      <div class="text-subtitle1">Nenhuma conversa encontrada.</div>
    </q-card>

    <q-list bordered class="bg-white rounded-borders" v-else>
      <q-item
        v-for="chat in chats"
        :key="chat._id"
        clickable
        :to="`/chat/${chat._id}`"
        class="q-pa-sm"
      >
        <q-item-section avatar>
          <q-avatar>
            <img :src="`https://facilitaservicoapi.onrender.com/img/${user.image}`" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ getOtherUser(chat)?.name }}</q-item-label>
          <q-item-label caption>
            Serviço: {{ chat.appointmentId?.title || 'Agendamento' }}
          </q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import { api } from 'src/boot/axios'

export default {
  name: 'ChatPage',
  data() {
    return {
      user: null,
      chats: [],
    }
  },
  methods: {
    async fetchUser() {
      const token = localStorage.getItem('token')
      const res = await api.get('/user/myprofile', {
        headers: { Authorization: `Bearer ${token}` }
      })
      this.user = res.data
    },
    async fetchChats() {
      const token = localStorage.getItem('token')

      try {
        const res = await api.get('/chat/', {
          headers: { Authorization: `Bearer ${token}` },
        })
        this.chats = res.data
      } catch (error) {
        this.$q.notify({
          type: 'negative',
          message: 'Erro ao carregar conversas',
        })
        console.error(error)
      }
    },
    getOtherUser(chat) {
      if (!this.user || !chat.participants) return null
      return chat.participants.find(p => p._id !== this.user._id)
    },
  },
  async mounted() {
    await this.fetchUser()
    await this.fetchChats()
  },
}
</script>
