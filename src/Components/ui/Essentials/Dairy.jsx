"use client"

import { useState, useEffect, useRef } from "react"
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"
import { useNavigate } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import ProductCard from "../../ProductCard"
import { useProducts } from "../../hooks/userProducts"

export default function Dairy() {
  const navigate = useNavigate()
  const [currentBanner, setCurrentBanner] = useState(0)
  const [slide, setSlide] = useState(false)
  const { products, loading, error } = userProducts("dairy")
  const timeoutRef = useRef(null)
  const touchStartXRef = useRef(0)
  const touchEndXRef = useRef(0)

  const banners = [
    {
      title: "Fresh Dairy Products",
      description: "Farm fresh milk, cheese & dairy essentials",
      image: "/dairy.png",
      bg: "bg-blue-100",
      text: "text-blue-900",
      button: "text-blue-700",
    },
    {
      title: "Premium Quality",
      description: "Organic and natural dairy products",
      image: "/organic-dairy.png",
      bg: "bg-green-100",
      text: "text-green-900",
      button: "text-green-700",
    },
  ]

  const goToNext = () => {
    setSlide(true)
    setTimeout(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length)
      setSlide(false)
    }, 300)
  }

  const goToPrev = () => {
    setSlide(true)
    setTimeout(() => {
      setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length)
      setSlide(false)
    }, 300)
  }

  useEffect(() => {
    if (timeoutRef.current) clearInterval(timeoutRef.current)
    timeoutRef.current = setInterval(goToNext, 3000)
    return () => clearInterval(timeoutRef.current)
  }, [currentBanner])

  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e) => {
    touchEndXRef.current = e.changedTouches[0].clientX
    const distance = touchStartXRef.current - touchEndXRef.current
    if (distance > 50) goToNext()
    else if (distance < -50) goToPrev()
  }

  const current = banners[currentBanner]

  return (
    <div className="w-full shadow relative z-50">
      <Navbar title="Dairy Products" />

      {/* Banner Carousel */}
      <div className="px-6 py-4 relative transition-all duration-500">
        <div
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className={`${current.bg} rounded-xl flex items-center justify-between p-6 cursor-pointer transition-all duration-300 ${
            slide ? "translate-x-10 opacity-0" : "translate-x-0 opacity-100"
          }`}
        >
          <div>
            <h2 className={`text-2xl font-bold ${current.text}`}>{current.title}</h2>
            <p className="text-sm text-gray-700">{current.description}</p>
            <button className={`mt-2 px-4 py-2 bg-white rounded-full font-semibold shadow ${current.button}`}>
              Order Now
            </button>
          </div>
          <img src={current.image || "/placeholder.svg"} alt={current.title} className="w-32 h-40 object-contain" />
        </div>
        <button
          onClick={goToPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-md"
        >
          <AiOutlineLeft size={24} />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-md"
        >
          <AiOutlineRight size={24} />
        </button>
      </div>

      <div className="px-6 py-4">
        <h2 className="text-xl font-bold mb-4">Dairy Products</h2>

        {error && <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">{error}</div>}

        {loading && <p className="text-center">Loading dairy products...</p>}

        {!loading && products.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500 mb-2">No dairy products available yet.</p>
            <p className="text-gray-400 text-sm">Check back soon for new arrivals!</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-lg shadow-md p-4 cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => navigate(`/product/${product._id}`, { state: { product } })}
            >
              {product.images?.[0]?.url && (
                <img
                  src={product.images[0].url || "/placeholder.svg"}
                  className="w-full h-40 object-cover rounded mb-3"
                  alt={product.Productname}
                  onError={(e) => {
                    e.target.src = "/placeholder.svg?height=160&width=300"
                  }}
                />
              )}
              <h3 className="font-bold text-lg mb-2">{product.Productname}</h3>
              <p className="text-green-600 font-semibold mb-2">₹{product.price?.regular || 0}</p>
              <p className="text-sm text-gray-600 mb-2">Stock: {product.stock}</p>
              <p className="text-sm text-gray-700">{product.description?.short || product.description?.detailed}</p>
              <div className="mt-3 flex justify-between items-center">
                <span
                  className={`text-sm font-semibold ${
                    product.status === "out_of_stock" ? "text-red-500" : "text-green-600"
                  }`}
                >
                  {product.status === "In_Stock" ? "In Stock" : "Out of Stock"}
                </span>
                <button className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
