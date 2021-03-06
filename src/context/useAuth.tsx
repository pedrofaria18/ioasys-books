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
    const token = localStorage.getItem('@Ioasys:Token')
    const refreshToken = localStorage.getItem('@Ioasys:RefreshToken')
    const user = localStorage.getItem('@Ioasys:User')

    if (token && refreshToken && user) {
      setAuthenticated(true)
      setUser(JSON.parse(user))
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

        localStorage.setItem('@Ioasys:User', JSON.stringify(userData))
        localStorage.setItem('@Ioasys:Token', token)
        localStorage.setItem('@Ioasys:RefreshToken', refreshToken)

        api.defaults.headers.common.Authorization = `Bearer ${token}`

        setError(false)
        setUser(userData)
        setAuthenticated(true)
        navigate('/')
      })
      .catch(() => {
        setError(true)
      })
  }

  async function logout() {
    localStorage.removeItem('@Ioasys:User')
    localStorage.removeItem('@Ioasys:Token')
    localStorage.removeItem('@Ioasys:RefreshToken')

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
