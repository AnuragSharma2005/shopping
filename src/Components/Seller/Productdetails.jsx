"use client"

import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

export default function ProductDetailPage() {
  const { state } = useLocation()
  const navigate = useNavigate()
  const product = state?.product

  const [selectedImage, setSelectedImage] = useState(
    product?.images?.[0]?.url || "/placeholder.svg?height=400&width=300",
  )
  const [selectedSize, setSelectedSize] = useState("M")

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-gray-600 mb-4">No product data found</p>
          <button onClick={() => navigate(-1)} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Go Back
          </button>
        </div>
      </div>
    )
  }

  // Create image array for carousel (use multiple copies if only one image)
  const images =
    product.images?.length > 0 ? product.images.map((img) => img.url) : ["/placeholder.svg?height=400&width=300"]

  // If only one image, duplicate it for carousel effect
  const displayImages = images.length === 1 ? [images[0], images[0], images[0]] : images

  const regularPrice = product.price?.regular || 0
  const salePrice = product.price?.sale
  const discount = product.price?.discount || 0
  const originalPrice = salePrice ? regularPrice : Math.floor(regularPrice * 1.8)

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 bg-gray-100 min-h-screen">
      {/* Left Images Section */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* Thumbnails */}
        <div className="flex md:flex-col gap-2">
          {displayImages.map((img, index) => (
            <img
              key={index}
              src={img || "/placeholder.svg"}
              onClick={() => setSelectedImage(img)}
              className={`w-16 h-16 object-cover border-2 cursor-pointer rounded ${
                selectedImage === img ? "border-blue-500" : "border-gray-300"
              }`}
              alt={`Thumbnail ${index + 1}`}
              onError={(e) => {
                e.target.src = "/placeholder.svg?height=64&width=64"
              }}
            />
          ))}
        </div>

        {/* Main Image */}
        <div>
          <img
            src={selectedImage || "/placeholder.svg"}
            alt={product.Productname}
            className="w-72 h-96 object-cover rounded shadow-lg"
            onError={(e) => {
              e.target.src = "/placeholder.svg?height=400&width=300"
            }}
          />
        </div>
      </div>

      {/* Right Details Section */}
      <div className="bg-white p-6 rounded shadow flex-1 space-y-4">
        <h1 className="text-2xl font-bold">{product.Productname}</h1>

        <div className="flex items-center gap-4">
          <p className="text-2xl font-bold text-green-600">₹{salePrice || regularPrice}</p>
          {salePrice && (
            <>
              <p className="line-through text-gray-400 text-lg">₹{regularPrice}</p>
              <span className="text-green-500 font-medium">{discount}% off</span>
            </>
          )}
          {!salePrice && (
            <>
              <p className="line-through text-gray-400 text-sm">₹{originalPrice}</p>
              <span className="text-green-500 font-medium">
                {Math.round(((originalPrice - regularPrice) / originalPrice) * 100)}% off
              </span>
            </>
          )}
        </div>

        <div className="flex items-center gap-2">
          <span className="text-yellow-500">★★★★☆</span>
          <p className="text-sm text-gray-600">
            {product.rating || 4.2}★ ({Math.floor(Math.random() * 50) + 10} ratings and{" "}
            {Math.floor(Math.random() * 10) + 1} reviews)
          </p>
        </div>

        {/* Size Selection */}
        <div>
          <h2 className="font-medium mb-2">Size</h2>
          <div className="flex gap-2">
            {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`border px-3 py-1 rounded ${
                  selectedSize === size ? "bg-blue-600 text-white" : "bg-white text-black hover:bg-gray-100"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Product Description */}
        <div className="border p-4 rounded bg-gray-50">
          <h2 className="font-semibold text-base mb-2">Product Details</h2>
          <p className="text-sm text-gray-700">
            {product.description?.detailed || product.description?.short || "No description available"}
          </p>
          <div className="mt-2 text-sm">
            <p>
              <strong>Category:</strong> {product.category}
            </p>
            <p>
              <strong>Stock:</strong> {product.stock} units available
            </p>
            <p>
              <strong>Status:</strong>
              <span className={`ml-1 ${product.status === "In_Stock" ? "text-green-600" : "text-red-600"}`}>
                {product.status === "In_Stock" ? "In Stock" : "Out of Stock"}
              </span>
            </p>
          </div>
        </div>

        {/* Offers */}
        <div className="border p-4 rounded text-sm space-y-1 bg-gray-50">
          <h2 className="font-semibold text-base">Available offers</h2>
          <p>✔ Bank Offer 5% cashback on Flipkart Axis Bank Credit Card</p>
          <p>✔ 10% off on BOBCARD EMI Transactions</p>
          <p>✔ Special Price Get extra 26% off (inclusive of coupons)</p>
        </div>

        {/* Delivery */}
        <div className="text-sm">
          <label className="block mb-1 font-medium">Deliver to</label>
          <select className="border p-2 rounded w-full">
            <option value="140507">Mohali - 140507</option>
            <option value="110001">Delhi - 110001</option>
            <option value="400001">Mumbai - 400001</option>
          </select>
          <p className="mt-2 text-green-600">Delivery by 7 Jul, Monday</p>
        </div>

        {/* COD & Action Buttons */}
        <div className="flex items-center justify-between mt-4">
          <p className="text-gray-700 text-sm">💵 Cash on Delivery available</p>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            className="bg-yellow-500 w-full py-2 rounded text-white font-semibold hover:bg-yellow-600 disabled:bg-gray-400"
            disabled={product.status === "out_of_stock"}
          >
            🛒 ADD TO CART
          </button>
          <button
            className="bg-orange-500 w-full py-2 rounded text-white font-semibold hover:bg-orange-600 disabled:bg-gray-400"
            disabled={product.status === "out_of_stock"}
          >
            ⚡ BUY NOW
          </button>
        </div>

        {product.status === "out_of_stock" && (
          <p className="text-red-600 text-center font-medium">This product is currently out of stock</p>
        )}
      </div>
    </div>
  )
}
