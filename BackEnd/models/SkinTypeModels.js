import mongoose from "mongoose";

// Updated Schema
const SkinTypeSchema = new mongoose.Schema({
  stage1: { type: String, required: true },
  stage2: { type: String, required: true },
  stage3: { type: String, required: true },
  S1product: { type: String, required: true },
  S1suggestion: { type: String, required: true },
  S2product: { type: String, required: true },
  S2suggestion: { type: String, required: true },
  S3product: { type: String, required: true },
  S3suggestion: { type: String, required: true },
  skinType: { type: String, required: true }, // Combination, Normal, Dry, Oily, Sensitive
  period: { type: String, required: true }, // Morning or Evening
});

const SkinTypeModel =
  mongoose.models.SkinType || mongoose.model("SkinType", SkinTypeSchema);

export default SkinTypeModel;
