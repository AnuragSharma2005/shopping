import React, { useState } from "react";

const CartDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Cart Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-5 right-5 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600"
      >
        🛒 Cart
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Your Cart</h2>
          <button onClick={() => setIsOpen(false)} className="text-xl">
            ✖
          </button>
        </div>

        {/* Cart Items */}
        <div className="p-4 space-y-4">
          {/* Example Item */}
          <div className="flex items-center justify-between border p-2 rounded">
            <span>Product 1</span>
            <span>₹500</span>
          </div>

          <div className="flex items-center justify-between border p-2 rounded">
            <span>Product 2</span>
            <span>₹800</span>
          </div>
        </div>

        {/* Checkout Button */}
        <div className="p-4 border-t">
          <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
