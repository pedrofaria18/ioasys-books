import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { AuthProvider } from './context/useAuth'
import { AppRoutes } from './router'
import GlobalStyle from './styles/global'

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}

export default App
