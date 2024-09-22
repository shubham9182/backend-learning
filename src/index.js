import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/index.js";

// Load environment variables from .env file
dotenv.config({
  path: './env',
});

// Initialize express app
const app = express();

// Connect to MongoDB
connectDB()
  .then(() => {
    // Once DB is connected, start the server
    const port = process.env.PORT || 8000;
    app.listen(port, () => {
      console.log(`Server is running at port: ${port}`);
    });
  })
  .catch((err) => {
    // Handle any DB connection errors
    console.log('MONGO DB connection failed !!!', err);
  });

// Error listener for app-level errors (optional but recommended)
app.on("error", (error) => {
  console.log("Error in app: ", error);
});
