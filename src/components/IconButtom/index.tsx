import { ReactNode } from 'react'
import { Container } from './styles'

export interface IIconButton {
  icon: ReactNode
  onClick: () => void
  id?: string
}

export function IconButton({ icon, id, onClick }: IIconButton) {
  return (
    <Container type="button" data-testid={id} onClick={onClick}>
      {icon}
    </Container>
  )
}
