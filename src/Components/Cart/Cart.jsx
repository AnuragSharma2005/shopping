import React from "react";
import { useLocation } from "react-router-dom";

export default function Cart() {
  const location = useLocation();
  const cart = location.state?.cart || [];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-4">🛒 Your Cart</h2>
        {cart.length === 0 ? (
          <p>No items in cart.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cart.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 border rounded p-4 space-y-2"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-40 object-cover rounded"
                />
                <h3 className="font-bold">{item.name}</h3>
                <p>₹{item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Category: {item.mainCategory}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
