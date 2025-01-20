import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

//connect to the database
export const connectDB = async () => {
  const dbURI = process.env.MONGO_URI; // Use the MONGO_URI from environment variables

  if (!dbURI) {
    console.error("MongoDB URI not found in environment variables");
    return;
  }

  // Connect to MongoDB using the connection string
  try {
    await mongoose.connect(dbURI);
    console.log("DB Connected");
  } catch (err) {
    console.error("Error connecting to DB:", err);
  }
};
