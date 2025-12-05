const express = require("express");
const router = express.Router();
const upload = require("../Middleware/multerConfig");
const { submitApplication } = require("../Controller/userController");

router.post("/apply", (req, res, next) => {
  upload.single("resume")(req, res, function (err) {
    if (err) {
      // multer error or cloudinary error
      console.error("MULTER/CLOUDINARY ERROR:", err);
      // Multer specific
      if (err.code === "LIMIT_FILE_SIZE") {
        return res.status(400).json({ success: false, message: "File too large" });
      }
      return res.status(400).json({ success: false, message: err.message || "Upload failed" });
    }
    // proceed to controller
    submitApplication(req, res).catch(next); // ensure promise errors handled
  });
});
module.exports = router;