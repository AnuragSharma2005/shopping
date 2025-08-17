import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { uploadOnCloudinary, deleteCloudinaryFile } from "../utils/cloudinary.js";

// Generate access and refresh tokens
const generateAccessAndRefreshTokens = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return { refreshToken, accessToken, role: user.role };
  } catch (error) {
    throw new ApiError(501, "Something went wrong while generating refresh and access token");
  }
};

// Cookie options
const options = {
  httpOnly: true,
  secure: true,
  sameSite: "None",
};

// Register user
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, address, phoneNumber, role } = req.body;

  if (!name || !email || !password || !address || !phoneNumber) {
    throw new ApiError(400, "name, email, password, address and phone number are required");
  }

  const existedUser = await User.findOne({ email });
  if (existedUser) {
    throw new ApiError(409, "User already exists");
  }

  let profilePhotoUrl = null;
  if (req.file) {
    try {
      const response = await uploadOnCloudinary(req.file.buffer);
      if (response && response.secure_url) {
        profilePhotoUrl = response.secure_url;
      }
    } catch (error) {
      console.error("Profile photo upload failed:", error);
    }
  }

  const user = await User.create({
    name,
    email,
    password,
    role: role || "buyer",
    address,
    phoneNumber,
    profilePhoto: profilePhotoUrl,
  });

  const createdUser = await User.findById(user._id).select("-password -refreshToken");
  return res.status(200).json(new ApiResponse(200, createdUser, "User Registered successfully"));
});

// Login user
const loginUser = asyncHandler(async (req, res) => {
  const { email, password, role: requestedRole } = req.body;

  if (!email || !password) {
    throw new ApiError(401, "Email and Password are required");
  }

  // Build query: include role only if sent
  const query = { email };
  if (requestedRole) query.role = requestedRole;

  const user = await User.findOne(query);
  if (!user) {
    throw new ApiError(404, "User does not exist");
  }

  const correctPassword = await user.isPasswordCorrect(password);
  if (!correctPassword) {
    throw new ApiError(401, "Incorrect password");
  }

  const { refreshToken, accessToken, role: userRole } = await generateAccessAndRefreshTokens(user._id);
  const loggedInUser = await User.findById(user._id).select("-password -refreshToken");

  return res
    .status(200)
    .cookie("refreshToken", refreshToken, options)
    .cookie("accessToken", accessToken, options)
    .json(new ApiResponse(200, { ...loggedInUser.toObject(), role: userRole, token: accessToken }, "User logged in successfully"));
});

// Logout user
const logoutUser = asyncHandler(async (req, res) => {
  await User.findByIdAndUpdate(
    req.user._id,
    { $set: { refreshToken: undefined } },
    { new: true }
  );

  return res
    .status(200)
    .clearCookie("refreshToken", options)
    .clearCookie("accessToken", options)
    .json(new ApiResponse(200, {}, "User logged out successfully"));
});

// Update account details
const updateAccountDetails = asyncHandler(async (req, res) => {
  const { name, address, phoneNumber } = req.body;

  if (!name && !address && !phoneNumber) {
    throw new ApiError(400, "At least one field is required to update");
  }

  const updateFields = {};
  if (name) updateFields.name = name;
  if (address) updateFields.address = address;
  if (phoneNumber) updateFields.phoneNumber = phoneNumber;

  const user = await User.findByIdAndUpdate(
    req.user._id,
    { $set: updateFields },
    { new: true }
  ).select("-password");

  return res.status(200).json(new ApiResponse(200, user, "Account details updated successfully"));
});

// Get current user
const getCurrentUser = asyncHandler(async (req, res) => {
  return res.status(200).json(new ApiResponse(200, req.user, "Current user fetched successfully"));
});

// Change current password
const changeCurrentPassword = asyncHandler(async (req, res) => {
  const { oldpassword, newpassword } = req.body;

  if (!oldpassword || !newpassword) {
    throw new ApiError(400, "Old and new password are required");
  }

  if (newpassword.length < 6) {
    throw new ApiError(400, "New password must be at least 6 characters");
  }

  const user = await User.findById(req.user._id);
  const correctPassword = await user.isPasswordCorrect(oldpassword);

  if (!correctPassword) {
    throw new ApiError(401, "Old password is incorrect");
  }

  user.password = newpassword;
  await user.save({ validateBeforeSave: false });

  return res.status(200).json({ status: 200, message: "Password changed successfully" });
});

export {
  registerUser,
  loginUser,
  logoutUser,
  updateAccountDetails,
  getCurrentUser,
  changeCurrentPassword,
};
