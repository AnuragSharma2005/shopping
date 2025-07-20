import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SellerPanel() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [form, setForm] = useState({
    image: null,
    name: "",
    price: "",
    quantity: 1,
    description: "",
    quality: "",
    mainCategory: "Fashion",
    subCategory: "",
    finalCategory: "",
    stock: "In Stock",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setForm({ ...form, image: URL.createObjectURL(files[0]) });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProducts([...products, form]);
    alert("Product submitted to seller panel.");
    resetForm();
  };

  const handleAddToCart = (item) => {
    setCart([...cart, item]);
    navigate("/cart", { state: { cart: [...cart, item] } });
  };

  const resetForm = () => {
    setForm({
      image: null,
      name: "",
      price: "",
      quantity: 1,
      description: "",
      quality: "",
      mainCategory: "Fashion",
      subCategory: "",
      finalCategory: "",
      stock: "In Stock",
    });
  };

  const showSubCategories = form.mainCategory === "Fashion";

  const finalCategoryOptions = {
    Men: ["Shirt", "Jeans", "T-shirt"],
    Women: ["Dress", "Skirt", "Top"],
    Baby: ["Onesie", "Pants", "Cap"],
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Form */}
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-6 space-y-6">
        <h1 className="text-2xl font-bold">Add New Product</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="file"
            name="image"
            onChange={handleChange}
            className="w-full"
            accept="image/*"
          />
          {form.image && (
            <img
              src={form.image}
              alt="preview"
              className="w-32 h-32 object-cover rounded"
            />
          )}
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            className="w-full border p-2 rounded"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            className="w-full border p-2 rounded"
            value={form.price}
            onChange={handleChange}
            required
          />

          <select
            name="quantity"
            className="w-full border p-2 rounded"
            value={form.quantity}
            onChange={handleChange}
          >
            {[...Array(10)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                Quantity: {i + 1}
              </option>
            ))}
          </select>

          <textarea
            name="description"
            placeholder="Details"
            className="w-full border p-2 rounded"
            value={form.description}
            onChange={handleChange}
          />
          <input
            type="text"
            name="quality"
            placeholder="Quality (e.g., Premium, Regular)"
            className="w-full border p-2 rounded"
            value={form.quality}
            onChange={handleChange}
          />

          <select
            name="mainCategory"
            className="w-full border p-2 rounded"
            value={form.mainCategory}
            onChange={handleChange}
          >
            <option>Fashion</option>
            <option>Essentials</option>
            <option>Pharmacy</option>
          </select>

          {showSubCategories && (
            <>
              <select
                name="subCategory"
                className="w-full border p-2 rounded"
                value={form.subCategory}
                onChange={handleChange}
              >
                <option value="">Select Sub Category</option>
                <option>Men</option>
                <option>Women</option>
                <option>Baby</option>
              </select>

              {form.subCategory && (
                <select
                  name="finalCategory"
                  className="w-full border p-2 rounded"
                  value={form.finalCategory}
                  onChange={handleChange}
                >
                  <option value="">Select Product Type</option>
                  {finalCategoryOptions[form.subCategory]?.map((cat) => (
                    <option key={cat}>{cat}</option>
                  ))}
                </select>
              )}
            </>
          )}

          <select
            name="stock"
            className="w-full border p-2 rounded"
            value={form.stock}
            onChange={handleChange}
          >
            <option>In Stock</option>
            <option>Out of Stock</option>
          </select>

          <button className="bg-blue-600 text-white w-full p-2 rounded">
            Submit Product
          </button>
        </form>
      </div>

      {/* Product Display */}
      <div className="max-w-4xl mx-auto mt-8">
        <h2 className="text-xl font-bold mb-4">🧾 Seller Panel Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((prod, i) => (
            <div
              key={i}
              className="bg-white rounded shadow p-4 space-y-2 cursor-pointer"
              onClick={() => navigate(`/product/${i}`, { state: { product: prod } })}
            >
              {prod.image && (
                <img
                  src={prod.image}
                  className="w-full h-40 object-cover rounded"
                />
              )}
              <h3 className="font-bold text-lg">{prod.name}</h3>
              <p>₹{prod.price}</p>
              <p>Quantity: {prod.quantity}</p>
              <p>{prod.description}</p>
              <p>Quality: {prod.quality}</p>
              <p>Main: {prod.mainCategory}</p>
              {prod.subCategory && <p>Sub: {prod.subCategory}</p>}
              {prod.finalCategory && <p>Type: {prod.finalCategory}</p>}
              <p
                className={`font-semibold ${
                  prod.stock === "Out of Stock"
                    ? "text-red-500"
                    : "text-green-600"
                }`}
              >
                {prod.stock}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
