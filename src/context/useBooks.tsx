import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

import { api } from '../service/api'
import { IBookResponse } from '../types/book'

interface IBooksData {
  books: IBookResponse[]
  bookSelected: IBookResponse
  totalPages: number
  loadBooksByPage: (page: number) => void
  handleBookDetailsSelected: (bookId: string) => void
}

const BooksContext = createContext({} as IBooksData)

export function BooksProvider({ children }: { children: ReactNode }) {
  const [books, setBooks] = useState<IBookResponse[]>([])
  const [bookSelected, setBookSelected] = useState({} as IBookResponse)
  const [totalPages, setTotalPages] = useState(1)

  useEffect(() => {
    async function loadBooks() {
      await api.get(`/books?page=1&amount=12`).then((response) => {
        setBooks(response.data.data)
        setTotalPages(response.data.totalPages.toFixed())
      })
    }

    loadBooks()
  }, [])

  async function loadBooksByPage(page: number) {
    await api.get(`/books?page=${page}&amount=12`).then((response) => {
      setBooks(response.data.data)
      setTotalPages(response.data.totalPages.toFixed())
    })
  }

  async function handleBookDetailsSelected(bookId: string) {
    await api.get(`/books/${bookId}`).then((response) => {
      setBookSelected(response.data)
    })
  }

  return (
    <BooksContext.Provider
      value={{
        books,
        bookSelected,
        totalPages,
        loadBooksByPage,
        handleBookDetailsSelected,
      }}
    >
      {children}
    </BooksContext.Provider>
  )
}

export const useBooks = () => useContext(BooksContext)
