import LogoSVG from '../../assets/Logo.svg'
import LogoWhiteSVG from '../../assets/LogoWhite.svg'
import { Container } from './styles'

interface ILogo {
  isWhite?: boolean
}

export function Logo({ isWhite }: ILogo) {
  return (
    <Container isWhite={isWhite}>
      <img src={isWhite ? LogoWhiteSVG : LogoSVG} alt="Logo Ioasys" />
      <h1>Books</h1>
    </Container>
  )
}
