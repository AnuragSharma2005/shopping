"use client"

import { useState, useEffect } from "react"
import { User, ShoppingBag, Headphones, Heart, MapPin, LogOut } from "lucide-react"

export default function ProfilePage() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [activeTab, setActiveTab] = useState("profile")
  const [isMobileView, setIsMobileView] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [userData, setUserData] = useState(null)

  const navigateTo = (path) => {
    if (typeof window !== "undefined") {
      window.location.href = path
    }
  }

  const decodeJWT = (token) => {
    try {
      const base64Url = token.split(".")[1]
      const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/")
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split("")
          .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
          .join(""),
      )
      return JSON.parse(jsonPayload)
    } catch (error) {
      console.error("Error decoding JWT:", error)
      return null
    }
  }

  // Check login status and load user data
  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token")
      if (!token) {
        navigateTo("/auth/login")
        return
      }

      const decodedToken = decodeJWT(token)
      if (decodedToken) {
        setName(decodedToken.name || "")
        setEmail(decodedToken.email || "")
        setPhoneNumber(decodedToken.phoneNumber || "")
        setUserData(decodedToken)
        setIsLoading(false)
        return
      }

      const storedUserData = localStorage.getItem("userData")
      if (storedUserData && storedUserData !== "null") {
        try {
          const userData = JSON.parse(storedUserData)
          setUserData(userData)
          setName(userData.name || userData.storeName || "")
          setEmail(userData.email || "")
          setPhoneNumber(userData.phoneNumber || userData.phone || "")

          if (userData.profilePhoto) {
            setSelectedImage(userData.profilePhoto)
          }
          setIsLoading(false)
          return
        } catch (err) {
          console.error("Error parsing stored user data:", err)
        }
      }

      try {
        const res = await fetch("http://localhost:5000/api/v1/users/current-user", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
        const data = await res.json()

        if (res.ok && data.success) {
          const user = data.data || data.user || data
          setUserData(user)

          setName(user.name || user.storeName || "")
          setEmail(user.email || "")
          setPhoneNumber(user.phoneNumber || user.phone || "")

          if (user.profilePhoto) {
            setSelectedImage(user.profilePhoto)
          }
        } else if (res.status === 401) {
          localStorage.removeItem("token")
          localStorage.removeItem("userData")
          navigateTo("/auth/login")
        } else {
          console.error("Failed to fetch user:", data.message)
        }
      } catch (err) {
        console.error("Error fetching user:", err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchUser()
  }, [])

  const handleLogout = async () => {
    try {
      await fetch("http://localhost:5000/api/v1/users/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
    } catch (err) {
      console.error("Logout error:", err)
    } finally {
      localStorage.removeItem("token")
      localStorage.removeItem("userData")
      navigateTo("/")
    }
  }

  const handleImageChange = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      setSelectedImage(URL.createObjectURL(file))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const updateData = { name, email }
      if (phoneNumber) {
        updateData.phoneNumber = phoneNumber
      }

      const res = await fetch("http://localhost:5000/api/v1/users/update-account", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(updateData),
      })
      const data = await res.json()

      if (res.ok) {
        alert("Profile updated successfully ✅")
      } else {
        alert(data.message || "Update failed")
      }
    } catch (err) {
      console.error("Update error:", err)
      alert("Server error")
    }
  }

  const renderContent = () => {
    switch (activeTab) {
      case "orders":
        return (
          <div>
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <ShoppingBag className="w-5 h-5" />
              Orders
            </h2>
            <p className="text-gray-600">Your previous orders will appear here.</p>
          </div>
        )
      case "support":
        return (
          <div>
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Headphones className="w-5 h-5" />
              Customer Support
            </h2>
            <p className="text-gray-600">Contact our support team.</p>
          </div>
        )
      case "referrals":
        return (
          <div>
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Heart className="w-5 h-5" />
              Manage Referrals
            </h2>
            <p className="text-gray-600">Your referrals and rewards.</p>
          </div>
        )
      case "addresses":
        return (
          <div>
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              Addresses
            </h2>
            <p className="text-gray-600">Manage your delivery addresses.</p>
          </div>
        )
      case "profile":
      default:
        return (
          <div>
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <User className="w-5 h-5" />
              Profile
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name *
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email Address *
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
                <p className="text-sm text-gray-500">We promise not to spam you</p>
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="Enter your phone number"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
              </div>
              <button
                type="submit"
                className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Save Changes
              </button>
            </form>

            <div className="mt-10 border-t pt-6">
              <h3 className="text-red-600 font-semibold">Delete Account</h3>
              <p className="text-sm text-gray-600 mt-1">
                Deleting your account will remove all your orders, wallet amount and any active referral
              </p>
            </div>
          </div>
        )
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-pink-500 mx-auto mb-4"></div>
          <p>Loading profile...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-6xl shadow-xl rounded-xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {!isMobileView && (
            <div className="w-full md:w-1/3 bg-white p-6 border-r">
              <div className="flex flex-col items-center space-y-2 mb-6">
                <label htmlFor="profileUpload" className="relative cursor-pointer">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-300">
                    {selectedImage ? (
                      <img
                        src={selectedImage || "/placeholder.svg"}
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-purple-100 flex items-center justify-center">
                        {name ? (
                          <span className="text-2xl font-bold text-purple-700">{name.charAt(0).toUpperCase()}</span>
                        ) : (
                          <User className="w-8 h-8 text-purple-700" />
                        )}
                      </div>
                    )}
                  </div>
                  <input
                    id="profileUpload"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </label>
                <h3 className="text-lg font-bold">{name || "Enter your name"}</h3>
                <p className="text-sm text-gray-500">{email || "Your Email"}</p>
                {userData?.role && (
                  <span className="text-xs bg-pink-100 text-pink-700 px-2 py-1 rounded-full">{userData.role}</span>
                )}
              </div>

              <div className="bg-gray-100 p-4 rounded-lg mb-6">
                <p className="font-semibold flex items-center gap-2">💳 Gift Card</p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm text-gray-500">Available Balance: ₹0</span>
                  <button className="px-3 py-1 text-sm bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
                    Add Balance
                  </button>
                </div>
              </div>

              <nav className="flex flex-col gap-2">
                <button
                  onClick={() => setActiveTab("profile")}
                  className={`flex items-center gap-2 p-3 rounded-lg text-left transition-colors ${
                    activeTab === "profile" ? "bg-gray-200" : "hover:bg-gray-100"
                  }`}
                >
                  <User className="w-4 h-4" /> Profile
                </button>
                <button
                  onClick={() => setActiveTab("orders")}
                  className={`flex items-center gap-2 p-3 rounded-lg text-left transition-colors ${
                    activeTab === "orders" ? "bg-gray-200" : "hover:bg-gray-100"
                  }`}
                >
                  <ShoppingBag className="w-4 h-4" /> Orders
                </button>
                <button
                  onClick={() => setActiveTab("support")}
                  className={`flex items-center gap-2 p-3 rounded-lg text-left transition-colors ${
                    activeTab === "support" ? "bg-gray-200" : "hover:bg-gray-100"
                  }`}
                >
                  <Headphones className="w-4 h-4" /> Customer Support
                </button>
                <button
                  onClick={() => setActiveTab("referrals")}
                  className={`flex items-center gap-2 p-3 rounded-lg text-left transition-colors ${
                    activeTab === "referrals" ? "bg-gray-200" : "hover:bg-gray-100"
                  }`}
                >
                  <Heart className="w-4 h-4" /> Manage Referrals
                </button>
                <button
                  onClick={() => setActiveTab("addresses")}
                  className={`flex items-center gap-2 p-3 rounded-lg text-left transition-colors ${
                    activeTab === "addresses" ? "bg-gray-200" : "hover:bg-gray-100"
                  }`}
                >
                  <MapPin className="w-4 h-4" /> Addresses
                </button>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 p-3 rounded-lg text-left text-red-500 hover:bg-gray-100 transition-colors mt-4"
                >
                  <LogOut className="w-4 h-4" /> Log Out
                </button>
              </nav>
            </div>
          )}

          <div className="w-full md:w-2/3 p-6">
            {isMobileView && (
              <button
                onClick={() => setIsMobileView(false)}
                className="text-blue-500 hover:text-blue-600 mb-4 transition-colors"
              >
                ← Back
              </button>
            )}
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  )
}
