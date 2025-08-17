"use client"

import { useState, useEffect } from "react"

export const useProducts = (category) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      if (!category) return

      setLoading(true)
      setError(null)

      try {
        console.log("[v0] Fetching products for category:", category)

        const response = await fetch(`http://localhost:5000/api/v1/products/category-type/${category}`)

        if (!response.ok) {
          throw new Error(`Failed to fetch products: ${response.status}`)
        }

        const data = await response.json()
        console.log("[v0] Products fetched successfully:", data)
        console.log("[v0] Full API response structure:", JSON.stringify(data, null, 2))
        console.log("[v0] data.data:", data.data)
        console.log("[v0] data.data.products:", data.data?.products)
        console.log("[v0] data.products:", data.products)
        console.log("[v0] data.products length:", data.products?.length)
        console.log("[v0] Setting products to state:", data.products || [])

        const productsArray = data.data?.products || data.products || []
        console.log("[v0] Final products array to set:", productsArray)
        setProducts(productsArray)
      } catch (err) {
        console.error("[v0] Error fetching products:", err)
        setError(err.message)
        setProducts([])
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [category])

  return { products, loading, error }
}
