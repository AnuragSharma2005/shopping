import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaSearch, FaShoppingCart, FaUserCircle } from 'react-icons/fa';
import Navbar from "../../Navbar/Navbar";

export default function Baby() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full shadow relative z-50">
      {/* Main Navigation */}
        <Navbar title="Baby Fashion" /> 
     
      {/* Categories - Manual, without map, using <div> */}
      <div className="overflow-x-auto px-4 py-4 rounded-xl mt-4">
        <div className="flex justify-start md:justify-center gap-6 w-max mx-auto text-black text-sm">

           <Link to="/fashion/baby/boy" className="flex flex-col items-center min-w-[80px] cursor-pointer">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7VQ04QnnpHyioB0AQd3xkW7u9xkA7Zzk70Q&s" alt="Boy's Fashion" className="w-20 h-20  object-contain rounded-full border-2 border-black" />
            <span className="mt-2 text-center whitespace-nowrap">Boy's Fashion</span>
          </Link>

           <Link to="/fashion/baby/girl" className="flex flex-col items-center min-w-[80px] cursor-pointer">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCG6V5EhnXiVTfaHgwv5fJSKrJPr3bG1efY2mRg9dvoBFRz_a4n5IW54ruLu0yVAK8qWU&usqp=CAU" alt="Girl's Fashion" className="w-20 h-20 object-contain rounded-full border-2 border-black" />
            <span className="mt-2 text-center whitespace-nowrap">Girl's Fashion</span>
          </Link>

           <Link to="/fashion/baby/toy" className="flex flex-col items-center min-w-[80px] cursor-pointer">
            <img src="https://m.media-amazon.com/images/I/61MRqvK3mNL._AC_UF1000,1000_QL80_.jpg" alt="Toys" className="w-20 h-20 object-contain rounded-full border-2 border-black" />
            <span className="mt-2 text-center whitespace-nowrap">Toys</span>
          </Link>

           <Link to="/fashion/baby/bshoes" className="flex flex-col items-center min-w-[80px] cursor-pointer">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKW5CDOXokfQnSjMxgO00j79_rFUHf6hu1nQ&s" alt="Footwear" className="w-20 h-20 object-contain rounded-full border-2 border-black" />
            <span className="mt-2 text-center whitespace-nowrap">Footwear</span>
          </Link>

           <Link to="/fashion/baby/boutique" className="flex flex-col items-center min-w-[80px] cursor-pointer">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS47O_Cxq6-Ye5uKlBzwUUt1z_KupAhdUoy5Q&s" alt="Boutique" className="w-20 h-20 object-contain rounded-full border-2 border-black" />
            <span className="mt-2 text-center whitespace-nowrap">Boutique</span>
          </Link>

           <Link to="/fashion/baby/nursery" className="flex flex-col items-center min-w-[80px] cursor-pointer">
            <img src="https://snugnplay.com/cdn/shop/files/Kids_Learning_Table_Chair_Set_with_Storage_Shelf_5_1024x1024.jpg?v=1738989385" alt="Nursery" className="w-20 h-20 object-contain rounded-full border-2 border-black" />
            <span className="mt-2 text-center whitespace-nowrap">Nursery</span>
          </Link>

          <Link to="/fashion/baby/gear" className="flex flex-col items-center min-w-[80px] cursor-pointer">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0bjlagDR_ip9c2dCCiJu01QIdTQIwPnPE9QSAVO6OmHxUniNsh81EeWYHbhxliVf0abo&usqp=CAU" alt="Gear" className="w-20 h-20 object-contain rounded-full border-2 border-black" />
            <span className="mt-2 text-center whitespace-nowrap">Gear</span>
          </Link>

           <Link to="/fashion/baby/feeding" className="flex flex-col items-center min-w-[80px] cursor-pointer">
            <img src="https://www.jiomart.com/images/product/original/rvlmecmsvk/shopimoz-pack-of-3-premium-first-feed-baby-feeding-spoon-soft-food-grade-product-images-orvlmecmsvk-p599454607-5-202303162015.jpg?im=Resize=(420,420)" alt="Feeding" className="w-20 h-20 object-contain rounded-full border-2 border-black" />
            <span className="mt-2 text-center whitespace-nowrap">Feeding</span>
          </Link>

           <Link to="/fashion/baby/Bath"className="flex flex-col items-center min-w-[80px] cursor-pointer"> 
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY2XNS4tw8jT3EaQdXpuR72UrGw8fht36ycg&s" alt="Bath" className="w-20 h-20 object-contain rounded-full border-2 border-black" />
            <span className="mt-2 text-center whitespace-nowrap">Bath</span>
          </Link>
        </div>
      </div>

      {/* Fullscreen Banner */}
      <div className="w-full h-auto mt-2 rounded-xl flex items-center justify-between p-6">
        <img
          src="https://t3.ftcdn.net/jpg/03/50/29/54/360_F_350295414_6E4Jda1hj9nY9A5Pq6MVgwT4XlK1LGbH.jpg"
          className="w-full h-[250px] sm:h-[300px] md:h-[400px] object-cover object-top"
          alt="Banner"
        />
      </div>

      {/* Offer Banner */}
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
