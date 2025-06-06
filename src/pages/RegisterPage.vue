<template>
  <q-page class="flex flex-center">
    <div class="register-card q-pa-lg bg-white rounded-borders shadow-2">
      <h6 class="text-grey-8 q-mb-md">Registrar Cliente</h6>
      <q-form @submit.prevent="onRegister">
        <div class="q-mb-md">
          <label for="name" class="text-subtitle2">Nome de Usuário</label>
          <q-input
            v-model="form.name"
            id="name"
            placeholder="Nome"
            dense
            outlined
            class="q-mt-sm"
          />
        </div>
        <div class="q-mb-md">
          <label for="email" class="text-subtitle2">Email</label>
          <q-input
            v-model="form.email"
            type="email"
            id="email"
            placeholder="Email"
            dense
            outlined
            class="q-mt-sm"
          />
        </div>

        <div class="q-mb-md">
          <label for="cpfcnpj" class="text-subtitle2">CPF / CNPJ</label>
          <q-input
            v-model="form.cpfcnpj"
            id="cpfcnpj"
            placeholder="CPF ou CNPJ"
            dense
            outlined
            class="q-mt-sm"
          />
        </div>

        <div class="q-mb-md">
          <label for="address" class="text-subtitle2">Endereço</label>
          <q-input
            v-model="form.address"
            id="address"
            placeholder="Rua, Número, Bairro"
            dense
            outlined
            class="q-mt-sm"
          />
        </div>

        <div class="q-mb-md">
          <label for="cep" class="text-subtitle2">CEP</label>
          <q-input v-model="form.cep" id="cep" placeholder="CEP" dense outlined class="q-mt-sm" />
        </div>

        <div class="q-mb-md">
          <label for="birthday" class="text-subtitle2">Data de Nascimento</label>
          <q-input
            v-model="form.birthday"
            type="date"
            id="birthday"
            dense
            outlined
            class="q-mt-sm"
          />
        </div>

        <div class="q-mb-md">
          <label for="position" class="text-subtitle2">Posição</label>
          <q-select
            v-model="form.position"
            :options="['Client', 'Self-employed']"
            id="position"
            dense
            outlined
            class="q-mt-sm"
            emit-value
            map-options
          />
        </div>

        <div class="q-mb-md">
          <q-select
            v-if="form.position === 'Autônomo'"
            v-model="form.job"
            :options="professionOptions"
            label="Profissão"
            outlined
            dense
            class="q-mb-md"
          />

          <label for="password" class="text-subtitle2">Senha</label>
          <q-input
            v-model="form.password"
            type="password"
            id="password"
            placeholder="Senha"
            dense
            outlined
            class="q-mt-sm"
          />
        </div>

        <div class="q-mb-lg">
          <label for="confirmPassword" class="text-subtitle2">Confirmar Senha</label>
          <q-input
            v-model="form.confirmPassword"
            type="password"
            id="confirmPassword"
            placeholder="Confirmar Senha"
            dense
            outlined
            class="q-mt-sm"
            :error="passwordMismatch"
            error-message="As senhas não coincidem"
          />
        </div>

        <q-btn label="Cadastrar" type="submit" color="dark" class="full-width" />
      </q-form>
      <div class="text-caption q-mt-sm">
        <a href="#" class="text-primary">Esqueci minha senha</a><br />
        <a href="/login" class="text-primary">Já possui uma conta?</a>
      </div>
    </div>
  </q-page>
</template>

<script>
import { useAuth } from '../services/useAuth' // caminho ajustado conforme sua pasta
export default {
  name: 'RegisterPage',
  data() {
    return {
      form: {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        cpfcnpj: '',
        address: '',
        cep: '',
        birthday: '',
        position: '',
        job: '',
      },
      professionOptions: [
        'Designer Gráfico',
        'Desenvolvedor Web',
        'Fotógrafo',
        'Personal Trainer',
        'Consultor Financeiro',
        'Artesão',
        'Manicure/Pedicure',
        'Cabeleireiro',
        'Eletricista',
        'Encanador',
        'Mecânico',
        'Redator Freelancer',
        'Tradutor',
        'Professor Particular',
        'Técnico de Informática',
      ],
    }
  },
  computed: {
    passwordMismatch() {
      return this.form.password !== this.form.confirmPassword
    },
  },
  created() {
    const auth = useAuth()
    this.register = auth.register
    this.authError = auth.error
    this.authLoading = auth.loading
  },
  methods: {
    async onRegister() {
      if (this.passwordMismatch) {
        alert('As senhas não coincidem')
        return
      }

      if (this.form.position === 'Autônomo' && !this.form.job) {
        alert('Por favor, selecione uma profissão')
        return
      }

      const success = await this.register(
        this.form.name,
        this.form.email,
        this.form.password,
        this.form.cpfcnpj,
        this.form.address,
        this.form.cep,
        this.form.birthday,
        this.form.position,
        this.form.job,
        this.form.confirmPassword
      )


      if (success) {
        alert('Registro realizado com sucesso!')
        this.$router.push('/login')
      } else {
        alert('Erro ao registrar: ' + this.authError.message)
      }
    },
  },
}
</script>

<style scoped>
.q-page {
  background-image: url('../assets/background.png'); /* caminho relativo da imagem */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
}
.register-card {
  width: 300px;
  margin: 24px;
  border-radius: 12px;
}
</style>
