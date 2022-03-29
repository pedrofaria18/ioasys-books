import { useAuth } from '../../context/useAuth'
import { Logo } from '../Logo'
import { Profile } from '../Profile'
import { Container } from './styles'

export function Header() {
  const { user, logout } = useAuth()
  const { name } = user

  return (
    <Container>
      <Logo />
      <Profile name={name} onClick={logout} />
    </Container>
  )
}
