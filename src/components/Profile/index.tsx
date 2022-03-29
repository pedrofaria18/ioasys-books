import { FiLogOut } from 'react-icons/fi'

import { IconButton } from '../IconButtom'
import { Container, Text } from './styles'

interface IProfile {
  name: string
  onClick: () => void
}

export function Profile({ name, onClick }: IProfile) {
  return (
    <Container>
      <Text>
        Bem vindo,
        <strong> {name}</strong>
      </Text>

      <IconButton
        icon={<FiLogOut size={16} color="#000" />}
        onClick={onClick}
      />
    </Container>
  )
}
