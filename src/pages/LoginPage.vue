<template>
  <q-page class="flex flex-center bg-grey-10">
    <div class="login-card q-pa-lg bg-white rounded-borders shadow-2">
      <h6 class="text-grey-8 q-mb-md">Login</h6>

      <q-form @submit.prevent="onLogin">
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

        <q-btn label="Entrar" type="submit" color="dark" class="full-width q-mb-md" />

        <div class="text-caption q-mt-sm">
          <a href="#" class="text-primary">Esqueci minha senha</a><br />
          <a href="/register" class="text-primary">Ainda não se cadastrou?</a>
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    onLogin() {
      // Simulação de login
      const validEmail = 'test@example.com'
      const validPassword = '123456'

      if (this.email === validEmail && this.password === validPassword) {
        // Sucesso: redirecionar para /dashboard
        this.$router.push('/')
      } else {
        // Erro: mostrar alerta ou snackbar
        this.$q.notify({
          type: 'negative',
          message: 'Email ou senha inválidos'
        })
      }
    }
  }
}
</script>

<style scoped>

.login-card {
  width: 300px;
  border-radius: 12px;
}
</style>
