import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://SkinWis:987654321@cluster0.pavkx.mongodb.net/SkinWisper"
    )
    .then(() => console.log("DB Connected"));
};
