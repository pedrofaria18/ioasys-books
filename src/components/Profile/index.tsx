import { FiLogOut } from 'react-icons/fi'

import { useAuth } from '../../context/useAuth'
import { IconButton } from '../IconButtom'
import { Container, Text } from './styles'

export function Profile() {
  const { user, logout } = useAuth()
  const { name } = user

  return (
    <Container>
      <Text>
        Bem vindo,
        <strong> {name}</strong>
      </Text>

      <IconButton icon={<FiLogOut size={16} color="#000" />} onClick={logout} />
    </Container>
  )
}
