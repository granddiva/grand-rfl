import { useMemo, useState } from 'react'
import { loginRequest } from '../services/authService'
import { AuthContext } from './AuthValueContext'

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem('token_laundry_admin'))
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user_laundry_admin')
    if (!savedUser) return null
    try {
      return JSON.parse(savedUser)
    } catch {
      return null
    }
  })

  const login = async ({ email, password }) => {
    const result = await loginRequest({ email, password })
    setToken(result.token)
    setUser(result.user ?? { nama: email })
    localStorage.setItem('token_laundry_admin', result.token)
    localStorage.setItem('user_laundry_admin', JSON.stringify(result.user ?? { nama: email }))
  }

  const logout = () => {
    setToken(null)
    setUser(null)
    localStorage.removeItem('token_laundry_admin')
    localStorage.removeItem('user_laundry_admin')
  }

  const value = useMemo(
    () => ({
      token,
      user,
      loading: false,
      isAuthenticated: Boolean(token),
      login,
      logout,
    }),
    [token, user]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
