import { BookList } from '../../components/BookList'
import { Header } from '../../components/Header'
import { Pagination } from '../../components/Pagination'
import { Container, Content } from './styles'

export function Home() {
  return (
    <Container>
      <Content>
        <Header />
        <BookList />
        <Pagination />
      </Content>
    </Container>
  )
}
