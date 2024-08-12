require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { connectDB } = require("./config/db.config");
const PORT = process.env.PORT || 5000;

const app = express();

// Make a connection to MongoDB
connectDB();
// Configure origins to allow access to our api (as of now any origin can send request to our api)
app.use(cors());
// Cookie parser to send signed cookies via our api
app.use(cookieParser(process.env.COOKIE_SECRET));
// middlewares to parse request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// auth route
app.use("/auth", require("./routes/auth.route"));
app.use("/diet", require("./routes/diet.route"));
app.use("/test", require("./routes/test.route"));

app.listen(PORT, () => console.log(`Application running on port ${PORT}`));
