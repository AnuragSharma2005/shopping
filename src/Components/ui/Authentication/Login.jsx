"use client"

import { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { useAuth } from "../../../contexts/AuthContext"

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false)
  const [userType, setUserType] = useState("customer")
  const [formData, setFormData] = useState({
    name: "",
    storeName: "",
    email: "",
    password: "",
  })

  const navigate = useNavigate()
  const location = useLocation()

  const { login } = useAuth()

  // Input change handler
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  // Submit handler with proper redirect
  const handleAuthSubmit = (e) => {
    e.preventDefault()

    if (!formData.email || !formData.password) {
      alert("Please fill all required fields!")
      return
    }

    let userData
    const token = "demo-token"

    // Create user data based on form
    if (isSignUp && userType === "customer") {
      userData = {
        name: formData.name,
        email: formData.email,
        type: "customer",
      }
    } else if (isSignUp && userType === "retailer") {
      userData = {
        storeName: formData.storeName,
        email: formData.email,
        type: "retailer",
      }
    } else {
      // Sign in — fake user data
      userData = {
        name: "Demo User",
        email: formData.email,
        type: userType,
      }
    }

    login(userData, token)

    // Redirect to original page or home
    const redirectTo = new URLSearchParams(location.search).get("redirect") || "/"
    navigate(redirectTo)
  }

  // Dynamic fields
  const renderFormFields = () => {
    if (isSignUp && userType === "customer") {
      return (
        <>
          <input
            className="w-full p-2 border rounded"
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            className="w-full p-2 border rounded"
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            className="w-full p-2 border rounded"
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </>
      )
    }
    if (isSignUp && userType === "retailer") {
      return (
        <>
          <input
            className="w-full p-2 border rounded"
            type="text"
            name="storeName"
            placeholder="Store Name"
            value={formData.storeName}
            onChange={handleChange}
            required
          />
          <input
            className="w-full p-2 border rounded"
            type="email"
            name="email"
            placeholder="Business Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            className="w-full p-2 border rounded"
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </>
      )
    }
    return (
      <>
        <input
          className="w-full p-2 border rounded"
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          className="w-full p-2 border rounded"
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <div className="flex justify-between w-full text-sm text-gray-600">
          <label className="flex items-center gap-2">
            <input type="checkbox" /> Remember me
          </label>
          <a href="#" className="text-purple-500 hover:underline">
            Forgot password?
          </a>
        </div>
      </>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="relative w-full max-w-[850px] rounded-xl overflow-hidden shadow-2xl bg-white">
        {/* Mobile Layout */}
        <div className="flex flex-col md:hidden w-full">
          <div className="h-[33.33vh] bg-gradient-to-r from-purple-950 to-purple-200 text-white flex flex-col justify-center items-center text-center px-6 py-6">
            {isSignUp ? (
              <>
                <h1 className="text-2xl font-bold">Welcome Back!</h1>
                <p className="my-2 text-sm">Sign in to access your account</p>
                <button
                  type="button"
                  className="border h-12 w-32 border-white rounded-full text-sm mt-2"
                  onClick={() => setIsSignUp(false)}
                >
                  Sign In
                </button>
              </>
            ) : (
              <>
                <h1 className="text-2xl font-bold">Hello, Friend!</h1>
                <p className="my-2 text-sm">Join us and start your journey</p>
                <button
                  type="button"
                  className="border h-12 w-32 border-white rounded-full text-sm mt-2"
                  onClick={() => setIsSignUp(true)}
                >
                  Sign Up
                </button>
              </>
            )}
          </div>

          <div className="w-full flex flex-col items-center justify-center px-6 py-6">
            <form onSubmit={handleAuthSubmit} className="w-full flex flex-col items-center gap-4">
              <h1 className="text-2xl font-bold">{isSignUp ? "Create Account" : "Sign In"}</h1>
              <div className="flex gap-4">
                <button
                  type="button"
                  className={`px-4 py-2 rounded ${
                    userType === "customer" ? "bg-purple-600 text-white" : "bg-gray-200"
                  }`}
                  onClick={() => setUserType("customer")}
                >
                  Customer
                </button>
                <button
                  type="button"
                  className={`px-4 py-2 rounded ${
                    userType === "retailer" ? "bg-purple-600 text-white" : "bg-gray-200"
                  }`}
                  onClick={() => setUserType("retailer")}
                >
                  Retailer
                </button>
              </div>
              {renderFormFields()}
              <button
                type="submit"
                className="bg-purple-800 hover:bg-purple-500 transition duration-300 text-white py-2 px-6 rounded w-full"
              >
                {isSignUp ? "Sign Up" : "Sign In"}
              </button>
            </form>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex w-full min-h-[500px]">
          <div className="w-1/2 bg-gradient-to-r from-purple-950 to-purple-200 text-white flex flex-col justify-center items-center p-8">
            {isSignUp ? (
              <>
                <h1 className="text-3xl font-bold">Welcome Back!</h1>
                <p className="my-4 text-sm">Sign in to access your account</p>
                <button
                  type="button"
                  className="border border-white rounded-full px-6 py-2"
                  onClick={() => setIsSignUp(false)}
                >
                  Sign In
                </button>
              </>
            ) : (
              <>
                <h1 className="text-3xl font-bold">Hello, Friend!</h1>
                <p className="my-4 text-sm">Join us and start your journey</p>
                <button
                  type="button"
                  className="border border-white rounded-full px-6 py-2"
                  onClick={() => setIsSignUp(true)}
                >
                  Sign Up
                </button>
              </>
            )}
          </div>

          <div className="w-1/2 flex flex-col justify-center items-center p-8">
            <form onSubmit={handleAuthSubmit} className="w-full max-w-sm flex flex-col gap-4">
              <h1 className="text-2xl font-bold">{isSignUp ? "Create Account" : "Sign In"}</h1>
              <div className="flex gap-4">
                <button
                  type="button"
                  className={`px-4 py-2 rounded ${
                    userType === "customer" ? "bg-purple-600 text-white" : "bg-gray-200"
                  }`}
                  onClick={() => setUserType("customer")}
                >
                  Customer
                </button>
                <button
                  type="button"
                  className={`px-4 py-2 rounded ${
                    userType === "retailer" ? "bg-purple-600 text-white" : "bg-gray-200"
                  }`}
                  onClick={() => setUserType("retailer")}
                >
                  Retailer
                </button>
              </div>
              {renderFormFields()}
              <button
                type="submit"
                className="bg-purple-800 hover:bg-purple-500 transition duration-300 text-white py-2 px-6 rounded w-full"
              >
                {isSignUp ? "Sign Up" : "Sign In"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthPage
