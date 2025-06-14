import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full shadow relative z-50">
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
        </div>

        {/* Search + Icons */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-5 pr-10 py-2 rounded-full bg-black text-white shadow-md outline-none text-sm w-40 sm:w-60"
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

      {/* Offer Bar */}
      <div className="bg-black text-white py-2 text-sm text-center px-2">
        <div className="block md:inline">
          Sale Up To 50% Biggest Discounts. Hurry! Limited Period Offer
        </div> 
        <div className="text-orange-400 font-bold cursor-pointer block md:inline mt-1 md:mt-0">
          Shop Now
        </div>
      </div>

      {/* Fullscreen Banner Image */}
      <div className="w-full">
        <img
          className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] object-cover object-top"
          src="https://media.femalemag.com.sg/public/2019/03/MainImage01.jpg"
          alt="Fashion Banner"
        />
      </div> 

      {/* Responsive Image Box */}  

{/*      
      <div className='flex'>
      <div className="mt-6 ml-4 h-[20vw] w-[14vw]  bg-pink-500 rounded-md overflow-hidden flex items-center justify-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYJR6uyg8UOHIg_cOsr658WbGozHJEHiI7cg&s"
          alt="Featured"
          className=" h-36 w-40 object-cover object-top"
        />
      </div>
         <div className="mt-6 ml-4 h-[20vw] w-[14vw]  bg-pink-500 rounded-md overflow-hidden flex items-center justify-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYJR6uyg8UOHIg_cOsr658WbGozHJEHiI7cg&s"
          alt="Featured"
          className=" h-36 w-40 object-cover object-top"
        />
      </div>
         <div className="mt-6 ml-4 h-[20vw] w-[14vw] bg-pink-500 rounded-md overflow-hidden flex items-center justify-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYJR6uyg8UOHIg_cOsr658WbGozHJEHiI7cg&s"
          alt="Featured"
          className=" h-36 w-40 object-cover object-top"
        />
      </div> 
        <div className="mt-6 ml-4 h-[20vw] w-[14vw] bg-pink-500 rounded-md overflow-hidden flex items-center justify-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYJR6uyg8UOHIg_cOsr658WbGozHJEHiI7cg&s"
          alt="Featured"
          className=" h-36 w-40 object-cover object-top"
        />
      </div>
         <div className="mt-6 ml-4 h-[20vw] w-[14vw] bg-pink-500 rounded-md overflow-hidden flex items-center justify-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYJR6uyg8UOHIg_cOsr658WbGozHJEHiI7cg&s"
          alt="Featured"
          className=" h-36 w-40 object-cover object-top"
        />
      </div>
         <div className="mt-6 ml-4 h-[20vw] w-[14vw] bg-pink-500 rounded-md overflow-hidden flex items-center justify-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYJR6uyg8UOHIg_cOsr658WbGozHJEHiI7cg&s"
          alt="Featured"
          className=" h-36 w-40 object-cover object-top"
        />
      </div>
       <div className="mt-6 ml-4 h-[20vw] w-[14vw] bg-pink-500 rounded-md overflow-hidden flex items-center justify-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYJR6uyg8UOHIg_cOsr658WbGozHJEHiI7cg&s"
          alt="Featured"
          className=" h-36 w-40 object-cover object-top"
        />
      </div>
      </div>

 { /* Gils merge items */}
      {/* <div className='flex'>
      <div className="mt-6 ml-4 h-[20vw] w-[14vw] bg-pink-500 rounded-md overflow-hidden flex items-center justify-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYJR6uyg8UOHIg_cOsr658WbGozHJEHiI7cg&s"
          alt="Featured"
          className=" h-36 w-40 object-cover object-top"
        />
      </div>
         <div className="mt-6 ml-4 h-[20vw] w-[14vw] bg-pink-500 rounded-md overflow-hidden flex items-center justify-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYJR6uyg8UOHIg_cOsr658WbGozHJEHiI7cg&s"
          alt="Featured"
          className=" h-36 w-40 object-cover object-top"
        />
      </div>
         <div className="mt-6 ml-4 h-[20vw] w-[14vw] bg-pink-500 rounded-md overflow-hidden flex items-center justify-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYJR6uyg8UOHIg_cOsr658WbGozHJEHiI7cg&s"
          alt="Featured"
          className=" h-36 w-40 object-cover object-top"
        />
      </div>
        <div className="mt-6 ml-4 h-[20vw] w-[14vw] bg-pink-500 rounded-md overflow-hidden flex items-center justify-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYJR6uyg8UOHIg_cOsr658WbGozHJEHiI7cg&s"
          alt="Featured"
          className=" h-36 w-40 object-cover object-top"
        />
      </div>
         <div className="mt-6 ml-4 h-[20vw] w-[14vw] bg-pink-500 rounded-md overflow-hidden flex items-center justify-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYJR6uyg8UOHIg_cOsr658WbGozHJEHiI7cg&s"
          alt="Featured"
          className=" h-36 w-40 object-cover object-top"
        />
      </div>
         <div className="mt-6 ml-4 h-[20vw] w-[14vw] bg-pink-500 rounded-md overflow-hidden flex items-center justify-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYJR6uyg8UOHIg_cOsr658WbGozHJEHiI7cg&s"
          alt="Featured"
          className=" h-36 w-40 object-cover object-top"
        />
      </div> 
         <div className="mt-6 ml-4 h-[20vw] w-[14vw] bg-pink-500 rounded-md overflow-hidden flex items-center justify-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYJR6uyg8UOHIg_cOsr658WbGozHJEHiI7cg&s"
          alt="Featured"
          className=" h-36 w-40 object-cover object-top"
        />
      </div> 
      
      </div> */} 


    </div>
  );
}
