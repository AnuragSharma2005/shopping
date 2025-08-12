import React from "react";
import { useNavigate } from "react-router-dom";

export default function Cart({ cartItems = [] }) {
  const navigate = useNavigate();
  const isEmpty = !cartItems || cartItems.length === 0;

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {/* Fixed Navbar */}
      <div className="flex items-center justify-between p-4 bg-white shadow-md sticky top-0 z-50">
        <button
          onClick={() => navigate(-1)}
          className="text-gray-600 font-semibold"
        >
          ← Back
        </button>
        <h1 className="text-lg font-bold">Your Cart</h1>
        <span className="w-8" /> {/* Placeholder for spacing */}
      </div>

      {/* Cart Content */}
      <div className="flex-1 overflow-y-auto p-4 w-full max-w-full">
        {isEmpty ? (
          // Empty Cart
          <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="bg-gray-100 rounded-full p-6 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m13-9l2 9m-5-4a2 2 0 11-4 0"
                />
              </svg>
            </div>
            <h2 className="text-lg font-semibold">Your Cart is Empty</h2>
            <p className="text-gray-500 mt-1 mb-5">
              Start adding some products to make your cart happy!
            </p>
            <button
              onClick={() => navigate(-1)}
              className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg shadow"
            >
              Browse Products
            </button>
          </div>
        ) : (
          // Filled Cart
          <div className="space-y-4">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center bg-white p-3 rounded-lg shadow-sm"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-md object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-gray-500">₹{item.price}</p>
                </div>
                <div className="flex items-center ml-auto space-x-2">
                  <button className="bg-gray-200 px-2 rounded">-</button>
                  <span>{item.quantity}</span>
                  <button className="bg-gray-200 px-2 rounded">+</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
