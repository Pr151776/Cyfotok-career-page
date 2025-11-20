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
      unique: true,
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
    aboutus: String,
    coverletter: String,
    portfolioUrl: {
      type: String,
      validate: {
        validator(v) {
          return !v || validator.isURL(v);
        },
        message: "Invalid URL",
      },
    },
    resumes: [
      {
        fileUrl: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

const Application =  mongoose.model("Application", applicationSchema);
module.exports = Application;



// const mongoose = require('mongoose');
// const validaor = require('validator')

// const userSchema = new mongoose.Schema({
//     firstname: {
//         type: String,
//         required: [true, "Please enter First name"]
//     },
//     lastname: {
//         type: String,
//         required: [true, "Please enter Lansrt name"]
//     },
//     email: {
//         type: String,
//         required: [true, "Please enter Email"],
//         unique: true,
//         validate: [validaor.isEmail, "Please enter valid email"]
//     },
//     phone: {
//         type: String,
//         required: [true, "Please enter Phone number"]
//     },
//     position: {
//         type: String,
//         required: [true, "Please select Position applied"]
//     },
//     expereience: {
//         type: Number,
//         required: [true, "Please enter year of expereience"]
//     },
//     aboutus: {
//         type: String,
//     },
//     coverletter: {
//         type: String
//     },
//     portfolioUrl: {
//         type: URL
//     },
//     images: [
//         {
//             image: {
//                 type: String,
//                 required: true
//             }
//         }
//     ]
// });

// const User = mongoose.model('User', userSchema);

// module.exports = User;