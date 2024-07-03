"use client"
import React, { createContext, useContext, useState } from "react"
import { useUser } from "./UserProvider"

type AuthProviderProps = {
  children: React.ReactNode
}

type AuthContextTypes = {
  token: string|null,
  login: (argo: string) => void,
  logout: () => void
}

const initialContext = {
  token: null,
  login: () => {},
  logout: () => {}
}

const AuthContext = createContext<AuthContextTypes>(initialContext)
export const useAuth = () => useContext(AuthContext)


export function AuthProvider({ children }: AuthProviderProps) {
  const [token, setToken] = useState<string|null>(localStorage.getItem("userToken")||null)
  const {setUser} = useUser()

  const login = (userToken: string) => {
    localStorage.setItem("userToken", userToken)
    setToken(userToken)
  }

  const logout = () => {
    localStorage.removeItem("userToken")
    setToken(null)
    setUser(null)
  }
 
  return (
    <AuthContext.Provider value={{token, login, logout}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext