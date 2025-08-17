"use client"

import { useState } from "react"

export default function ProductCard({ product, onClick }) {
  const [imageError, setImageError] = useState(false)

  const productName = product.Productname || product.productName || product.name || "Unnamed Product"
  const regularPrice = product.price?.regular || product.price || 0
  const salePrice = product.price?.sale || null
  const discount = product.price?.discount || 0
  const shortDescription = product.description?.short || product.description || "No description available"
  const imageUrl = product.images?.[0]?.url || "/diverse-products-still-life.png"
  const stock = product.stock || 0
  const status = product.status || "Out_of_Stock"

  const fullImageUrl = imageUrl.startsWith("/uploads/") ? `http://localhost:5000${imageUrl}` : imageUrl

  console.log("[v0] ProductCard - product data:", {
    productName,
    regularPrice,
    imageUrl,
    fullImageUrl,
    stock,
    status,
  })

  const handleImageError = () => {
    setImageError(true)
  }

  const handleAddToCart = (e) => {
    e.stopPropagation()
    console.log("[v0] Adding to cart:", productName)
    // Add to cart logic here
  }

  const handleCardClick = () => {
    if (onClick) {
      onClick()
    }
  }

  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
      onClick={handleCardClick}
    >
      {/* Product Image */}
      <div className="relative h-48 bg-gray-100">
        <img
          src={imageError ? "/placeholder.svg?height=200&width=200&query=product" : fullImageUrl}
          alt={productName}
          className="w-full h-full object-cover"
          onError={handleImageError}
        />
        {discount > 0 && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">
            -{discount}%
          </div>
        )}
        {status === "Out_of_Stock" && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-white font-medium">Out of Stock</span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">{productName}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{shortDescription}</p>

        {/* Price */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg font-bold text-gray-900">₹{regularPrice}</span>
          {salePrice && <span className="text-sm text-gray-500 line-through">₹{salePrice}</span>}
        </div>

        {/* Stock Info */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-gray-600">Stock: {stock}</span>
          <span
            className={`text-sm px-2 py-1 rounded ${
              status === "In_Stock" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
            }`}
          >
            {status === "In_Stock" ? "Available" : "Out of Stock"}
          </span>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          disabled={status !== "In_Stock"}
          className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
            status === "In_Stock"
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          {status === "In_Stock" ? "Add to Cart" : "Out of Stock"}
        </button>
      </div>
    </div>
  )
}
