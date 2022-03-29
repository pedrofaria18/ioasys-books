import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://books.ioasys.com.br/api/v1',
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')

  if (config?.headers && token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

api.interceptors.response.use(
  (response) => response,

  async (error) => {
    if (error.response.status === 401) {
      const refreshTokenStorage = localStorage.getItem('refreshToken')
      const { headers } = await api.post('/auth/refresh-token', {
        refreshToken: refreshTokenStorage,
      })
      if (headers) {
        const token = headers.authorization
        const refreshToken = headers['refresh-token']

        localStorage.setItem('token', token)
        localStorage.setItem('refreshToken', refreshToken)
        api.defaults.headers.common.Authorization = `Bearer ${headers.authorization}`
      }

      return axios(error.config)
    }
    return Promise.reject(error)
  }
)
