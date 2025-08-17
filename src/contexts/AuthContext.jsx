"use client"

import { createContext, useContext, useState, useEffect } from "react"

const AuthContext = createContext()

// ✅ Custom hook
export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  // ✅ Check token & user on first load
  useEffect(() => {
    const token = localStorage.getItem("token")
    const userData = localStorage.getItem("user")

    if (token && userData && userData !== "undefined") {   // 👈 extra check
      try {
        setUser(JSON.parse(userData))
      } catch (err) {
        console.error("Error parsing user data:", err)
        localStorage.removeItem("user") // corrupted data hatao
      }
    }
  }, [])

  // ✅ Login function
  const login = (userData, token) => {
    localStorage.setItem("token", token)

    if (userData) {   // 👈 only save if not null/undefined
      localStorage.setItem("user", JSON.stringify(userData))
    } else {
      localStorage.removeItem("user")
    }

    setUser(userData || null)
  }

  // ✅ Logout function
  const logout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoggedIn: !!user }}>
      {children}
    </AuthContext.Provider>
  )
}
