import mongoose from "mongoose";

// Updated Schema
const SkinProblemSchema = new mongoose.Schema({
  stage1: { type: String, required: true },
});

const SkinProblemModel =
  mongoose.models.SkinType || mongoose.model("SkinType", SkinProblemSchema);

export default SkinProblemModel;
