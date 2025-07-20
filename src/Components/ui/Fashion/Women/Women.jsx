import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaSearch, FaShoppingCart, FaUserCircle } from 'react-icons/fa';
import Navbar from "../../Navbar/Navbar"; 

export default function Men() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full shadow relative z-50">
      {/* Top Navbar */}
           <Navbar title="women's Fashion " />
     
{/* Categories Section */}
<div className="overflow-x-auto px-4 py-4 rounded-xl mt-4">
  <div className="flex items-center gap-4 w-max mx-auto">
    
     <Link to="/fashion/Women/tops" className="min-w-[100px] text-center flex flex-col items-center">
      <div className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center  hover:scale-110 hover:text-black-500 cursor-pointer transition-transform duration-200">
        <img src="https://images.meesho.com/images/products/361237482/mst4o_512.webp" alt="Tops" className=" object-cover rounded-full border-2 border-black" />
      </div>
      <p className="text-xs mt-2">Tops</p>
    </Link>

     <Link to="/fashion/women/saree" className="min-w-[100px] text-center flex flex-col items-center">
      <div className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center   hover:scale-110 hover:text-black-500 cursor-pointer transition-transform duration-200">
        <img src="https://suvidhafashion.com/cdn/shop/files/8207-1_d7c3ef78-6de3-430d-acae-4a1671e2c145.jpg?v=1717498089&width=500" alt="Saree's" className="object-cover rounded-full border-2 border-black" />
      </div>
      <p className="text-xs mt-2">Saree's</p>
      </Link>

     <Link to="/fashion/women/wjeans" className="min-w-[100px] text-center flex flex-col items-center">
      <div className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center   hover:scale-110 hover:text-black-500 cursor-pointer transition-transform duration-200">
        <img src="https://th.bing.com/th/id/OIP.rnT62NIiXJfel8bi4kvCwQAAAA?rs=1&pid=ImgDetMain" alt="Jeans" className="object-cover rounded-full border-2 border-black" />
      </div>
      <p className="text-xs mt-2">Jeans</p>
    </Link>

    <Link to="/fashion/women/wshoes" className="min-w-[100px] text-center flex flex-col items-center">
      <div className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center   hover:scale-110 hover:text-black-500 cursor-pointer transition-transform duration-200">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfU9f5H-TzQpzqaJfYS3Gp2SQXmiyQiUpgcmTxD7s38DUQ_K_EPwxtkYydZ6LPiSzMgGA&usqp=CAU" alt="Footwear" className="object-cover rounded-full border-2 border-black" />
      </div>
      <p className="text-xs mt-2">Footwear</p>
    </Link>

    <Link to="/fashion/women/bags" className="min-w-[100px] text-center flex flex-col items-center">
      <div className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center   hover:scale-110 hover:text-black-500 cursor-pointer transition-transform duration-200">
        <img src="https://th.bing.com/th/id/OIP.OEirtmevun7QjWZqSs1o8wHaHY?r=0&rs=1&pid=ImgDetMain&cb=idpwebpc1" alt="Bags" className="object-cover rounded-full border-2 border-black" />
      </div>
      <p className="text-xs mt-2">Bags</p>
    </Link>

   <Link to="/fashion/women/wformals" className="min-w-[100px] text-center flex flex-col items-center">
      <div className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center   hover:scale-110 hover:text-black-500 cursor-pointer transition-transform duration-200">
        <img src="https://www.houseoftailors.ae/assets/images/images/women/suit/formal/women-formal-1.png" alt="Formals" className="object-cover rounded-full border-2 border-black" />
      </div>
      <p className="text-xs mt-2">Formals</p>
    </Link>

   <Link to="/fashion/women/wsports" className="min-w-[100px] text-center flex flex-col items-center">
      <div className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center   hover:scale-110 hover:text-black-500 cursor-pointer transition-transform duration-200">
        <img src="https://i.pinimg.com/736x/0f/eb/03/0feb03dc86bfbc3ee7f25c7b47bd6a99.jpg" alt="Sportive" className="object-cover rounded-full border-2 border-black" />
      </div>
      <p className="text-xs mt-2">Sportive</p>
    </Link>

  <Link to="/fashion/women/wwatch" className="min-w-[100px] text-center flex flex-col items-center">
      <div className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center   hover:scale-110 hover:text-black-500 cursor-pointer transition-transform duration-200">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjeuE6eh57SP1RYx85SSB7zWTk0nRpzKmflg&s" alt="Wristwear" className="object-cover rounded-full border-2 border-black" />
      </div>
      <p className="text-xs mt-2">Wristwear</p>
    </Link>

   <Link to="/fashion/women/wshades" className="min-w-[100px] text-center flex flex-col items-center">
      <div className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center   hover:scale-110 hover:text-black-500 cursor-pointer transition-transform duration-200">
        <img src="https://th.bing.com/th/id/OIP._sUU8cx6NsC0HQGdk3wfdwHaHa?w=183&h=183&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="Shades" className="object-cover rounded-full border-2 border-black" />
      </div>
      <p className="text-xs mt-2">Shades</p>
    </Link>

   <Link to="/fashion/women/kurti" className="min-w-[100px] text-center flex flex-col items-center">
      <div className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center   hover:scale-110 hover:text-black-500 cursor-pointer transition-transform duration-200">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJzn9MnBLSn6mhjQt02xSH4wMlVwWDe33sZw&s" alt="Kurti's" className="object-cover rounded-full border-2 border-black" />
      </div>
      <p className="text-xs mt-2">Kurti's</p>
    </Link>

      <Link to="/fashion/women/jewellery" className="min-w-[100px] text-center flex flex-col items-center">
      <div className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center   hover:scale-110 hover:text-black-500 cursor-pointer transition-transform duration-200">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHNr1uj4xVPzUWdCpPwuG4xN3cTXurgcDAiA&s" alt="Jewellery" className="object-cover rounded-full border-2 border-black" />
      </div>
      <p className="text-xs mt-2">Jewellery </p>
    </Link>
  </div>
</div>



      {/* Banner Image */}
      <div className="w-full px-4 md:px-10 py-6">
        <img
          src="https://asset7.ckassets.com/blog/wp-content/uploads/sites/5/2021/12/Womens-Clothing.jpg"
          alt="Banner"
          className="w-full h-[200px] sm:h-[300px] md:h-[400px] rounded-xl object-cover"
        />
      </div>

   {/* offer Banner */}
      <div className="px-6 py-4">
        <div className="bg-teal-100 rounded-xl flex items-center justify-between p-6">
          <div>
            <h2 className="text-2xl font-bold text-teal-900">Paan Corner</h2>
            <p className="text-sm text-gray-700">Smoking Accessories, Mints & More</p>
            <button className="mt-2 px-4 py-2 bg-white rounded-full text-teal-700 font-semibold shadow">
              Order Now
            </button>
          </div>
          <img src="/paan.png" alt="Paan Corner" className="w-32 h-32 object-contain" />
        </div>
      </div>
    </div>
  );
}
