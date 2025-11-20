const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./Model/userModel');

dotenv.config({ path: __dirname + '/config.env' });

// DB Connect
mongoose
  .connect(process.env.DB_LOCAL_URI)
  .then(() => console.log("MongoDB Connected for Seeding"))
  .catch((err) => console.log(err));

// 5 Dummy Users
const users = [
  {
    firstname: "Prakash",
    lastname: "R",
    email: "prakash@example.com",
    phone: "9519632997",
    position: "Developer",
    expereience: 3,
    images: [{ image: "img1.jpg" }]
  },
  {
    firstname: "Kavin",
    lastname: "M",
    email: "kavin@example.com",
    phone: "9876543210",
    position: "Tester",
    expereience: 2,
    images: [{ image: "img2.jpg" }]
  },
  {
    firstname: "Sanjay",
    lastname: "K",
    email: "sanjay@example.com",
    phone: "9123456780",
    position: "Designer",
    expereience: 4,
    images: [{ image: "img3.jpg" }]
  },
  {
    firstname: "Yogesh",
    lastname: "S",
    email: "yogesh@example.com",
    phone: "9000011122",
    position: "Developer",
    expereience: 5,
    images: [{ image: "img4.jpg" }]
  },
  {
    firstname: "Bala",
    lastname: "T",
    email: "bala@example.com",
    phone: "9998877665",
    position: "Manager",
    expereience: 7,
    images: [{ image: "img5.jpg" }]
  }
];

// Insert Data
const seedUsers = async () => {
  try {
    await User.deleteMany();
    console.log("Existing Users Removed");

    await User.insertMany(users);
    console.log("5 Sample Users Added Successfully");

    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedUsers();