"use client"

import { createContext, useContext, useState, useEffect } from "react"

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState(null)

  // Auto login check
  useEffect(() => {
    const token = localStorage.getItem("token")
    const userData = localStorage.getItem("user")

    if (token) {
      setIsLoggedIn(true)
      if (userData) {
        try {
          setUser(JSON.parse(userData))
        } catch (err) {
          console.error("Error parsing user data:", err)
        }
      }
    }
  }, [])

  const login = (userData, token) => {
    localStorage.setItem("token", token)
    localStorage.setItem("user", JSON.stringify(userData))
    setIsLoggedIn(true)
    setUser(userData)
  }

  const logout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    setIsLoggedIn(false)
    setUser(null)
  }

  const value = {
    isLoggedIn,
    user,
    login,
    logout,
    setIsLoggedIn,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
