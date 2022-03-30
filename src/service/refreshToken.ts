import { api } from './api'

export async function refreshToken(error: unknown) {
  return new Promise((resolve, reject) => {
    try {
      const refreshTokenStorage = localStorage.getItem('@Ioasys:RefreshToken')
      api
        .post('/auth/refresh-token', {
          refreshToken: refreshTokenStorage,
        })
        .then((response) => {
          const token = response.headers.authorization
          const refreshToken = response.headers['refresh-token']

          localStorage.setItem('@Ioasys:Token', token)
          localStorage.setItem('@Ioasys:RefreshToken', refreshToken)
          api.defaults.headers.common.Authorization = `Bearer ${token}`

          return resolve(response)
        })
        .catch(() => {
          reject(error)
        })
    } catch (err) {
      return reject(err)
    }
  })
}
