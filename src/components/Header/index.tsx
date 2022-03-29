import { Logo } from '../Logo'
import { Profile } from '../Profile'
import { Container } from './styles'

export function Header() {
  return (
    <Container>
      <Logo />
      <Profile />
    </Container>
  )
}
