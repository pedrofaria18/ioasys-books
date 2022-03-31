import axios, { AxiosError } from 'axios'

import { refreshToken } from './refreshToken'

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('@Ioasys:Token')

  if (config?.headers && token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

api.interceptors.response.use(
  (response) => {
    return response
  },

  async (error) => {
    const token = localStorage.getItem('@Ioasys:Token')

    if (error.response.status === 401 && token) {
      const response = await refreshToken(error)
      return response
    }

    return Promise.reject(error)
  }
)
