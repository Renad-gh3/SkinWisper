import mongoose from "mongoose";
//comment
export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://SkinWis:SkinWis@cluster0.pavkx.mongodb.net/SkinWisper"
    )
    .then(() => console.log("DB Connected"));
};
