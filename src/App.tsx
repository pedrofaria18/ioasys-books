import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { AuthProvider } from './context/useAuth'
import { BooksProvider } from './context/useBooks'
import { AppRoutes } from './router'
import GlobalStyle from './styles/global'

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <AuthProvider>
          <BooksProvider>
            <AppRoutes />
          </BooksProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}

export default App
