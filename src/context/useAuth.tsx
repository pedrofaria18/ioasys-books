import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react'
import { useNavigate } from 'react-router-dom'

import { api } from '../service/api'
import { IUserResponse } from '../types/user'

interface IAuthData {
  user: IUserResponse
  authenticated: boolean
  error: boolean
  setAuthenticated: Dispatch<SetStateAction<boolean>>
  setError: Dispatch<SetStateAction<boolean>>
  login: (email: string, password: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext({} as IAuthData)

export function AuthProvider({ children }: { children: ReactNode }) {
  const navigate = useNavigate()

  const [user, setUser] = useState({} as IUserResponse)
  const [authenticated, setAuthenticated] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)

  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const token = localStorage.getItem('token')
    const user = localStorage.getItem('user')

    if (token && user) {
      setAuthenticated(true)
      setUser(JSON.parse(user))
      api.defaults.headers.common.Authorization = `Bearer ${token}`
    }

    setLoading(false)
  }, [])

  async function login(email: string, password: string) {
    await api
      .post('/auth/sign-in', { email, password })
      .then(async (response) => {
        const userData = await response.data
        const token = response.headers.authorization
        const refreshToken = response.headers['refresh-token']

        localStorage.setItem('user', JSON.stringify(userData))
        localStorage.setItem('token', token)
        localStorage.setItem('refreshToken', refreshToken)

        api.defaults.headers.common.Authorization = `Bearer ${token}`

        setUser(userData)
        setError(false)
        setAuthenticated(true)
        navigate('/')
      })
      .catch(() => {
        setError(true)
      })
  }

  async function logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    localStorage.removeItem('refreshToken')

    setUser({} as IUserResponse)
    setAuthenticated(false)
    navigate('/login')
  }

  if (loading) {
    return <h1>Carregando...</h1>
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        authenticated,
        error,
        setAuthenticated,
        setError,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
