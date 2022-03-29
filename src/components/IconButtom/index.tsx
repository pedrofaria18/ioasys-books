import { Container } from './styles'

interface IIconButton {
  icon: React.ReactNode
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
