import mongoose from "mongoose";
//comment
const SkinTypeSchema = new mongoose.Schema({
  stage: { type: String, required: true },
  product: { type: String, required: true },
  suggestion: { type: String, required: true },
  skinType: { type: String, required: true },
  period: { type: String, required: true }
});

const SkinTypeModel =
  mongoose.models.SkinType || mongoose.model("SkinType", SkinTypeSchema);

export default SkinTypeModel;
