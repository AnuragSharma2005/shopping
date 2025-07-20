import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function ProductDetailPage() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const product = state?.product;

  const [selectedImage, setSelectedImage] = useState(product?.image);
  const [selectedSize, setSelectedSize] = useState("M");

  if (!product) return <p>No product data found</p>;

  const images = [product.image, product.image, product.image]; // dummy images for carousel

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 bg-gray-100 min-h-screen">
      {/* Left Images Section */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* Thumbnails */}
        <div className="flex md:flex-col gap-2">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              onClick={() => setSelectedImage(img)}
              className={`w-16 h-16 object-cover border-2 cursor-pointer rounded ${
                selectedImage === img ? "border-blue-500" : "border-gray-300"
              }`}
              alt="thumb"
            />
          ))}
        </div>

        {/* Main Image */}
        <div>
          <img
            src={selectedImage}
            alt="selected"
            className="w-72 h-96 object-cover rounded"
          />
        </div>
      </div>

      {/* Right Details Section */}
      <div className="bg-white p-6 rounded shadow flex-1 space-y-4">
        <h1 className="text-xl font-bold">{product.name}</h1>

        <div className="flex items-center gap-4">
          <p className="text-2xl font-bold text-green-600">₹{product.price}</p>
          <p className="line-through text-gray-400 text-sm">₹{Math.floor(product.price * 1.8)}</p>
          <span className="text-green-500 font-medium">84% off</span>
        </div>

        <p className="text-sm text-gray-600">3.4★ 24 ratings and 3 reviews</p>

        {/* Size Selection */}
        <div>
          <h2 className="font-medium mb-2">Size</h2>
          <div className="flex gap-2">
            {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`border px-3 py-1 rounded ${
                  selectedSize === size
                    ? "bg-blue-600 text-white"
                    : "bg-white text-black"
                }`}
              >
                {size}
              </button>
            ))}
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
          <button className="bg-yellow-500 w-full py-2 rounded text-white font-semibold hover:bg-yellow-600">
            🛒 ADD TO CART
          </button>
          <button className="bg-orange-500 w-full py-2 rounded text-white font-semibold hover:bg-orange-600">
            ⚡ BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
}
