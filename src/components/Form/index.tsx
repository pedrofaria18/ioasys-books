import { useState } from 'react'

import { useAuth } from '../../context/useAuth'
import { Error } from '../Error'
import { Input } from '../Input'
import { Container } from './styles'

export function Form() {
  const { login, error } = useAuth()

  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (value: string, name: string) => {
    setUser({
      ...user,
      [name]: value,
    })
  }

  const handleSubmit = async () => {
    setLoading(true)
    await login(user.email, user.password)
    setLoading(false)
  }

  return (
    <Container>
      <Input type="email" label="Email" onChange={handleChange} />
      <Input
        type="password"
        label="Senha"
        onChange={handleChange}
        onClick={handleSubmit}
        loading={loading}
        haveButton
      />
      {error && <Error error="E-mail e/ou senha incorretos." />}
    </Container>
  )
}
