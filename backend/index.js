const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const authRoute = require('./routes/auth')

dotenv.config();
const app = express();
mongoose.connect(process.env.MONGODB_URL, () => {
    console.log("CONNECT TO MONGO DB");
});

app.use(cors());
app.use(cookieParser()); // tao cookie
app.use(express.json());

// ROUTES
app.use('/v1/auth', authRoute);

app.listen(8000, () => {
    console.log("server is running");
});

// AUTHENTICATION: so sanh tk,mk ng dung va db
// AUTHORIZATION: ban la ai, ban co quyen lam gi?


