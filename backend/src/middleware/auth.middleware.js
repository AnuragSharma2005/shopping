import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js"

// Mock user data for demo purposes
const mockUsers = {
  seller123: {
    _id: "68a1c29923abfd305668a184",
    username: "reliance",
    email: "r@gmail.com",
    role: "retailer", // Updated to match your JWT token role
  },
  admin123: {
    _id: "admin123",
    username: "testadmin",
    email: "admin@test.com",
    role: "admin",
  },
}

export const verifyJWT = asyncHandler(async (req, res, next) => {
  try {
    // For demo purposes, we'll use a simple token or create a mock user
    const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "")

    // If no token, create a mock seller user for demo
    if (!token) {
      req.user = mockUsers.seller123
      next()
      return
    }

    // In a real app, you'd verify the JWT token here
    // For demo, we'll just use the mock user
    req.user = mockUsers.seller123
    next()
  } catch (error) {
    throw new ApiError(401, error?.message || "Invalid access token")
  }
})

export const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!req.user) {
      throw new ApiError(401, "Authentication required")
    }

    const acceptedRoles = [...roles]
    if (roles.includes("seller") && !roles.includes("retailer")) {
      acceptedRoles.push("retailer")
    }

    if (!acceptedRoles.includes(req.user.role)) {
      throw new ApiError(403, `Role: ${req.user.role} is not allowed to access this resource`)
    }

    next()
  }
}
