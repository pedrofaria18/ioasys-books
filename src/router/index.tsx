import { Navigate, Route, Routes } from 'react-router-dom'

import { useAuth } from '../context/useAuth'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'

function RequireAuth({ children }: { children: JSX.Element }) {
  const { authenticated } = useAuth()

  if (!authenticated) {
    return <Navigate to="/login" />
  }

  return children
}

export function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        }
      />
      <Route path="login" element={<Login />} />
    </Routes>
  )
}
