import { useState } from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'

import { useBooks } from '../../context/useBooks'
import { IconButton } from '../IconButtom'
import { ButtonGroup, Container } from './styles'

export function Pagination() {
  const { totalPages, loadBooksByPage } = useBooks()

  const [currentPage, setCurrentPage] = useState<number>(1)

  const handleNextPage = async () => {
    if (currentPage < totalPages) {
      await loadBooksByPage(currentPage + 1)
      setCurrentPage(currentPage + 1)
    }
  }

  const handlePreviousPage = async () => {
    if (currentPage > 1) {
      await loadBooksByPage(currentPage - 1)
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <Container>
      <p>
        Página <strong>{currentPage}</strong> de <strong>{totalPages}</strong>
      </p>

      <ButtonGroup>
        <IconButton
          id="previousButton"
          onClick={handlePreviousPage}
          icon={<FiChevronLeft />}
        />
        <IconButton
          id="nextButton"
          onClick={handleNextPage}
          icon={<FiChevronRight />}
        />
      </ButtonGroup>
    </Container>
  )
}
