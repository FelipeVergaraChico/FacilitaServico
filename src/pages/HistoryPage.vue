<template>
  <q-page class="q-pa-md bg-grey-2">
    <div class="text-h5 q-mb-md">Histórico de Agendamentos</div>

    <q-card v-if="appointments.length === 0" class="q-pa-md">
      <div class="text-subtitle1">Nenhum agendamento encontrado.</div>
    </q-card>

    <div class="row q-col-gutter-md">
      <div
        v-for="appointment in filteredAppointments"
        :key="appointment._id"
        class="col-12 col-md-6"
      >
        <q-card class="q-pa-md">
          <div class="row no-wrap items-center">
            <q-img
              src="../assets/teste.png"
              class="rounded-borders"
              style="width: 100px; height: 100px; object-fit: cover"
            />
            <div class="q-ml-md">
              <div class="text-caption">Data: <b>{{ formatDate(appointment.day) }}</b></div>
              <div class="text-caption">Cliente: <b>{{ appointment.client?.name }}</b></div>
              <div class="text-caption">Profissional: <b>{{ appointment.selfEmployed?.name }}</b></div>
              <q-badge
                :color="appointment.status === 'finished' ? 'green' : appointment.status === 'rejected' ? 'red' : 'blue'"
                class="q-mt-xs"
              >
                {{ appointment.status }}
              </q-badge>
              <!-- Botões só aparecem para Self-employed e se status for pending -->
              <div v-if="isSelfEmployed && appointment.status === 'pending'" class="q-mt-sm">
                <q-btn
                  color="green"
                  label="Finalizar"
                  size="sm"
                  class="q-mr-sm"
                  @click="acceptAppointment(appointment._id)"
                />
                <q-btn
                  color="red"
                  label="Rejeitar"
                  size="sm"
                  @click="rejectAppointment(appointment._id)"
                />
              </div>
            </div>
          </div>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { api } from 'src/boot/axios'
import { useAuth } from 'src/services/useAuth'

export default {
  data() {
    return {
      appointments: [],
      userId: null,
      userPosition: '',
      userEmail: '',
    }
  },
  computed: {
    isSelfEmployed() {
      return this.userPosition === 'Self-employed'
    },
    filteredAppointments() {
      if (this.isSelfEmployed) {
        return this.appointments.filter(a => a.selfEmployed?.email === this.userEmail)
      } else {
        return this.appointments.filter(a => a.client?.email === this.userEmail)
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
    async fetchUserAndAppointments() {
      const token = localStorage.getItem('token')
      try {
        const userResponse = await api.get('/user/myprofile', {
          headers: { Authorization: `Bearer ${token}` },
        })
        this.userId = userResponse.data._id
        this.userPosition = userResponse.data.position
        this.userEmail = userResponse.data.email

        const res = await api.get(`/appointments/user/${this.userId}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        this.appointments = res.data
      } catch (error) {
        alert('Erro ao carregar agendamentos')
        console.error('Erro ao carregar agendamentos:', error)
      }
    },
    formatDate(dateStr) {
      if (!dateStr) return ''
      const date = new Date(dateStr)
      return date.toLocaleDateString('pt-BR')
    },
    async acceptAppointment(appointmentId) {
      const token = localStorage.getItem('token')
      try {
        console.log('Aceitando agendamento:', appointmentId)
        const res = await api.patch(`/appointments/${appointmentId}/finish`, {}, {
          headers: { Authorization: `Bearer ${token}` }
        })
        console.log('Resposta do servidor:', res.data)
        const idx = this.appointments.findIndex(a => a._id === appointmentId)
        if (idx !== -1) this.appointments[idx].status = 'finished'
        alert('Agendamento marcado como finalizado!')
      } catch (error) {
        alert('Erro ao finalizar agendamento')
        console.error('Erro ao finalizar agendamento:', error)
      }
    },
    async rejectAppointment(appointmentId) {
      const token = localStorage.getItem('token')
      try {
        await api.patch(`/appointments/${appointmentId}/reject`, {}, {
          headers: { Authorization: `Bearer ${token}` }
        })
        const idx = this.appointments.findIndex(a => a._id === appointmentId)
        if (idx !== -1) this.appointments[idx].status = 'rejected'
        alert('Agendamento rejeitado!')
      } catch (error) {
        alert('Erro ao rejeitar agendamento')
        console.error('Erro ao rejeitar agendamento:', error)
      }
    }
  },
  mounted() {
    this.fetchUserAndAppointments()
  },
}
</script>
