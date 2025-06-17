import { ref } from 'vue'
import { api } from 'src/boot/axios'

export function useServiceAd() {
  const error = ref(null)
  const loading = ref(false)

  const createServiceAd = async (title, description, price, category) => {
    loading.value = true
    error.value = null

    try {
      const payload = {
        title,
        description,
        price,
        category,
      }

      const token = localStorage.getItem('token')
      const headers = token ? { Authorization: `Bearer ${token}` } : {}

      const response = await api.post('/servicead', payload, { headers })

      return response.data
    } catch (err) {
      error.value = err.response?.data?.message || 'Erro ao anunciar serviço'
      console.log('Error creating service ad:', err)
      return null
    } finally {
      loading.value = false
    }
  }

  return {
    createServiceAd,
    error,
    loading,
  }
}
