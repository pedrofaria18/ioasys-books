import { Container } from './styles'

interface IError {
  error: string
}

export function Error({ error }: IError) {
  return <Container>{error}</Container>
}
