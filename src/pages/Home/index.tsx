import { BookList } from '../../components/BookList'
import { Header } from '../../components/Header'
import { Pagination } from '../../components/Pagination'
import { BooksProvider } from '../../context/useBooks'
import { Container, Content } from './styles'

export function Home() {
  return (
    <BooksProvider>
      <Container>
        <Content>
          <Header />
          <BookList />
          <Pagination />
        </Content>
      </Container>
    </BooksProvider>
  )
}
