import mongoose from "mongoose";
//comment
const SkinTypeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  link: { type: String, required: true },
  image: { type: String, required: true },
});

const SkinTypeModel =
  mongoose.models.SkinType || mongoose.model("SkinType", SkinTypeSchema);

export default SkinTypeModel;
