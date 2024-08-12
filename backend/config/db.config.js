const mongoose = require("mongoose");

// A function to connect this application to a mongodb server
const connectDB = () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(
      process.env.MONGO_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      () => {
        console.log("Application connected to MongoDB Server");
      }
    );
  } catch (error) {
    console.log("Error occured while connecting to MongoDB Server");
    process.exit(1);
  }
};

module.exports = { connectDB };
