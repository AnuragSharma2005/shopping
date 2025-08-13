"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { FaHeart, FaSearch, FaShoppingCart, FaUserCircle } from "react-icons/fa"
import { useAuth } from "../../../contexts/AuthContext"

const Navbar = ({ title = "MyShop" }) => {
  const [isOpen, setIsOpen] = useState(false) // Mobile menu
  const [isCartOpen, setIsCartOpen] = useState(false) // Cart drawer
  const location = useLocation()
  const path = location.pathname

  const { isLoggedIn } = useAuth()

  return (
    <div className="w-full shadow sticky top-0 z-50 bg-white">
      {/* Single Unified Navigation */}
      <div className="flex justify-between items-center px-4 md:px-6 py-4 shadow-md bg-gradient-to-r from-purple-100 to-white">
        {/* Left: Logo + Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          <div className="text-2xl font-bold">
            <span className="text-red-600">{title}</span>
          </div>
          <button className="md:hidden text-2xl" onClick={() => setIsOpen(true)}>
            ☰
          </button>
        </div>

        {/* Center: Desktop Navigation Links */}
        <div className="hidden md:flex flex-wrap justify-center items-center space-x-6 font-medium text-gray-700 text-sm">
          <Link to="/">Home</Link>
          {(path.startsWith("/fashion") || path === "/") && (
            <>
              <Link to="/fashion/men/">Men</Link>
              <Link to="/fashion/women/">Women</Link>
              <Link to="/fashion/baby/">Baby Collection</Link>
            </>
          )}
          {path === "/essentials" && (
            <>
              <Link to="/essentials">Essentials</Link>
              <Link to="/offers">Offers</Link>
            </>
          )}
          {path === "/pharmacy" && (
            <>
              <Link to="/pharmacy">Pharmacy</Link>
              <Link to="/offers">Offers</Link>
            </>
          )}
        </div>

        {/* Right: Search + Icons (Desktop & Mobile) */}
        <div className="flex items-center space-x-3">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-4 pr-10 py-2 rounded-full bg-black text-white shadow-md outline-none text-sm w-32 sm:w-48 lg:w-60"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-500 hover:text-blue-700">
              <FaSearch size={16} />
            </button>
          </div>

          {/* Action Icons */}
          <div className="flex items-center space-x-2">
            {/* Heart Icon */}
            <Link to="/wishlist" className="p-1">
              <FaHeart className="text-red-500" size={24} />
            </Link>

            {/* Authentication: Login Button or User Profile */}
            {isLoggedIn ? (
              <Link to="/profile" className="p-1">
                <FaUserCircle className="text-gray-700 hover:text-gray-900" size={24} />
              </Link>
            ) : (
              <Link to={`/auth/login?redirect=${encodeURIComponent(path)}`}>
                <div className="px-3 py-1.5 bg-blue-500 rounded-full flex items-center justify-center shadow hover:bg-blue-600 transition duration-200">
                  <span className="text-white text-xs font-bold">Login</span>
                </div>
              </Link>
            )}

            {/* Cart Icon */}
            <button onClick={() => setIsCartOpen(true)} className="p-1">
              <FaShoppingCart className="text-gray-700 hover:text-gray-900" size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-4 py-3 border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button className="text-xl" onClick={() => setIsOpen(false)}>
            ✖
          </button>
        </div>
        <div className="flex flex-col p-4 space-y-4 font-medium text-gray-700 text-sm">
          <Link to="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          {(path.startsWith("/fashion") || path === "/") && (
            <>
              <Link to="/fashion/men/" onClick={() => setIsOpen(false)}>
                Men
              </Link>
              <Link to="/fashion/women/" onClick={() => setIsOpen(false)}>
                Women
              </Link>
              <Link to="/fashion/baby/" onClick={() => setIsOpen(false)}>
                Baby Collection
              </Link>
            </>
          )}
          {path === "/essentials" && (
            <>
              <Link to="/essentials" onClick={() => setIsOpen(false)}>
                Essentials
              </Link>
              <Link to="/offers" onClick={() => setIsOpen(false)}>
                Offers
              </Link>
            </>
          )}
          {path === "/pharmacy" && (
            <>
              <Link to="/pharmacy" onClick={() => setIsOpen(false)}>
                Pharmacy
              </Link>
              <Link to="/offers" onClick={() => setIsOpen(false)}>
                Offers
              </Link>
            </>
          )}

          {/* Mobile Authentication */}
          {isLoggedIn ? (
            <Link to="/profile" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
              <FaUserCircle /> Profile
            </Link>
          ) : (
            <Link to={`/auth/login?redirect=${encodeURIComponent(path)}`} onClick={() => setIsOpen(false)}>
              Login
            </Link>
          )}

          <Link to="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isOpen && <div className="fixed inset-0 bg-black opacity-30 z-40" onClick={() => setIsOpen(false)} />}

      {/* Cart Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Your Cart</h2>
          <button onClick={() => setIsCartOpen(false)}>✖</button>
        </div>
        <div className="p-4">Cart Items Here...</div>
      </div>

      {/* Overlay for cart */}
      {isCartOpen && <div className="fixed inset-0 bg-black opacity-40 z-40" onClick={() => setIsCartOpen(false)} />}
    </div>
  )
}

export default Navbar
