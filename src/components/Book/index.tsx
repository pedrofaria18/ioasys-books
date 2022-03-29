import { useMemo } from 'react'

import { IBookResponse } from '../../types/book'
import { Container, Content, Description, Infos } from './styles'

interface IBook {
  book: IBookResponse
  onClick: (book: IBookResponse) => void
}

export function Book({ book, onClick }: IBook) {
  const { imageUrl, title, authors, pageCount, publisher, published } = book

  const authorsFormatted = useMemo(() => {
    if (authors.length === 1) return authors[0]
    return `${authors[0]} e outros`
  }, [authors])

  return (
    <Container onClick={() => onClick(book)}>
      <img src={imageUrl} alt="" />

      <Content>
        <Infos>
          <h1>{title}</h1>

          <h2>{authorsFormatted}</h2>
        </Infos>

        <Description>
          <p>{pageCount} páginas</p>
          <p>Editora {publisher}</p>
          <p>Publicado em {published}</p>
        </Description>
      </Content>
    </Container>
  )
}
