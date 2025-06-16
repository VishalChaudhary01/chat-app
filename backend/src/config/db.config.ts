import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI!);
    console.log("Database connected");
  } catch (error) {
    console.error("Failed to connect to database", error);
    process.exit(1);
  }
};
