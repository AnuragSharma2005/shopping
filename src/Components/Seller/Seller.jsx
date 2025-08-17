"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function SellerPanel() {
  const navigate = useNavigate()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
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
    stock: "In_Stock",
  })

  const finalCategoryOptions = {
    Men: ["Shirt", "Jeans", "T-shirt"],
    Women: ["Dress", "Skirt", "Top"],
    Baby: ["Onesie", "Pants", "Cap"],
    Essential: [
      "Books",
      "Breakfast",
      "Clean",
      "Cookies",
      "Dairy",
      "Frozen",
      "Fruits",
      "Icecream",
      "Juices",
      "Kitchen",
      "Packaged",
      "Soap",
      "Sweets",
      "Tea",
    ],
  }

  // Fetch seller products on mount
  useEffect(() => {
    const fetchSellerProducts = async () => {
      try {
        setLoading(true)
        setError("")

        const res = await fetch("http://localhost:5000/api/v1/products/seller/my-products", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        })

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`)
        }

        const data = await res.json()
        console.log("API Response:", data)

        if (data.success && data.data && data.data.products) {
          setProducts(data.data.products)
        } else {
          setProducts([])
        }
      } catch (err) {
        console.error("Fetch error:", err)
        setError("Failed to load products. Please try again.")
        setProducts([])
      } finally {
        setLoading(false)
      }
    }

    fetchSellerProducts()
  }, [])

  const handleChange = (e) => {
    const { name, value, files } = e.target
    if (name === "image") {
      setForm({ ...form, image: files[0] })
    } else {
      setForm({ ...form, [name]: value })
    }
  }

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
      stock: "In_Stock",
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!form.name || !form.price || !form.description) {
      alert("Please fill in all required fields")
      return
    }

    try {
      setLoading(true)
      setError("")

      const formData = new FormData()

      // Add image if provided
      if (form.image) {
        formData.append("images", form.image)
      }

      // Add required fields as simple values
      formData.append("Productname", form.name)
      formData.append(
        "description",
        JSON.stringify({
          short: form.description.slice(0, 200),
          detailed: form.description,
        }),
      )
      formData.append(
        "price",
        JSON.stringify({
          regular: Number.parseFloat(form.price),
          sale: null,
          discount: 0,
        }),
      )
      formData.append("stock", form.quantity.toString())

      formData.append("mainCategory", form.mainCategory)
      formData.append("subCategory", form.subCategory.toLowerCase())
      formData.append("finalCategory", form.finalCategory)

      console.log("[v0] Sending FormData with:", {
        Productname: form.name,
        description: form.description,
        price: form.price,
        stock: form.quantity,
        mainCategory: form.mainCategory,
        subCategory: form.subCategory.toLowerCase(),
        finalCategory: form.finalCategory,
        hasImage: !!form.image,
      })

      const res = await fetch("http://localhost:5000/api/v1/products/seller/create", {
        method: "POST",
        body: formData,
        credentials: "include",
      })

      let data
      const contentType = res.headers.get("content-type")

      if (contentType && contentType.includes("application/json")) {
        data = await res.json()
      } else {
        // Handle HTML error responses
        const text = await res.text()
        console.error("[v0] HTML response received:", text)
        throw new Error(`Server error: ${res.status} ${res.statusText}`)
      }

      if (!res.ok) {
        throw new Error(data.message || `HTTP error! status: ${res.status}`)
      }

      alert("Product submitted successfully!")
      if (data.data) {
        setProducts([data.data, ...products])
      }
      resetForm()
    } catch (err) {
      console.error("Submit error:", err)
      setError(err.message)
      alert(err.message)
    } finally {
      setLoading(false)
    }
  }

  const showSubCategories = form.mainCategory === "Fashion" || form.mainCategory === "Essential"

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Error Display */}
      {error && (
        <div className="max-w-4xl mx-auto mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">{error}</div>
      )}

      {/* Form */}
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-6 space-y-6">
        <h1 className="text-2xl font-bold">Add New Product</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="file" name="image" onChange={handleChange} className="w-full" accept="image/*" />
          {form.image && typeof form.image === "object" && (
            <img
              src={URL.createObjectURL(form.image) || "/placeholder.svg"}
              alt="preview"
              className="w-32 h-32 object-cover rounded"
            />
          )}

          <input
            type="text"
            name="name"
            placeholder="Product Name *"
            className="w-full border p-2 rounded"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Price *"
            className="w-full border p-2 rounded"
            value={form.price}
            onChange={handleChange}
            min="0"
            step="0.01"
            required
          />
          <select name="quantity" className="w-full border p-2 rounded" value={form.quantity} onChange={handleChange}>
            {[...Array(10)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                Quantity: {i + 1}
              </option>
            ))}
          </select>
          <textarea
            name="description"
            placeholder="Product Description *"
            className="w-full border p-2 rounded"
            value={form.description}
            onChange={handleChange}
            rows="4"
            required
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
            <option value="Fashion">Fashion</option>
            <option value="Essential">Essential</option>
            <option value="Pharmacy">Pharmacy</option>
            <option value="Grocery">Grocery</option>
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
                {form.mainCategory === "Fashion" && (
                  <>
                    <option value="Men">Men</option>
                    <option value="Women">Women</option>
                    <option value="Baby">Baby</option>
                  </>
                )}
                {form.mainCategory === "Essential" && <option value="Essential">Essential</option>}
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
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              )}
            </>
          )}

          <select name="stock" className="w-full border p-2 rounded" value={form.stock} onChange={handleChange}>
            <option value="In_Stock">In Stock</option>
            <option value="out_of_stock">Out of Stock</option>
          </select>

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white w-full p-2 rounded hover:bg-blue-700 disabled:bg-blue-300"
          >
            {loading ? "Submitting..." : "Submit Product"}
          </button>
        </form>
      </div>

      {/* Product Display */}
      <div className="max-w-4xl mx-auto mt-8">
        <h2 className="text-xl font-bold mb-4">🧾 Seller Panel Products</h2>

        {loading && <p className="text-center">Loading products...</p>}

        {!loading && products.length === 0 && (
          <p className="text-center text-gray-500">No products found. Add your first product above!</p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((prod) => {
            const desc = typeof prod.description === "string" ? JSON.parse(prod.description) : prod.description

            return (
              <div key={prod._id} className="bg-white rounded shadow p-4 space-y-2">
                {prod.images?.[0]?.url && (
                  <img
                    src={prod.images[0].url || "/placeholder.svg"}
                    className="w-full h-40 object-cover rounded"
                    alt={prod.Productname}
                  />
                )}
                <h3 className="font-bold text-lg">{prod.Productname}</h3>
                <p className="text-green-600 font-semibold">₹{prod.price?.regular || 0}</p>
                <p className="text-sm text-gray-600">Stock: {prod.stock}</p>
                <p className="text-sm text-gray-700">{desc.short || desc.detailed}</p>
                <p
                  className={`font-semibold text-sm ${
                    prod.status === "out_of_stock" ? "text-red-500" : "text-green-600"
                  }`}
                >
                  {prod.status === "In_Stock" ? "In Stock" : "Out of Stock"}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
