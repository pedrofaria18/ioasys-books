import axios from 'axios'

const BASE_URL = 'https://books.ioasys.com.br/api/v1'

export const api = axios.create({
  baseURL: BASE_URL,
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('@Ioasys:Token')

  if (config?.headers && token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

api.interceptors.response.use(
  (response) => response,

  async (error) => {
    if (error.response.status === 401) {
      const refreshTokenStorage = localStorage.getItem('@Ioasys:RefreshToken')
      const { headers } = await api.post('/auth/refresh-token', {
        refreshToken: refreshTokenStorage,
      })
      if (headers) {
        const token = headers.authorization
        const refreshToken = headers['refresh-token']

        localStorage.setItem('@Ioasys:Token', token)
        localStorage.setItem('@Ioasys:RefreshToken', refreshToken)
        api.defaults.headers.common.Authorization = `Bearer ${token}`
      }

      return axios(error.config)
    }
    return Promise.reject(error)
  }
)
