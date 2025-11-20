const express = require("express");
const { submitApplication } = require("../Controller/userController");
const upload = require("../Middleware/multerConfig");

const router = express.Router();

router.post(
  "/apply",
  (req, res, next) => {
    upload.array("resume", 5)(req, res, function (err) {
      if (err) {
        return res.status(400).json({
          success: false,
          message: err.message || "File upload failed",
        });
      }
      next();
    });
  },
  submitApplication
);

module.exports = router;
