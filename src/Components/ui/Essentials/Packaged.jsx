import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import Navbar from '../Navbar/Navbar';

import ProductCard from "../../ProductCard"
import { useProducts } from "../../hooks/userProducts"

export default function Packaged() {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [slide, setSlide] = useState(false);
  const timeoutRef = useRef(null);

  // ✅ Ye line change ki hai "packaged" category ke liye
  const { products, loading, error } = useProducts("packaged");

  const banners = [
    {
      title: 'Packaged Food',
      description: 'Instant food, ready to cook & more',
      image: '/packaged.png',
      bg: 'bg-green-100',
      text: 'text-green-900',
      button: 'text-green-700',
    },
    {
      title: 'Snacks & Beverages',
      description: 'Grab a bite or a cold drink',
      image: '/snacks.png',
      bg: 'bg-yellow-100',
      text: 'text-yellow-900',
      button: 'text-yellow-700',
    },
  ];

  const goToNext = () => {
    setSlide(true);
    setTimeout(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
      setSlide(false);
    }, 300);
  };

  const goToPrev = () => {
    setSlide(true);
    setTimeout(() => {
      setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length);
      setSlide(false);
    }, 300);
  };

  useEffect(() => {
    if (timeoutRef.current) clearInterval(timeoutRef.current);
    timeoutRef.current = setInterval(goToNext, 3000);
    return () => clearInterval(timeoutRef.current);
  }, [currentBanner]);

  const current = banners[currentBanner];


  console.log("[v0] packaged component - products:", products)
  console.log("[v0] packaged component - products length:", products?.length)
  console.log("[v0] packaged component - products type:", typeof products)
  console.log("[v0] packaged component - products is array:", Array.isArray(products))
  console.log("[v0] packaged component - loading:", loading, "error:", error)

  return (
    <div className="w-full shadow relative z-50">
      {/* ✅ Navbar */}
      <Navbar title="Packaged Food" />

      {/* ✅ Banner */}
      <div className="px-6 py-4 relative transition-all duration-500">
        <div
          className={`${current.bg} rounded-xl flex items-center justify-between p-6 cursor-pointer transition-all duration-300 ${
            slide ? 'translate-x-10 opacity-0' : 'translate-x-0 opacity-100'
          }`}
        >
          <div>
            <h2 className={`text-2xl font-bold ${current.text}`}>{current.title}</h2>
            <p className="text-sm text-gray-700">{current.description}</p>
            <button className={`mt-2 px-4 py-2 bg-white rounded-full font-semibold shadow ${current.button}`}>
              Order Now
            </button>
          </div>
          <img src={current.image} alt={current.title} className="w-32 h-40 object-contain" />
        </div>
        <button onClick={goToPrev} className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-md">
          <AiOutlineLeft size={24} />
        </button>
        <button onClick={goToNext} className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-md">
          <AiOutlineRight size={24} />
        </button>
      </div>

      {/* ✅ Products Section */}
      <div className="px-6 py-4">
        <h2 className="text-xl font-bold mb-4">Packaged Food Products</h2>
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
