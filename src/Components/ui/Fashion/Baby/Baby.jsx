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
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7VQ04QnnpHyioB0AQd3xkW7u9xkA7Zzk70Q&s" className="w-12 h-12 object-contain rounded-full" alt="Shirt" />
      <span>Boy's Fashion</span>
    </Link>

    <Link to="/" className="flex flex-col items-center mx-5">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCG6V5EhnXiVTfaHgwv5fJSKrJPr3bG1efY2mRg9dvoBFRz_a4n5IW54ruLu0yVAK8qWU&usqp=CAU" className="w-12 h-12 object-contain rounded-full" alt="T-Shirts" />
      <span>Girl's Fashion</span>
    </Link>

    <Link to="/" className="flex flex-col items-center mx-5">
      <img src="https://m.media-amazon.com/images/I/61MRqvK3mNL._AC_UF1000,1000_QL80_.jpg" className="w-12 h-12 object-contain rounded-full" alt="Jeans" />
      <span>Toys</span>
    </Link>

    <Link to="/" className="flex flex-col items-center mx-5">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKW5CDOXokfQnSjMxgO00j79_rFUHf6hu1nQ&s" className="w-12 h-12 object-contain rounded-full" alt="Footwear" />
      <span>Footwear</span>
    </Link>

    <Link to="/" className="flex flex-col items-center mx-5">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS47O_Cxq6-Ye5uKlBzwUUt1z_KupAhdUoy5Q&s" className="w-12 h-12 object-contain rounded-full" alt="InnerWear" />
      <span>Boutique</span>
    </Link>

    <Link to="/" className="flex flex-col items-center mx-5">
      <img src="https://snugnplay.com/cdn/shop/files/Kids_Learning_Table_Chair_Set_with_Storage_Shelf_5_1024x1024.jpg?v=1738989385" className="w-12 h-12 object-contain rounded-full" alt="Formals" />
      <span>Nursery</span>
    </Link>

    <Link to="/" className="flex flex-col items-center mx-5">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0bjlagDR_ip9c2dCCiJu01QIdTQIwPnPE9QSAVO6OmHxUniNsh81EeWYHbhxliVf0abo&usqp=CAU" className="w-12 h-12 object-contain rounded-full" alt="Sportive" />
      <span>Gear</span>
    </Link>

    <Link to="/" className="flex flex-col items-center mx-5">
      <img src="https://www.jiomart.com/images/product/original/rvlmecmsvk/shopimoz-pack-of-3-premium-first-feed-baby-feeding-spoon-soft-food-grade-product-images-orvlmecmsvk-p599454607-5-202303162015.jpg?im=Resize=(420,420)" className="w-12 h-12 object-contain rounded-full" alt="Wristwear" />
      <span>Feeding</span>
    </Link>
     <Link to="/" className="flex flex-col items-center mx-5">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY2XNS4tw8jT3EaQdXpuR72UrGw8fht36ycg&s" className="w-12 h-12 object-contain rounded-full" alt="Wristwear" />
      <span>Bath</span>
      </Link>
  </div>
</div> 


    
      {/* Fullscreen Banner Image */}
<div className="w-full h-auto">
  <img
    src="https://t3.ftcdn.net/jpg/03/50/29/54/360_F_350295414_6E4Jda1hj9nY9A5Pq6MVgwT4XlK1LGbH.jpg"
    className="w-full h-[400px] object-cover object-top"
  />
</div>


    </div>
  );
}
