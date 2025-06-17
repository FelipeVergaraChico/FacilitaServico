<template>
  <q-page class="q-pa-md bg-grey-2 column items-center">
    <q-card class="full-width" style="max-width: 800px">
      <q-card-section class="bg-dark text-white">
        <div class="text-h6">
          Conversa com {{ otherUser?.name || '...' }}
        </div>
      </q-card-section>

      <q-separator />

      <!-- Mensagens -->
      <div
        ref="messagesContainer"
        class="scroll-area"
        style="height: 400px; overflow-y: auto"
      >
        <div
          v-for="msg in messages"
          :key="msg._id"
          class="q-mb-sm"
          :class="msg.senderId === user._id ? 'text-right' : 'text-left'"
        >
          <q-chip
            :color="msg.senderId === user._id ? 'primary' : 'grey-6'"
            text-color="white"
            class="text-body2"
          >
            {{ msg.message }}
          </q-chip>
        </div>
      </div>

      <!-- Input -->
      <q-separator />
      <q-card-actions>
        <q-input
          v-model="newMessage"
          placeholder="Digite sua mensagem..."
          outlined
          dense
          class="col"
          @keyup.enter="sendMessage"
        />
        <q-btn color="dark" label="Enviar" @click="sendMessage" />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script>
import { api } from 'src/boot/axios'

export default {
  name: 'ChatDetail',
  data() {
    return {
      chatId: this.$route.params.id,
      user: null,
      messages: [],
      chat: null,
      otherUser: null,
      newMessage: '',
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
    async fetchChat() {
      const token = localStorage.getItem('token')
      const res = await api.get('/chat/', {
        headers: { Authorization: `Bearer ${token}` }
      })
      const allChats = res.data
      this.chat = allChats.find(c => c._id === this.chatId)
      this.otherUser = this.chat.participants.find(p => p._id !== this.user._id)
    },
    async fetchMessages() {
      try {
        const token = localStorage.getItem('token')
        const res = await api.get(`/chat/${this.chatId}/messages`, {
          headers: { Authorization: `Bearer ${token}` }
        })
        this.messages = Array.isArray(res.data.messages) ? res.data.messages : []
      } catch (error) {
        console.error('Erro ao carregar mensagens:', error)
        this.messages = []
      }
      this.scrollToBottom()
    },
    
    async sendMessage() {
      if (!this.newMessage.trim()) return

      try {
        const token = localStorage.getItem('token')
        await api.post(
          `/chat/${this.chatId}/message`,
          {
            chatId: this.chatId,
            message: this.newMessage,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        this.newMessage = ''
        await this.fetchMessages()
        this.scrollToBottom()
      } catch (error) {
        console.error('Erro ao enviar mensagem:', error)
      }
    },
    scrollToBottom() {
      this.$nextTick(() => {
        const el = this.$refs.messagesContainer
        if (el) {
          el.scrollTop = el.scrollHeight
        }
      })
    },
  },
  async mounted() {
    await this.fetchUser()
    await this.fetchChat()
    await this.fetchMessages()
  },
}
</script>

<style scoped>
.scroll {
  scrollbar-width: thin;
}
</style>
