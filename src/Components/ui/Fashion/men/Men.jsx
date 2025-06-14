import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full shadow relative z-50 ">
      {/* Main Navigation */}
      <div className="bg-white flex flex-col md:flex-row justify-between items-center px-6 py-4 gap-4">
        {/* Logo & Hamburger */}
        <div className="flex justify-between items-center w-full md:w-auto">
          <div className="text-2xl font-bold">
            <span className="text-red-600">voice</span>Shop
          </div>
          <button className="md:hidden text-2xl" onClick={() => setIsOpen(true)}>
            ☰
          </button>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex flex-wrap justify-center items-center space-x-4 font-medium text-gray-700 text-sm">
          <Link to="/">Home</Link>
          <Link to="/men">Men</Link>
          <Link to="/women">Women</Link>
          <Link to="/baby">Baby Collection</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Search + Icons */}
        <div className="flex items-center space-x-4">
          {/* Search Bar Styled */} 
          <div className="relative">
          
            <input
              type="text"
              placeholder="Search..."
              className="pl-5 pr-10 py-2 rounded-full bg-black text-white shadow-md outline-none text-sm w-60"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-500 hover:text-blue-700 text-lg">
              🔍
            </button>
          </div>
          <span className="text-xl cursor-pointer">🩷</span>
          <span className="text-xl cursor-pointer">👤</span>
          <span className="text-xl cursor-pointer">🛒</span>
          
        </div>
      </div>

      {/* Sidebar Drawer (Mobile) */}
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
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/men" onClick={() => setIsOpen(false)}>Men</Link>
          <Link to="/women" onClick={() => setIsOpen(false)}>Women</Link>
          <Link to="/baby" onClick={() => setIsOpen(false)}>Baby Collection</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

    
  <div className="bg-black py-4 px-2">
  <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-white text-sm">
    
    <Link to="/" className="flex flex-col items-center mx-5">
      <img src="https://th.bing.com/th/id/OIP.KSKckGqskzGnKrNbBdAI_QHaHa?w=191&h=191&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" className="w-12 h-12 object-contain rounded-full" alt="Shirt" />
      <span>Shirt</span>
    </Link>

    <Link to="/" className="flex flex-col items-center mx-5">
      <img src="https://th.bing.com/th/id/OIP.-HKI-TNvwnjfwnJDIzyGXgHaHa?w=191&h=191&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" className="w-12 h-12 object-contain rounded-full" alt="T-Shirts" />
      <span>T-Shirts</span>
    </Link>

    <Link to="/" className="flex flex-col items-center mx-5">
      <img src="https://th.bing.com/th/id/OIP.rnT62NIiXJfel8bi4kvCwQAAAA?rs=1&pid=ImgDetMain" className="w-12 h-12 object-contain rounded-full" alt="Jeans" />
      <span>Jeans</span>
    </Link>

    <Link to="/" className="flex flex-col items-center mx-5">
      <img src="https://th.bing.com/th/id/OIP.UKnBMUAK3J4hcddrr4Ea2QHaHi?rs=1&pid=ImgDetMain" className="w-12 h-12 object-contain rounded-full" alt="Footwear" />
      <span>Footwear</span>
    </Link>

    <Link to="/" className="flex flex-col items-center mx-5">
      <img src="https://th.bing.com/th/id/OIP.TmozLyYc5gaxLycBnL3GTQHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1.3" className="w-12 h-12 object-contain rounded-full" alt="InnerWear" />
      <span>InnerWear</span>
    </Link>

    <Link to="/" className="flex flex-col items-center mx-5">
      <img src="https://th.bing.com/th/id/OIP.fFS27CsoKVxJ_UBwFbDpOAHaHa?w=197&h=196&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" className="w-12 h-12 object-contain rounded-full" alt="Formals" />
      <span>Formals</span>
    </Link>

    <Link to="/" className="flex flex-col items-center mx-5">
      <img src="https://th.bing.com/th/id/OIP.XZe_qyF-7SYfsxdkN-tuXwHaHa?w=205&h=205&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" className="w-12 h-12 object-contain rounded-full" alt="Sportive" />
      <span>Sportive</span>
    </Link>

    <Link to="/" className="flex flex-col items-center mx-5">
      <img src="https://th.bing.com/th?q=Best+Field+Watches+for+Men&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&dpr=1.3&pid=InlineBlock&rm=3" className="w-12 h-12 object-contain rounded-full" alt="Wristwear" />
      <span>Wristwear</span>
    </Link>
     <Link to="/" className="flex flex-col items-center mx-5">
      <img src="https://th.bing.com/th/id/OIP._sUU8cx6NsC0HQGdk3wfdwHaHa?w=183&h=183&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" className="w-12 h-12 object-contain rounded-full" alt="Wristwear" />
      <span>Shades</span>
    </Link>
       <Link to="/" className="flex flex-col items-center mx-5">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO469j4VoSrQCZilpicKYkalQc5zEpTvRyUg&s" className="w-12 h-12 object-contain rounded-full" alt="Wristwear" />
      <span>Kurta's</span>
    </Link>
  </div>
</div> 


    
      {/* Fullscreen Banner Image */}
<div className="w-full h-auto">
  <img
    src="https://wallpaperaccess.com/full/1448061.jpg"
    className="w-full h-[400px] object-cover"
  />
</div>


    </div>
  );
}
