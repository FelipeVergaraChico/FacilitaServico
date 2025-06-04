<template>
  <q-page class="flex flex-center bg-grey-10">
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
          <label for="cpfCnpj" class="text-subtitle2">CPF / CNPJ</label>
          <q-input
            v-model="form.cpfCnpj"
            id="cpfCnpj"
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
            :options="['Cliente', 'Autônomo']"
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
            v-model="form.profession"
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
export default {
  name: 'RegisterPage',
  data() {
    return {
      form: {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        cpfCnpj: '',
        address: '',
        cep: '',
        birthday: '',
        position: '',
        profission: '',
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
  methods: {
    onRegister() {
      if (this.passwordMismatch) {
        this.$q.notify({
          type: 'negative',
          message: 'As senhas não coincidem.',
        })
        return
      }
      if (this.form.position === 'autonomo' && !this.form.profission) {
        this.$q.notify({
          type: 'negative',
          message: 'Informe sua profissão.',
        })
        return
      }

      console.log('Dados do registro:', this.form)
      // Enviar para API, limpar formulário, etc.
    },
  },
}
</script>

<style scoped>
.register-card {
  width: 300px;
  margin: 24px;
  border-radius: 12px;
}
</style>
