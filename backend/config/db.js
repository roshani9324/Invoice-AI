import mongoose from "mongoose";
export const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("Data base connected to mongoose"))
    .catch((error) => console.error("DB connection failed", error));
};
