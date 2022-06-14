import React, { useState } from 'react'
import { LS_AUTH_TOKEN, LS_FAV_VARIATIONS } from '../constants'

interface IAuthContext {
  token: string | null
  handleSetToken: (token: string) => void
  handleRemoveToken: () => void
}

export const AuthContext = React.createContext<IAuthContext>({
  token: '',
  handleSetToken: (token) => {},
  handleRemoveToken: () => {},
})

interface props {
  children?: React.ReactNode
}

export const AuthContextProvider: React.FC<props> = ({ children }) => {
  const [token, setToken] = useState<string | null>(localStorage.getItem(LS_AUTH_TOKEN))

  const handleSetToken = (token: string) => {
    localStorage.setItem(LS_AUTH_TOKEN, token)
    setToken(token)
  }

  const handleRemoveToken = () => {
    localStorage.removeItem(LS_AUTH_TOKEN)
    localStorage.removeItem(LS_FAV_VARIATIONS)
    setToken(null)
  }

  return (
    <AuthContext.Provider value={{ token, handleSetToken, handleRemoveToken }}>
      {children}
    </AuthContext.Provider>
  )
}
