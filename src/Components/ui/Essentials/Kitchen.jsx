"use client"

import { useState, useRef } from "react"
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"
import { useNavigate } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import ProductCard from "../../ProductCard"
import { useProducts } from "../../hooks/userProducts"

export default function Kitchen() {
  const navigate = useNavigate()
  const { products, loading, error } = useProducts("kitchen") // 👈 kitchen ke products fetch
  const [currentSlide, setCurrentSlide] = useState(0)
  const sliderRef = useRef(null)

  const banners = [
    {
      title: "Kitchen Essentials",
      description: "Cookware, Utensils & Storage",
      buttonText: "Shop Now",
      bgColor: "bg-orange-100",
      image: "/kitchen.png",
    },
    {
      title: "Home Appliances",
      description: "Mixers, Juicers, Grinders & More",
      buttonText: "Shop Now",
      bgColor: "bg-green-100",
      image: "/appliances.png",
    },
    {
      title: "Electronics",
      description: "Headphones, Chargers, Smart Gadgets",
      buttonText: "Shop Now",
      bgColor: "bg-indigo-100",
      image: "/electronics.png",
    },
    {
      title: "Cleaning & Storage",
      description: "Containers, Brooms, Tools & More",
      buttonText: "Shop Now",
      bgColor: "bg-red-100",
      image: "/cleaning.png",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length)
  }

  // 🔎 Debug logs (same as Books.jsx)
  console.log("[v0] Kitchen component - products:", products)
  console.log("[v0] Kitchen component - products length:", products?.length)
  console.log("[v0] Kitchen component - products type:", typeof products)
  console.log("[v0] Kitchen component - products is array:", Array.isArray(products))
  console.log("[v0] Kitchen component - loading:", loading, "error:", error)

  if (products && products.length > 0) {
    products.forEach((product, index) => {
      console.log(`[v0] Kitchen Product ${index}:`, product)
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar title="Kitchen & Electronics" />

      {/* Banner Carousel */}
      <div className="relative w-full h-64 overflow-hidden">
        <div
          ref={sliderRef}
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {banners.map((banner, index) => (
            <div
              key={index}
              className={`min-w-full h-full ${banner.bgColor} flex items-center justify-between px-8`}
            >
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">{banner.title}</h2>
                <p className="text-gray-600 mb-4">{banner.description}</p>
                <button className="bg-white text-gray-800 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  {banner.buttonText}
                </button>
              </div>
              <div className="flex-1 flex justify-end">
                <img
                  src={banner.image || "/placeholder.svg"}
                  alt={banner.title}
                  className="h-40 w-60 object-contain rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
        >
          <AiOutlineLeft className="w-6 h-6 text-gray-700" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
        >
          <AiOutlineRight className="w-6 h-6 text-gray-700" />
        </button>
      </div>

      {/* Products Section */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Kitchen & Electronics Products</h2>

        {loading && (
          <div className="text-center py-8">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <p className="mt-2 text-gray-600">Loading products...</p>
          </div>
        )}

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            Error loading products: {error}
          </div>
        )}

        {!loading && !error && products.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No kitchen or electronics products available yet.</p>
            <p className="text-gray-400 mt-2">Check back soon for new arrivals!</p>
          </div>
        )}

        {!loading && !error && products.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product._id}
                product={product}
                onClick={() => navigate(`/product/${product._id}`, { state: { product } })}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
