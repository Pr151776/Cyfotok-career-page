const mongoose = require("mongoose");
const validator = require("validator");

const applicationSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, "Please enter first name"],
    },
    lastname: {
      type: String,
      required: [true, "Please enter last name"],
    },
    email: {
      type: String,
      required: [true, "Please enter email"],
      validate: [validator.isEmail, "Please enter valid email"],
    },
    phone: {
      type: String,
      required: [true, "Please enter phone number"],
    },
    position: {
      type: String,
      required: [true, "Please select position applied"],
    },
    experience: {
      type: Number,
      required: [true, "Please enter years of experience"],
    },
    aboutus: {
      type: String,
      default: "",
    },
    coverletter: {
      type: String,
      default: "",
    },
    portfolioUrl: {
      type: String,
      validate: {
        validator: (v) => !v || validator.isURL(v),
        message: "Invalid URL",
      },
    },
    resumes: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Application = mongoose.model("Application", applicationSchema);
module.exports = Application;
