const catchAsyncError = require("../Middleware/catchAsyncError");
const Application = require("../Model/userModel");

exports.submitApplication = catchAsyncError(async (req, res) => {
  try {
    const {
      firstname,
      lastname,
      email,
      phone,
      position,
      experience,
      coverletter,
      portfolioUrl,
      aboutus,
    } = req.body;

    // files from multer
    const resumeFiles = req.files;

    if (!resumeFiles || resumeFiles.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Resume is required",
      });
    }

    const resumePaths = resumeFiles.map((file) => ({
      fileUrl: file.path,
    }));

    const application = await Application.create({
      firstname,
      lastname,
      email,
      phone,
      position,
      experience,
      coverletter,
      portfolioUrl,
      aboutus,
      resumes: resumePaths,
    });

    return res.status(201).json({
      success: true,
      message: "Application submitted successfully",
      data: application,
    });
  } catch (error) {
    console.error("Submit Error:", error);

    return res.status(500).json({
      success: false,
      message: "Application submit failed",
      error: error.message,
    });
  }
});
