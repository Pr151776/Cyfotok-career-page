const cloudinary = require("cloudinary").v2;
const dotenv = require("dotenv");

// load env only if not loaded already
dotenv.config({ path: "./backend/config.env" });

console.log("DEBUG: CLOUDINARY envs ->", {
  NAME: !!process.env.CLOUDINARY_CLOUD_NAME,
  KEY: !!process.env.CLOUDINARY_API_KEY,
  SECRET: !!process.env.CLOUDINARY_API_SECRET,
});

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

module.exports = cloudinary;
