<template>
  <q-page class="flex flex-center">
    <div class="edit-profile-card q-pa-lg bg-white rounded-borders shadow-2">
      <div class="text-h6 q-mb-md">Editar Perfil</div>

      <q-form @submit.prevent="saveChanges">
        <q-input v-model="form.name" label="Nome" dense outlined class="q-mb-md" />
        <q-input v-model="form.email" label="Email" type="email" dense outlined class="q-mb-md" />
        <q-select
          v-model="form.job"
          :options="professionOptions"
          label="Cargo"
          :disable="form.position === 'Client'"
          dense
          outlined
          class="q-mb-md"
        />
        <q-input
          v-model="form.password"
          label="Senha"
          type="password"
          dense
          outlined
          class="q-mb-md"
        />
        <q-input
          v-model="form.confirmpassword"
          label="Confirmar Senha"
          type="password"
          dense
          outlined
          class="q-mb-md"
        />

        <q-input v-model="form.cpfcnpj" label="CPF/CNPJ" dense outlined class="q-mb-md" />

        <q-input v-model="form.address" label="Endereço" dense outlined class="q-mb-md" />

        <q-input v-model="form.cep" label="CEP" dense outlined class="q-mb-md" />

        <div class="row q-gutter-sm">
          <q-btn label="Salvar" type="submit" color="primary" class="col" />
          <q-btn flat label="Cancelar" @click="cancelEdit" class="col" />
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
import { api } from 'src/boot/axios'
import { useAuth } from '../services/useAuth'

export default {
  name: 'EditProfilePage',
  data() {
    return {
      form: {
        name: '',
        email: '',
        job: '',
        password: '',
        confirmpassword: '',
        position: '',
        cpfcnpj: '',
        address: '',
        cep: '',
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
        'Barbeiro',
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
    async fetchProfile() {
      const token = localStorage.getItem('token')
      try {
        const response = await api.get('/user/myprofile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        this.form = response.data
      } catch (err) {
        alert('Erro ao carregar perfil')
        console.error(err)
      }
    },
    async saveChanges() {
      const token = localStorage.getItem('token')
      try {
        await api.patch('/user/edit', this.form, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        alert('Perfil atualizado com sucesso!')
        this.$router.push('/myprofile')
      } catch (err) {
        alert('Erro ao salvar perfil')
        console.error(err)
      }
    },
    cancelEdit() {
      this.$router.push('/myprofile')
    },
  },
  mounted() {
    this.fetchProfile()
  },
}
</script>

<style scoped>
.edit-profile-card {
  width: 350px;
  max-width: 90vw;
  border-radius: 12px;
}
</style>
