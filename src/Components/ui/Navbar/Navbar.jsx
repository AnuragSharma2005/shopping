import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaSearch, FaShoppingCart, FaUserCircle,FaSignInAlt } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

export default function Navbar({ title, isAuthenticated }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();


  const path = location.pathname;

  return (
<div className="w-full shadow sticky top-0 z-50 bg-white">
       
      {/* Main Navigation */}
      <div className="flex justify-between items-center px-4 md:px-6 py-4 shadow-md bg-gradient-to-r from-purple-100 to-white">
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="text-2xl font-bold">
            <span className="text-red-600">{title}</span>
          </div>
          <button className="md:hidden text-2xl" onClick={() => setIsOpen(true)}>
            ☰
          </button>
        </div>

       {/* Desktop Links */}
<div className="hidden md:flex flex-wrap justify-center items-center space-x-6 font-medium text-gray-700 text-sm">
  {/* Common links */}
  <Link to="/">Home</Link>

  {/* Only show Men/Women on fashion pages */}
  {(path.startsWith('/fashion') || path === '/') && (
    <>
      <Link to="/fashion/men/">Men</Link>
      <Link to="/fashion/women/">Women</Link>
      <Link to="/fashion/baby/">Baby Collection</Link>
    </>
  )}

  {/* Only show on Essentials page */}
  {path === '/essentials' && (
    <>
      <Link to="/essentials">Essentials</Link>
      <Link to="/offers">Offers</Link>
    </>
  )}
    {path === '/pharmacy' && (
    <>
      <Link to="/pharmacy">Pharmacy</Link>
      <Link to="/offers">Offers</Link>
    </>
  )}

</div>


        {/* Search + Icons */}
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
          {/* <FaHeart size={22} className="text-red-500" /> */}
     <div className="flex space-x-3 text-gray-700">
        <Link to="">
          <FaHeart className='text-red-500' size={28} />
        </Link>
          {isAuthenticated ? (
            <Link to="/profile/profile">
              <FaUserCircle size={28} />
            </Link>
          ) : (
          <Link to="/auth/login">
            <div className="w-10 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow hover:bg-blue-600 transition duration-200">
              <span className="text-white text-xs font-bold">Login</span>
            </div>
          </Link>
          )}
        <Link to="/profile/cart">
          <FaShoppingCart size={28} />
        </Link>
      </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center px-4 py-3 border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button className="text-xl" onClick={() => setIsOpen(false)}>✖</button>
        </div>
       <div className="flex flex-col p-4 space-y-4 font-medium text-gray-700 text-sm">
        {/* Always show Home */}
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>

        {/* Fashion section */}
        {(path.startsWith('/fashion') || path === '/') && (
          <>
            <Link to="/fashion/men/" onClick={() => setIsOpen(false)}>Men</Link>
            <Link to="/fashion/women/" onClick={() => setIsOpen(false)}>Women</Link>
            <Link to="/fashion/baby/" onClick={() => setIsOpen(false)}>Baby Collection</Link>
          </>
        )}

        {/* Essentials section */}
        {path === '/essentials' && (
          <>
            <Link to="/essentials" onClick={() => setIsOpen(false)}>Essentials</Link>
            <Link to="/offers" onClick={() => setIsOpen(false)}>Offers</Link>
          </>
        )}

        {/* Pharmacy section */}
        {path === '/pharmacy' && (
          <>
            <Link to="/pharmacy" onClick={() => setIsOpen(false)}>Pharmacy</Link>
            <Link to="/offers" onClick={() => setIsOpen(false)}>Offers</Link>
          </>
        )}

        {/* Optional: Contact Page */}
        <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
      </div>

      </div>

      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black opacity-30 z-40" onClick={() => setIsOpen(false)} />
      )}

      {/* Mobile Search + Icons */}
      <div className="md:hidden flex items-center justify-between px-4 py-2 gap-4 bg-white shadow">
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Search..."
            className="pl-4 pr-10 py-2.5 w-full rounded-full bg-black text-white text-sm"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white">
            <FaSearch />
          </button>
        </div>
                <div className="flex space-x-3 text-gray-700">
          <Link to="/">
            <FaHeart className='text-red-500' size={28} />
          </Link>
            {isAuthenticated ? (
              <Link to="/profile/profile">
                <FaUserCircle size={28} />
              </Link>
            ) : (
            <Link to="/auth/login">
              <div className="w-10 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow hover:bg-blue-600 transition duration-200">
                <span className="text-white text-xs font-bold">Log IN</span>
              </div>
            </Link>
            )}
            <Link to="/profile/cart">
              <FaShoppingCart size={28} />
            </Link>
          </div>
      </div>

      
    </div>
  );
}
