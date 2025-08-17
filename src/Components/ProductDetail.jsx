"use client"

import { useState, useEffect } from "react"
import { useParams, useLocation, useNavigate } from "react-router-dom"
import { AiOutlineLeft, AiOutlineRight, AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai"
import Navbar from "./Navbar/Navbar"

export default function ProductDetail() {
  const { id } = useParams()
  const location = useLocation()
  const navigate = useNavigate()
  const [product, setProduct] = useState(location.state?.product || null)
  const [currentImage, setCurrentImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [loading, setLoading] = useState(!product)
  const [error, setError] = useState("")

  useEffect(() => {
    if (!product && id) {
      fetchProduct()
    }
  }, [id, product])

  const fetchProduct = async () => {
    try {
      setLoading(true)
      const res = await fetch(`http://localhost:5000/api/v1/products/${id}`)
      if (!res.ok) throw new Error("Product not found")
      const data = await res.json()
      if (data.success) {
        setProduct(data.data)
      }
    } catch (err) {
      setError("Failed to load product details")
    } finally {
      setLoading(false)
    }
  }

  const handleAddToCart = () => {
    // Add to cart logic here
    console.log("Added to cart:", { product: product._id, quantity })
    alert(`Added ${quantity} ${product.Productname} to cart!`)
  }

  const handleBuyNow = () => {
    // Buy now logic here
    console.log("Buy now:", { product: product._id, quantity })
    alert(`Proceeding to checkout with ${quantity} ${product.Productname}`)
  }

  if (loading) {
    return (
      <div className="w-full">
        <Navbar title="Product Details" />
        <div className="flex justify-center items-center h-64">
          <p>Loading product details...</p>
        </div>
      </div>
    )
  }

  if (error || !product) {
    return (
      <div className="w-full">
        <Navbar title="Product Details" />
        <div className="flex justify-center items-center h-64">
          <div className="text-center">
            <p className="text-red-500 mb-4">{error || "Product not found"}</p>
            <button onClick={() => navigate(-1)} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Go Back
            </button>
          </div>
        </div>
      </div>
    )
  }

  const images = product.images || []
  const currentImg = images[currentImage]

  return (
    <div className="w-full">
      <Navbar title={product.Productname} />

      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Back Button */}
        <button onClick={() => navigate(-1)} className="flex items-center text-blue-600 mb-4 hover:text-blue-800">
          <AiOutlineLeft className="mr-2" />
          Back to Products
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={currentImg?.url || "/placeholder.svg?height=400&width=400"}
                alt={product.Productname}
                className="w-full h-96 object-cover"
                onError={(e) => {
                  e.target.src = "/placeholder.svg?height=400&width=400"
                }}
              />
              {images.length > 1 && (
                <>
                  <button
                    onClick={() => setCurrentImage((prev) => (prev - 1 + images.length) % images.length)}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white"
                  >
                    <AiOutlineLeft />
                  </button>
                  <button
                    onClick={() => setCurrentImage((prev) => (prev + 1) % images.length)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white"
                  >
                    <AiOutlineRight />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnail Images */}
            {images.length > 1 && (
              <div className="flex space-x-2 overflow-x-auto">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${
                      currentImage === index ? "border-blue-500" : "border-gray-200"
                    }`}
                  >
                    <img
                      src={img.url || "/placeholder.svg?height=80&width=80"}
                      alt={`${product.Productname} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.Productname}</h1>
              <p className="text-gray-600">{product.categoryDisplay}</p>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold text-green-600">₹{product.price?.regular || 0}</span>
              {product.price?.sale && <span className="text-xl text-gray-500 line-through">₹{product.price.sale}</span>}
              {product.price?.discount > 0 && (
                <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-semibold">
                  {product.price.discount}% OFF
                </span>
              )}
            </div>

            {/* Stock Status */}
            <div className="flex items-center space-x-2">
              <span
                className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  product.status === "In_Stock" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                }`}
              >
                {product.status === "In_Stock" ? "In Stock" : "Out of Stock"}
              </span>
              <span className="text-gray-600">Stock: {product.stock}</span>
            </div>

            {/* Description */}
            {(product.description?.detailed || product.description?.short) && (
              <div>
                <h3 className="text-lg font-semibold mb-2">Description</h3>
                <p className="text-gray-700 leading-relaxed">
                  {product.description.detailed || product.description.short}
                </p>
              </div>
            )}

            {/* Seller Info */}
            {product.seller && (
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Seller Information</h3>
                <p className="text-gray-700">Sold by: {product.seller.name}</p>
                {product.seller.email && <p className="text-gray-600 text-sm">Contact: {product.seller.email}</p>}
              </div>
            )}

            {/* Quantity and Actions */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <label className="text-sm font-medium">Quantity:</label>
                <div className="flex items-center border rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 hover:bg-gray-100"
                    disabled={quantity <= 1}
                  >
                    -
                  </button>
                  <span className="px-4 py-2 border-x">{quantity}</span>
                  <button
                    onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                    className="px-3 py-2 hover:bg-gray-100"
                    disabled={quantity >= product.stock}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4">
                <button
                  onClick={handleAddToCart}
                  disabled={product.status !== "In_Stock"}
                  className="flex-1 flex items-center justify-center space-x-2 bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                  <AiOutlineShoppingCart />
                  <span>Add to Cart</span>
                </button>
                <button
                  onClick={handleBuyNow}
                  disabled={product.status !== "In_Stock"}
                  className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                  Buy Now
                </button>
                <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <AiOutlineHeart className="text-xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
