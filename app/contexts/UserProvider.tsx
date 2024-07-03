"use client"
import { UserData } from "@/data/user"
import React, { Dispatch, SetStateAction, createContext, useContext, useState } from "react"

type UserProviderProps = {
    children: React.ReactNode
}

type AuthContextTypes = {
  user: UserData|null,
  setUser: Dispatch<SetStateAction<UserData|null>>,
  loadingUser: boolean,
  setLoadingUser: Dispatch<SetStateAction<boolean>>
}

const initialContext = {
  user: null,
  setUser: () => {},
  loadingUser: true,
  setLoadingUser: () => {}
}

const UserContext = createContext<AuthContextTypes>(initialContext)
export const useUser = () => useContext(UserContext)

export function UserProvider({ children }: UserProviderProps) {
    const [user, setUser] = useState<UserData|null>(null)
    const [loadingUser, setLoadingUser] = useState<boolean>(true)

  return (
    <UserContext.Provider value={{user, setUser, loadingUser, setLoadingUser}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext