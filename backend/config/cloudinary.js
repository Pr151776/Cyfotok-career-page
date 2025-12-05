const cloudinary = require("cloudinary").v2;
const dotenv = require("dotenv");

// load env - use absolute path robustly
dotenv.config({ path: require("path").join(__dirname, "..", "config.env") });

// DEBUG (remove after)
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

