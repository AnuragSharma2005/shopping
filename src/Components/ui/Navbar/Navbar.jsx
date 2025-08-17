"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { FaHeart, FaSearch, FaShoppingCart, FaUserCircle } from "react-icons/fa"
import { useAuth } from "../../../contexts/AuthContext" // ✅ yahan path check karo

export default function Navbar({ title }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const location = useLocation()
  const path = location.pathname

  const { user, logout, isLoggedIn } = useAuth() // ✅ Context se user aur state

  return (
    <div className="w-full shadow sticky top-0 z-50 bg-white">
      <div className="flex justify-between items-center px-4 md:px-6 py-4 shadow-md bg-gradient-to-r from-purple-100 to-white">
        {/* Logo */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="text-2xl font-bold">
            <span className="text-red-600">{title}</span>
          </div>
          <button className="md:hidden text-2xl" onClick={() => setIsOpen(true)}>
            ☰
          </button>
        </div>

        {/* Links */}
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

        {/* Search + Right Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-5 pr-10 py-2.5 rounded-full bg-black text-white shadow-md outline-none text-sm w-48 lg:w-60"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-500 hover:text-blue-700 text-lg">
              <FaSearch />
            </button>
          </div>

          <div className="flex space-x-3 text-gray-700">
            <Link to="">
              <FaHeart className="text-red-500" size={28} />
            </Link>

            {/* ✅ Login/Logout/User */}
            {isLoggedIn ? (
              <Link to="/profile" className="flex items-center gap-2">
                {user.profilePhoto ? (
                  <img src={user.profilePhoto || "/placeholder.svg"} className="w-8 h-8 rounded-full" />
                ) : (
                  <FaUserCircle size={28} className="text-gray-700" />
                )}
                {/* <span className="text-sm font-medium">{user.name}</span> */}
              </Link>
            ) : (
              <Link
                to="/auth/login"
                className="px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-bold shadow hover:bg-blue-600 transition duration-200"
              >
                Login
              </Link>
            )}

            <button onClick={() => setIsCartOpen(true)}>
              <FaShoppingCart size={28} />
            </button>
          </div>
        </div>
      </div>

      {/* ✅ Mobile Menu */}
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
          {/* ...same links as above */}
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
        </div>

        {/* ✅ Mobile Login/Logout */}
        <div className="p-4 border-t flex gap-3 items-center">
          {isLoggedIn ? (
            <>
              <Link
                to="/profile"
                className="flex items-center gap-2"
                onClick={() => setIsOpen(false)} // close menu on click
              >
                <FaUserCircle size={24} />
                {/* <span className="text-xs font-medium">{user.name}</span> */}
              </Link>

              <button onClick={logout} className="px-2 py-1 bg-red-500 text-white rounded text-xs">
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/auth/login"
              onClick={() => setIsOpen(false)}
              className="w-16 py-1 bg-blue-500 rounded-full text-center text-white text-xs font-bold shadow hover:bg-blue-600 transition duration-200"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
