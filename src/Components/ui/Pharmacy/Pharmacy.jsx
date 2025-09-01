import React, { useState } from 'react';
import { FaHeart, FaSearch, FaShoppingCart, FaUserCircle } from 'react-icons/fa';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';
import ProductCard from "../../ProductCard"
import { useProducts } from "../../hooks/userProducts";

export default function Pharmacy() {
  const [isOpen, setIsOpen] = useState(false);
  const { products, loading, error } = useProducts("pharmacy");

  return (
    <div className="w-full shadow relative z-50">
     <Navbar title="Pharmacy" />
      

   
    {/* Category Icons */}
 <div className="overflow-x-auto px-4 py-4 rounded-xl mt-4">
  <div className="flex justify-start md:justify-center gap-6 w-max mx-auto text-black text-sm">
    
   <Link to="/pharmacy/med" className="flex flex-col items-center w-[80px] min-w-[80px] hover:scale-105 hover:text-black cursor-pointer transition-transform duration-200">
      <img src="https://st2.depositphotos.com/1576106/9950/i/950/depositphotos_99501218-stock-photo-medicines-and-drugs.jpg" alt="Shirt" className="w-20 h-20 object-contain rounded-full border-2 border-black" />
      <span className="mt20 text-center">Medicines</span>
    </Link>

  <Link to="/pharmacy/lab" className="flex flex-col items-center w-[80px]  hover:scale-105 hover:text-black cursor-pointer transition-transform duration-200">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9QxambXL7xq9Y3WxJyQRa6CVaaP4-JCGeASBhTvPZrEjHHvvSpMs-KuI6ciNG7Y11wj0&usqp=CAU" alt="T-Shirts" className="w-20 h-20 object-contain rounded-full border-2 border-black" />
      <span className="mt-1 text-center">Lab Test's</span>
    </Link>

   <Link to="/pharmacy/skincare" className="flex flex-col items-center w-[80px]  hover:scale-105 hover:text-black cursor-pointer transition-transform duration-200">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKV0IOxqdvYiX75wSLKBO2CniBKo2NXjlprw&s" alt="Jeans" className="w-20 h-20 object-contain rounded-full border-2 border-black" />
      <span className="mt-1 text-center"> Hair & Skin Care</span>
    </Link>

    <Link to="/pharmacy/ayurveics" className="flex flex-col items-center w-[80px]  hover:scale-105 hover:text-black cursor-pointer transition-transform duration-200">
      <img src="https://m.media-amazon.com/images/I/7150wGCBZCL._UF1000,1000_QL80_.jpg" alt="Footwear" className="w-20 h-20 object-contain rounded-full border-2 border-black" />
      <span className="mt-1 text-center">Ayurveics's</span>
    </Link>

   <Link to="/pharmacy/nutrition" className="flex flex-col items-center w-[80px]  hover:scale-105 hover:text-black cursor-pointer transition-transform duration-200">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIc-uVMP8JgpZN6UlF_r57iazQoQErJp1IOQ&s" alt="InnerWear" className="w-20 h-20 object-contain rounded-full border-2 border-black" />
      <span className="mt-1 text-center">Sports Nutrition </span>
    </Link>

   <Link to="/pharmacy/wcare" className="flex flex-col items-center w-[80px]  hover:scale-105 hover:text-black cursor-pointer transition-transform duration-200">
      <img src="https://cms-contents.pharmeasy.in/homepage_top_categories_images/7b238cdbb60-womencare.png?dim=360x0" alt="Formals" className="w-20 h-20 object-contain rounded-full border-2 border-black" />
      <span className="mt-1 text-center">Women Care</span>
    </Link>

   <Link to="/pharmacy/clinical" className="flex flex-col items-center w-[80px]  hover:scale-105 hover:text-black cursor-pointer transition-transform duration-200"> 
      <img src="https://image.made-in-china.com/2f0j00syphKmEPELgq/Medical-Glucometer-Monitor-Digital-Blood-Glucose-Meter-Diabetes-Glucose-Test-Strips.webp" alt="Sportive" className="w-20 h-20 object-contain rounded-full border-2 border-black" />
      <span className="mt-1 text-center">Clinical Tools</span>
    </Link>

    <Link to="/pharmacy/dr"className="flex flex-col items-center w-[80px]  hover:scale-105 hover:text-black cursor-pointer transition-transform duration-200">
      <img src="https://images.assetsdelivery.com/compings_v2/graphicbee/graphicbee1707/graphicbee170700087.jpg" alt="Wristwear" className="w-20 h-20 object-contain rounded-full border-2 border-black" />
      <span className="mt-1 text-center">Doctor Consult</span>
    </Link>

    <Link to="/pharmacy/mother" className="flex flex-col items-center w-[80px]  hover:scale-105 hover:text-black cursor-pointer transition-transform duration-200 ">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHdxafFkaDucunqPSHL2hsUh3J0-XY2_ZlMA&s" alt="Shades" className="w-20 h-20 object-contain rounded-full border-2 border-black" />
      <span className="mt-1 text-center">Mother & Baby Care</span>
    </Link>

    <Link to="/pharmacy/elder" className="flex flex-col items-center w-[80px] hover:scale-105 hover:text-black cursor-pointer transition-transform duration-200">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7vAw1jft6aSjzF6rUEkWCz4MUMaMClQCFYA&s" alt="Kurtas" className="w-20 h-20 object-contain rounded-full border-2 border-black" />
      <span className="mt-1 text-center">Mobility & Elderly Care</span>
    </Link>

  </div>
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

            <div className="px-6 py-4">
  <h2 className="text-xl font-bold mb-4">Pharmacy Products</h2>
  {loading ? (
    <p>Loading products...</p>
  ) : error ? (
    <p className="text-red-500">{error}</p>
  ) : (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )}
</div>
    </div>
  );
}
