import { useMemo } from 'react'
import { RiDoubleQuotesL } from 'react-icons/ri'

import { useBooks } from '../../context/useBooks'
import Modal from '../Modal'
import { Container, Content, Detail, Details, Infos, Review } from './styles'

interface IBookDetailsModal {
  isOpen: boolean
  setIsOpen: () => void
}

export function BookDetailsModal({ isOpen, setIsOpen }: IBookDetailsModal) {
  const { bookSelected } = useBooks()
  const {
    imageUrl,
    title,
    authors,
    pageCount,
    publisher,
    published,
    language,
    description,
    isbn10,
    isbn13,
  } = bookSelected

  const authorsFormatted = useMemo(() => {
    if (authors.length === 1) return authors[0]
    return authors.join(', ')
  }, [authors])

  return (
    <Modal setIsOpen={setIsOpen} isOpen={isOpen}>
      <Container>
        <img src={imageUrl} alt="" />
        <Content>
          <Infos>
            <h1>{title}</h1>
            <h2>{authorsFormatted}</h2>
          </Infos>

          <Details>
            <h1>
              <strong>INFORMAÇÕES</strong>
            </h1>

            <Detail>
              <p>
                <strong>Páginas</strong>
              </p>
              <p>{pageCount} páginas</p>
            </Detail>

            <Detail>
              <p>
                <strong>Editora</strong>
              </p>
              <p>{publisher}</p>
            </Detail>

            <Detail>
              <p>
                <strong>Publicação</strong>
              </p>
              <p>{published}</p>
            </Detail>

            <Detail>
              <p>
                <strong>Idioma</strong>
              </p>
              <p>{language}</p>
            </Detail>

            <Detail>
              <p>
                <strong>Título Original</strong>
              </p>
              <p>{title}</p>
            </Detail>

            <Detail>
              <p>
                <strong>ISBN-10</strong>
              </p>
              <p>{isbn10}</p>
            </Detail>

            <Detail>
              <p>
                <strong>ISBN-13</strong>
              </p>
              <p>{isbn13}</p>
            </Detail>
          </Details>

          <Review>
            <h1>
              <strong>RESENHA DA EDITORA</strong>
            </h1>
            <p>
              <RiDoubleQuotesL size={20} color="#999999" />
              {description}
            </p>
          </Review>
        </Content>
      </Container>
    </Modal>
  )
}
