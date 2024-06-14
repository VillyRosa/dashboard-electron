import React, { createContext, useContext, useState } from "react"
import { IUser } from "../interfaces/IUser"

interface IAuthContext {
  user: IUser | null
  setUser: (user: IUser | null) => void
}

export const AuthContext = createContext<IAuthContext | undefined>(undefined)
AuthContext.displayName = 'AuthContext'

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<IUser | null>(null)

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuthContext() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuthContext must be used within an AuthProvider")
  }
  return context
}