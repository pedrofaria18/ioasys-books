import { useState } from 'react'

import { useBooks } from '../../context/useBooks'
import { IBookResponse } from '../../types/book'
import { Book } from '../Book'
import { BookDetailsModal } from '../BookDatailsModal'
import { Container, ContainerLoading } from './styles'

export function BookList() {
  const { books, bookSelected, handleBookDetailsSelected } = useBooks()

  const [modalBookDetailsIsOpen, setModalBookDetailsIsOpen] = useState(false)

  const toogleModalBookDetails = () => {
    setModalBookDetailsIsOpen(!modalBookDetailsIsOpen)
  }

  const handleBookDetails = async (book: IBookResponse) => {
    await handleBookDetailsSelected(book.id)
    toogleModalBookDetails()
  }

  if (books.length === 0)
    return <ContainerLoading>Nenhum livro encontrado</ContainerLoading>

  return (
    <Container>
      {books.map((book) => (
        <Book key={book.id} book={book} onClick={handleBookDetails} />
      ))}

      {bookSelected.id && (
        <BookDetailsModal
          isOpen={modalBookDetailsIsOpen}
          setIsOpen={toogleModalBookDetails}
        />
      )}
    </Container>
  )
}
