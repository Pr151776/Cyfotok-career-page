const multer = require("multer");
const fs = require("fs");
const path = require("path");

const resumePath = path.join(__dirname, "../uploads/resumes");

// Create folder if it doesn't exist
if (!fs.existsSync(resumePath)) {
  fs.mkdirSync(resumePath, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, resumePath);
  },

  filename: function (req, file, cb) {
    const unique = Date.now() + "-" + file.originalname;
    cb(null, unique);
  },
});

// Validate file types
const fileFilter = (req, file, cb) => {
  const allowed = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];
  if (allowed.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(
      new Error("Only PDF, DOC, DOCX files are allowed"),
      false
    );
  }
};

module.exports = multer({ storage, fileFilter });
