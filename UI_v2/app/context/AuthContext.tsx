"use client"

import type React from "react"
import { createContext, useState, useContext, useEffect } from "react"

interface AuthContextType {
  isAuthenticated: boolean
  login: () => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    // Check if user is authenticated (e.g., by checking a token in localStorage)
    const token = localStorage.getItem("authToken")
    setIsAuthenticated(!!token)
  }, [])

  const login = () => {
    // Implement your login logic here
    localStorage.setItem("authToken", "dummyToken")
    setIsAuthenticated(true)
  }

  const logout = () => {
    // Implement your logout logic here
    localStorage.removeItem("authToken")
    setIsAuthenticated(false)
  }

  return <AuthContext.Provider value={{ isAuthenticated, login, logout }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

