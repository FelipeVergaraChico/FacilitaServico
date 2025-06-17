import { ref } from 'vue'
import { api } from 'src/boot/axios'

export function useAuth() {
  const error = ref(null)
  const loading = ref(false)


  const register = async ( name, email, password, cpfcnpj, address, cep, birthday, position, job, confirmPassword) => {
    loading.value = true
    error.value = null

    try {
      const response = await api.post('/user/register', {
        name,
        email,
        job,
        password,
        confirmpassword: confirmPassword,
        cpfcnpj,
        address,
        cep,
        birthday,
        position,
      })

      const token = response.data.token
      localStorage.setItem('token', token)

      return true
    } catch (err) {
      error.value = err.response?.data?.message || 'Erro ao registrar'

      return false
    } finally {
      loading.value = false
    }
  }

  const login = async (email, password) => {
    loading.value = true
    error.value = null

    try {
      const response = await api.post('/user/login', {
        email,
        password,
      })

      const token = response.data.token
      localStorage.setItem('token', token)

      // Aqui você pode redirecionar ou fazer outra lógica
      return true
    // eslint-disable-next-line no-unused-vars
    } catch (err) {
      error.value = 'Credenciais inválidas'
      return false
    } finally {
      loading.value = false
    }
  }

  const logout = () => {
    localStorage.removeItem('token')
    // redirecionar ou limpar o estado global, se necessário
  }

  return { login, logout, error, loading, register  }
}