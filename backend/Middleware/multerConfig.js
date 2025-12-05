const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/cloudinary");

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "resume_uploads",
    resource_type: "raw", // ok for pdf/doc
    allowed_formats: ["pdf", "doc", "docx"],
    public_id: (req, file) =>
      `${Date.now()}-${file.originalname.replace(/\s+/g, "_")}`,
  },
});

// Add limits to multer so large files rejected early
const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB limit
});

module.exports = upload;
