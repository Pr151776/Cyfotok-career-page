const catchAsyncError = require("../Middleware/catchAsyncError");
const Application = require("../Model/userModel");

exports.submitApplication = catchAsyncError(async (req, res) => {
  try {
    // console.log("=== REQ.BODY ===", req.body);
    // console.log("=== REQ.FILE ===", req.file);


    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Resume is required",
      });
    }

    let resumeUrl = "";
  if (req.file && req.file.path) {
    resumeUrl = req.file.path; // Cloudinary returns hosted URL
  }
  
    const application = await Application.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      phone: req.body.phone,
      position: req.body.position,
      experience: req.body.experience,
      coverletter: req.body.coverletter,
      portfolioUrl: req.body.portfolioUrl,
      aboutus: req.body.aboutus,
      resumes: resumeUrl,
    });

    return res.status(201).json({
      success: true,
      message: "Application submitted successfully",
      data: application,
    });
  } catch (err) {
    console.log("Error:", err);
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});
