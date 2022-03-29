import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { Form } from '../../components/Form'
import { Logo } from '../../components/Logo'
import { useAuth } from '../../context/useAuth'
import { Container } from './styles'

export function Login() {
  const navigate = useNavigate()

  const { authenticated } = useAuth()

  useEffect(() => {
    if (authenticated) {
      navigate('/')
    }
  })

  return (
    <Container>
      <Logo isWhite />
      <Form />
    </Container>
  )
}
