import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import { rateLimit } from "express-rate-limit"
import multer from "multer"

const app = express()
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 min
  limit: 100,
  standardHeaders: "draft-8",
  legacyHeaders: false,
})

const storage = multer.memoryStorage()
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
      cb(null, true)
    } else {
      cb(new Error("Only image files are allowed"), false)
    }
  },
})

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  }),
)

app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: "16kb" }))
app.use(express.static("public"))
app.use(cookieParser())
app.use(limiter)

app.use(upload.single("images"))

// Health check endpoint
app.get("/healthz", (req, res) => {
  res.status(200).json({ status: "OK" })
})

// Routes
import userRoutes from "./routes/user.routes.js"
import cartRoutes from "./routes/cart.routes.js"
import reviewRoutes from "./routes/review.routes.js"
import productRoutes from "./routes/product.routes.js"
import orderRoutes from "./routes/order.routes.js"
import paymentRoutes from "./routes/payment.routes.js"

app.use("/api/v1/users", userRoutes)
app.use("/api/v1/cart", cartRoutes)
app.use("/api/v1/reviews", reviewRoutes)
app.use("/api/v1/products", productRoutes)
app.use("/api/v1/orders", orderRoutes)
app.use("/api/v1/payments", paymentRoutes)

export { app }
