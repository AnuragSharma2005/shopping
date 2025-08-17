import { Router } from "express"
import {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  getSellerProducts,
  getProductsByCategory,
  getFeaturedProducts,
  getProductStats,
  updateProductStock,
  getProductsBySpecificCategory,
} from "../controllers/product.controller.js"
import { verifyJWT, authorizeRoles } from "../middleware/auth.middleware.js"

const router = Router()

// =========================
// Public routes (no auth)
// =========================
router.get("/", getAllProducts) // Get all products with filters/search/pagination
router.get("/featured", getFeaturedProducts) // Get featured products
router.get("/category/:category", getProductsByCategory) // Get products by category
router.get("/category-type/:categoryType", getProductsBySpecificCategory) // Get products by specific category type
router.get("/:productId", getProductById) // Get product by ID
router.get("/search", getAllProducts) // Search products (via query)
router.get("/filter", getAllProducts) // Filter products (via query)

// =========================
// Seller routes (auth required)
// =========================
router.post("/seller/create", verifyJWT, authorizeRoles("seller", "retailer", "admin"), createProduct)

router.get("/seller/my-products", verifyJWT, authorizeRoles("seller", "retailer", "admin"), getSellerProducts)

router.get("/seller/stats", verifyJWT, authorizeRoles("seller", "retailer", "admin"), getProductStats)

router.put("/seller/:productId", verifyJWT, authorizeRoles("seller", "retailer", "admin"), updateProduct)
router.patch("/seller/:productId", verifyJWT, authorizeRoles("seller", "retailer", "admin"), updateProduct)
router.delete("/seller/:productId", verifyJWT, authorizeRoles("seller", "retailer", "admin"), deleteProduct)

router.patch("/seller/:productId/stock", verifyJWT, authorizeRoles("seller", "retailer", "admin"), updateProductStock)

// =========================
// Admin routes
// =========================
router.get("/admin/all", verifyJWT, authorizeRoles("admin"), getAllProducts)

// Placeholder for future admin-specific controllers
router.patch("/admin/:productId/approve", verifyJWT, authorizeRoles("admin"))
router.patch("/admin/:productId/reject", verifyJWT, authorizeRoles("admin"))
router.get("/admin/stats", verifyJWT, authorizeRoles("admin"))

// =========================
// Alternative CRUD paths
// =========================
// You can use these if you prefer shorter URLs
router.post("/create", verifyJWT, authorizeRoles("seller", "retailer", "admin"), createProduct)
router.patch("/update/:productId", verifyJWT, authorizeRoles("seller", "retailer", "admin"), updateProduct)
router.delete("/delete/:productId", verifyJWT, authorizeRoles("seller", "retailer", "admin"), deleteProduct)
router.patch("/stock/:productId", verifyJWT, authorizeRoles("seller", "retailer", "admin"), updateProductStock)

export default router
