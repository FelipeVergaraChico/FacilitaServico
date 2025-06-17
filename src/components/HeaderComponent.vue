<template>
  <div class="header">
    <div class="header-left">
      <nav class="nav">
        <a href="/">Inicio</a>
        <a href="/jobs">Serviços</a>
        <a href="/chat">Chats</a>
        <a href="/history">Histórico</a>
        <a href="#">Contato</a>
      </nav>
    </div>
    <div class="header-right">
      <template v-if="isLoggedIn">
        <button class="btn btn-outline" @click="logout">Sair</button>
        <button class="avatar-btn" @click="$router.push('/myprofile')">
          <img
            v-if="user.image"
            :src="`https://facilitaservicoapi.onrender.com/img/${user.image}`"
            alt="Perfil"
            class="avatar-img"
          />
        </button>
      </template>
      <template v-else>
        <RouterLink to="/login">
          <button class="btn btn-outline">Logar</button>
        </RouterLink>
        <RouterLink to="/register">
          <button class="btn btn-primary">Registrar</button>
        </RouterLink>
      </template>
    </div>
  </div>
</template>

<script>
import { api } from 'src/boot/axios'

export default {
  name: 'HeaderComponent',
  data() {
    return {
      isLoggedIn: false,
      user: {
        image: ''
      }
    }
  },
  created() {
    this.checkAuth()
    if (this.isLoggedIn) {
      this.fetchUser()
    }
  },
  methods: {
    checkAuth() {
      this.isLoggedIn = !!localStorage.getItem('token')
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
      } catch (error) {
        this.user = { image: '' }
        console.error('Erro ao buscar usuário:', error)
      }
    },
    logout() {
      localStorage.removeItem('token')
      this.isLoggedIn = false
      this.$router.push('/login')
    },
  },
  watch: {
    isLoggedIn(newVal) {
      if (newVal) {
        this.fetchUser()
      } else {
        this.user = { image: '' }
      }
    }
  }
}
</script>

<style>
.header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.header-left {
  display: flex;
  align-items: center;
  gap: 24px;
}

.nav {
  display: flex;
  gap: 20px;
}

.nav a {
  text-decoration: none;
  color: #444;
  font-weight: 500;
}

.nav a:hover {
  color: #000;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 12px;
}

.btn {
  padding: 6px 14px;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
}

.btn-outline {
  border: 1px solid #666;
  background-color: transparent;
  color: #333;
}

.btn-outline:hover {
  background-color: #eee;
}

.btn-primary {
  background-color: #000;
  color: #fff;
  border: none;
}

.btn-primary:hover {
  background-color: #333;
}

.avatar-btn {
  border: none;
  background: none;
  padding: 0;
  margin-right: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.avatar-img, .avatar-placeholder {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  background: #eee;
  display: block;
}

.avatar-placeholder {
  background: #ccc;
}
</style>
