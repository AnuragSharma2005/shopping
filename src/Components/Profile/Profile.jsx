"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { FaUserCircle, FaShoppingBag, FaHeadset, FaHeart, FaMapMarkerAlt, FaSignOutAlt } from "react-icons/fa"
import { useAuth } from "../../contexts/AuthContext"

export default function ProfilePage() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [activeTab, setActiveTab] = useState("profile")
  const [isMobileView, setIsMobileView] = useState(false)

  const navigate = useNavigate()

  const { isLoggedIn, user, logout } = useAuth()

  // Check login status and load stored user
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/auth/login")
      return
    }

    if (user) {
      setName(user.name || user.storeName || "")
      setEmail(user.email || "")
    }
  }, [isLoggedIn, user, navigate])

  const handleLogout = () => {
    logout()
    navigate("/")
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) setSelectedImage(URL.createObjectURL(file))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const updatedUser = { ...user, name, email }
    localStorage.setItem("user", JSON.stringify(updatedUser))
    alert(`Profile updated: ${name}, ${email}`)
  }

  const renderContent = () => {
    switch (activeTab) {
      case "orders":
        return (
          <div>
            <h2 className="text-lg font-semibold mb-4">🛒 Orders</h2>
            <p>Your previous orders will appear here.</p>
          </div>
        )
      case "support":
        return (
          <div>
            <h2 className="text-lg font-semibold mb-4">📞 Customer Support</h2>
            <p>Contact our support team.</p>
          </div>
        )
      case "referrals":
        return (
          <div>
            <h2 className="text-lg font-semibold mb-4">💖 Manage Referrals</h2>
            <p>Your referrals and rewards.</p>
          </div>
        )
      case "addresses":
        return (
          <div>
            <h2 className="text-lg font-semibold mb-4">📍 Addresses</h2>
            <p>Manage your delivery addresses.</p>
          </div>
        )
      case "profile":
      default:
        return (
          <div>
            <h2 className="text-lg font-semibold mb-4">👤 Profile</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-medium">Name *</label>
                <input
                  type="text"
                  value={name}
                  readOnly
                  className="w-full p-3 mt-1 border rounded-lg bg-gray-100 cursor-not-allowed"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Email Address *</label>
                <input
                  type="email"
                  value={email}
                  readOnly
                  className="w-full p-3 mt-1 border rounded-lg bg-gray-100 cursor-not-allowed"
                />
                <p className="text-xs text-gray-400 mt-1">We promise not to spam you</p>
              </div>
              <button
                type="submit"
                className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-lg font-semibold"
              >
                Save Changes
              </button>
            </form>

            <div className="mt-10 border-t pt-6 cursor-pointer">
              <h3 className="text-red-600 font-semibold">Delete Account</h3>
              <p className="text-sm text-gray-600 mt-1">
                Deleting your account will remove all your orders, wallet amount and any active referral
              </p>
            </div>
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-6xl shadow-xl rounded-xl flex flex-col md:flex-row overflow-hidden">
        {/* Sidebar */}
        {!isMobileView && (
          <div className="w-full md:w-1/3 bg-white p-6 border-r">
            <div className="flex flex-col items-center space-y-2 mb-6">
              <label htmlFor="profileUpload" className="relative w-24 h-24 cursor-pointer">
                {selectedImage ? (
                  <img
                    src={selectedImage || "/placeholder.svg"}
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full border-2 border-gray-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-purple-100 text-purple-700 rounded-full text-5xl">
                    <FaUserCircle />
                  </div>
                )}
                <input
                  id="profileUpload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
              <h3 className="text-lg font-bold">{name || "Your Name"}</h3>
              <p className="text-sm text-gray-500">{email || "Your Email"}</p>
            </div>

            {/* Wallet Section */}
            <div className="bg-gray-100 p-4 rounded-lg mb-6">
              <p className="font-semibold">💳 Gift Card</p>
              <div className="flex justify-between items-center mt-2">
                <span className="text-sm text-gray-500">Available Balance: ₹0</span>
                <button className="px-3 py-1 text-sm bg-black text-white rounded-full">Add Balance</button>
              </div>
            </div>

            {/* Menu */}
            <nav className="flex flex-col gap-3 text-gray-700 text-sm font-medium">
              <button
                onClick={() => setActiveTab("profile")}
                className={`flex items-center gap-2 p-2 rounded-lg ${
                  activeTab === "profile" ? "bg-gray-200" : "hover:bg-gray-100"
                }`}
              >
                <FaUserCircle /> Profile
              </button>
              <button
                onClick={() => setActiveTab("orders")}
                className={`flex items-center gap-2 p-2 rounded-lg ${
                  activeTab === "orders" ? "bg-gray-200" : "hover:bg-gray-100"
                }`}
              >
                <FaShoppingBag /> Orders
              </button>
              <button
                onClick={() => setActiveTab("support")}
                className={`flex items-center gap-2 p-2 rounded-lg ${
                  activeTab === "support" ? "bg-gray-200" : "hover:bg-gray-100"
                }`}
              >
                <FaHeadset /> Customer Support
              </button>
              <button
                onClick={() => setActiveTab("referrals")}
                className={`flex items-center gap-2 p-2 rounded-lg ${
                  activeTab === "referrals" ? "bg-gray-200" : "hover:bg-gray-100"
                }`}
              >
                <FaHeart /> Manage Referrals
              </button>
              <button
                onClick={() => setActiveTab("addresses")}
                className={`flex items-center gap-2 p-2 rounded-lg ${
                  activeTab === "addresses" ? "bg-gray-200" : "hover:bg-gray-100"
                }`}
              >
                <FaMapMarkerAlt /> Addresses
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 text-red-500 mt-4 hover:bg-gray-100 p-2 rounded-lg"
              >
                <FaSignOutAlt /> Log Out
              </button>
            </nav>
          </div>
        )}

        {/* Right Section */}
        <div className="w-full md:w-2/3 p-6">
          {isMobileView && (
            <button onClick={() => setIsMobileView(false)} className="text-sm text-blue-500 mb-4">
              ← Back
            </button>
          )}
          {renderContent()}
        </div>
      </div>
    </div>
  )
}
