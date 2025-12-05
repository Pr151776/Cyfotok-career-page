const express = require('express');
const dotenv = require('dotenv');
const userRoute = require('./Routes/userRoute');
const errorMiddleware = require('./Middleware/error');
const cookieParser = require('cookie-parser');
const connectDatabase = require('./database');
const cors = require('cors');

dotenv.config({ path: './backend/config.env' });
connectDatabase();

const app = express();

const allowed = [
  "http://localhost:5173",
  "https://your-frontend.vercel.app"
];
app.use(cors({
  origin: function(origin, callback) {
    // allow requests with no origin (curl, Postman)
    if (!origin) return callback(null, true);
    if (allowed.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  methods: "GET,POST,PUT,DELETE",
  credentials: true
}));


app.use(cookieParser());
app.use('/api/v1', userRoute);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Error handler
app.use(errorMiddleware);

const PORT = process.env.PORT || 8500;

app.listen(PORT, () => {
  console.log(`Server is running PORT is ${PORT} \n Mode : ${process.env.NODE_ENV}`);
});
