"use client"

import { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { useAuth } from "../../../contexts/AuthContext"

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false)
  const [userType, setUserType] = useState("customer")
const [formData, setFormData] = useState({
  name: "",
  email: "",
  password: "",
  address: "",
  phoneNumber: "",
  storeName: ""
});


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
const handleAuthSubmit = async (e) => {
  e.preventDefault();

  if (!formData.email || !formData.password) {
    alert("Please fill all required fields!");
    return;
  }

  try {
    let res;

    if (isSignUp) {
      const payload = new FormData();
      if (userType === "customer") payload.append("name", formData.name);
      if (userType === "retailer") payload.append("storeName", formData.storeName);

      payload.append("email", formData.email);
      payload.append("password", formData.password);
      payload.append("role", userType);
      payload.append("address", formData.address);
      payload.append("phoneNumber", formData.phoneNumber);

      res = await fetch("http://localhost:5000/api/v1/users/register", {
        method: "POST",
        body: payload,
      });
    } else {
      // 🔹 Login API
      res = await fetch("http://localhost:5000/api/v1/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });
    }

    const data = await res.json();
    console.log("Auth API Response:", data); // 👈 check karne ke liye

    if (!res.ok) {
      alert(data.message || "Something went wrong!");
      return;
    }

    // ✅ Save user + token to AuthContext
login(data.data, data.data.token);

    // Redirect after login/signup
    const redirectTo = new URLSearchParams(location.search).get("redirect") || "/";
    navigate(redirectTo);
  } catch (err) {
    console.error("Auth error:", err);
    alert("Server error, please try again");
  }
};



  // Dynamic fields
// Dynamic fields
const renderFormFields = () => {
  if (isSignUp && userType === "customer") {
    return (
      <>
        <input className="w-full p-2 border rounded" type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
        <input className="w-full p-2 border rounded" type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
        <input className="w-full p-2 border rounded" type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        <input className="w-full p-2 border rounded" type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
        <input className="w-full p-2 border rounded" type="text" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} required />
      </>
    )
  }

  if (isSignUp && userType === "retailer") {
    return (
      <>
        <input className="w-full p-2 border rounded" type="text" name="storeName" placeholder="Store Name" value={formData.storeName} onChange={handleChange} required />
        <input className="w-full p-2 border rounded" type="email" name="email" placeholder="Business Email" value={formData.email} onChange={handleChange} required />
        <input className="w-full p-2 border rounded" type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        <input className="w-full p-2 border rounded" type="text" name="address" placeholder="Business Address" value={formData.address} onChange={handleChange} required />
        <input className="w-full p-2 border rounded" type="text" name="phoneNumber" placeholder="Contact Number" value={formData.phoneNumber} onChange={handleChange} required />
      </>
    )
  }

  // 🔹 Ye part missing tha → Sign In ke liye email & password
  if (!isSignUp) {
    return (
      <>
        <input className="w-full p-2 border rounded" type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
        <input className="w-full p-2 border rounded" type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
      </>
    )
  }
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
