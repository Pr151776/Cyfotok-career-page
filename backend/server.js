const express = require('express');
const dotenv = require('dotenv');
const userRoute = require('./Routes/userRoute');
const errorMiddleware = require('./Middleware/error');
const cookieParser = require('cookie-parser');
const connectDatabase = require('./database');
const cors = require('cors')

dotenv.config({path: './backend/config.env'})
connectDatabase();

const app = express();

// Middleware
app.use(express.json())
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: "http://localhost:5173",
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type,Authorization",
}));


// Routes
app.use('/api/v1',userRoute)

app.use(errorMiddleware);

const PORT = process.env.PORT;

app.listen(PORT, ()=>{
    console.log(`Server is running PORT is ${PORT} \n Mode : ${process.env.NODE_ENV}`)
})

