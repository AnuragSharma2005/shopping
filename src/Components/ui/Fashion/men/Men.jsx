import React, { useState } from 'react';
import { FaHeart, FaSearch, FaShoppingCart, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Navbar from "../../Navbar/Navbar";

export default function Men() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full shadow relative z-50">
      {/* Main Navigation */}
      <Navbar title="Mens' Fashion" />
      {/* Category Icons */}
 <div className="overflow-x-auto px-4 py-4 rounded-xl mt-4">
  <div className="flex justify-start md:justify-center gap-6 w-max mx-auto text-black text-sm">
    
    <Link to="/fashion/men/shirt"  className="flex flex-col items-center w-[80px]  hover:scale-105 hover:text-black-500 cursor-pointer transition-transform duration-200">
      <img src="https://th.bing.com/th/id/OIP.KSKckGqskzGnKrNbBdAI_QHaHa?w=191&h=191" alt="Shirt" className="w-20 h-20 object-contain rounded-full border-2 border-black" />
      <span className="mt20 text-center">Shirt</span>
    </Link>

   <Link to="/fashion/men/Tshirt" className="flex flex-col items-center w-[80px]   hover:scale-105 hover:text-black-500 cursor-pointer transition-transform duration-200">
      <img src="https://th.bing.com/th/id/OIP.-HKI-TNvwnjfwnJDIzyGXgHaHa" alt="T-Shirts" className="w-20 h-20 object-contain rounded-full border-2 border-black " />
      <span className="mt-1 text-center">T-Shirts</span>
    </Link>

    <Link to="/fashion/men/Mjeans"className="flex flex-col items-center w-[80px]   hover:scale-105 hover:text-black-500 cursor-pointer transition-transform duration-200">
      <img src="https://th.bing.com/th/id/OIP.rnT62NIiXJfel8bi4kvCwQAAAA" alt="Jeans" className="w-20 h-20 object-contain rounded-full border-2 border-black " />
      <span className="mt-1 text-center">Jeans</span>
    </Link>

    <Link to="/fashion/men/Mshoes"className="flex flex-col items-center w-[80px]    hover:scale-105 hover:text-black-500 cursor-pointer transition-transform duration-200">
      <img src="https://th.bing.com/th/id/OIP.UKnBMUAK3J4hcddrr4Ea2QHaHi" alt="Footwear" className="w-20 h-20 object-contain rounded-full border-2 border-black" />
      <span className="mt-1 text-center">Footwear</span>
    </Link>

   <Link to="/fashion/men/Innerwear" className="flex flex-col items-center w-[80px]   hover:scale-105 hover:text-black-500 cursor-pointer transition-transform duration-200">
      <img src="https://th.bing.com/th/id/OIP.TmozLyYc5gaxLycBnL3GTQHaHa" alt="InnerWear" className="w-20 h-20 object-contain rounded-full border-2 border-black" />
      <span className="mt-1 text-center">InnerWear</span>
    </Link>

   <Link to="/fashion/men/MFormal" className="flex flex-col items-center w-[80px] hover:s0  duration-200cale-105 hover:text-black-50  hover:scale-105 hover:text-black-500 cursor-pointer transition-transform duration-200">
      <img src="https://th.bing.com/th/id/OIP.fFS27CsoKVxJ_UBwFbDpOAHaHa" alt="Formals" className="w-20 h-20 object-contain rounded-full border-2 border-black" />
      <span className="mt-1 text-center">Formals</span>
    </Link>

  <Link to="/fashion/men/MSports" className="flex flex-col items-center w-[80px]    hover:scale-105 hover:text-black-500 cursor-pointer transition-tranform duration-200">
      <img src="https://th.bing.com/th/id/OIP.XZe_qyF-7SYfsxdkN-tuXwHaHa" alt="Sportive" className="w-20 h-20 object-contain rounded-full border-2 border-black" />
      <span className="mt-1 text-center">Sportive</span>
    </Link>

    <Link to="/fashion/men/MWatch" className="flex flex-col items-center w-[80px]  hover:scale-105 hover:text-black-500 cursor-pointer transition-transform duration-200">
      <img src="https://th.bing.com/th?q=Best+Field+Watches+for+Men" alt="Wristwear" className="w-20 h-20 object-contain rounded-full border-2 border-black" />
      <span className="mt-1 text-center">Wristwear</span>
    </Link>

  <Link to="/fashion/men/MShades" className="flex flex-col items-center w-[80px]  hover:scale-105 hover:text-black-500 cursor-pointer transition-transform duration-200">
      <img src="https://th.bing.com/th/id/OIP._sUU8cx6NsC0HQGdk3wfdwHaHa" alt="Shades" className="w-20 h-20 object-contain rounded-full border-2 border-black" />
      <span className="mt-1 text-center">Shades</span>
    </Link>

  <Link to="/fashion/men/MKurta" className="flex flex-col items-center w-[80px]  hover:scale-105 hover:text-black-500 cursor-pointer transition-transform duration-200">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO469j4VoSrQCZilpicKYkalQc5zEpTvRyUg&s" alt="Kurtas" className="w-20 h-20 object-contain rounded-full border-2 border-black" />
      <span className="mt-1 text-center">Kurta's</span>
    </Link>

      <Link to="/fashion/men/wallet" className="flex flex-col items-center w-[80px]  hover:scale-105 hover:text-black-500 cursor-pointer transition-transform duration-200">
      <img src="https://www.jiomart.com/images/product/500x630/rvcdiblubd/amicraft-men-black-wallet-and-belt-combo-of-2-product-images-rvcdiblubd-0-202207061728.jpg" alt="Kurtas" className="w-20 h-20 object-contain rounded-full border-2 border-black" />
      <span className="mt-1 text-center">Wallet/Belt</span>
    </Link>
  </div>
</div>


      {/* Fullscreen Banner */}
      <div className="w-full rounded-xl flex items-center justify-between p-6">
        <img
          src="https://wallpaperaccess.com/full/1448061.jpg"
          className="w-full h-60 sm:h-72 md:h-96 object-cover"
          alt="Banner"
        />
      </div>

        {/* oFFER Banner */}
      <div className="px-6 py-4">
        <div className="bg-teal-100 rounded-xl flex items-center justify-between p-6">
          <div>
            <h2 className="text-2xl font-bold text-teal-900">Paan Corner</h2>
            <p className="text-sm text-gray-700">Smoking Accessories, Mints & More</p>
            <button className="mt-2 px-4 py-2 bg-white rounded-full text-teal-700 font-semibold shadow">
              Order Now
            </button>
          </div>
          <img src="/paan.png" alt="Paan Corner" className="w-32 h-40 object-contain" />
        </div>
      </div>

    </div>
  );
}
