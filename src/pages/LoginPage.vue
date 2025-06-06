<template>
  <q-page class="flex flex-center">
    <div class="login-card q-pa-lg bg-white rounded-borders shadow-2">
      <h6 class="text-grey-8 q-mb-md">Login</h6>

      <q-form @submit.prevent="handleLogin">
        <div class="q-mb-md">
          <label for="email" class="text-subtitle2">Email</label>
          <q-input
            v-model="email"
            type="email"
            id="email"
            placeholder="Email"
            dense
            outlined
            class="q-mt-sm"
          />
        </div>

        <div class="q-mb-lg">
          <label for="password" class="text-subtitle2">Senha</label>
          <q-input
            v-model="password"
            type="password"
            id="password"
            placeholder="Senha"
            dense
            outlined
            class="q-mt-sm"
          />
        </div>

        <q-btn :loading="loading" label="Entrar" type="submit" color="dark" class="full-width q-mb-md" />

        <div class="text-caption q-mt-sm">
          <a href="#" class="text-primary">Esqueci minha senha</a><br />
          <router-link to="/register" class="text-primary">Ainda não se cadastrou?</router-link>
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '../services/useAuth' // ou ajuste o caminho conforme sua estrutura

const email = ref('')
const password = ref('')
const router = useRouter()

const { login, error, loading } = useAuth()

const handleLogin = async () => {
  const success = await login(email.value, password.value)

  if (success) {
    alert('Login realizado com sucesso!')
    router.push('/')
  } else {
    alert('Erro ao realizar login: ' + error.value)
    console.log(error.value.message);
  }
}
</script>

<style scoped>
.q-page {
  background-image: url('../assets/background.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
}

.login-card {
  width: 300px;
  border-radius: 12px;
}
</style>
