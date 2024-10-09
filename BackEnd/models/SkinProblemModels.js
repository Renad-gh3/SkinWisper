import mongoose from "mongoose";

// Updated Schema
const SkinProblemSchema = new mongoose.Schema({
  ProblemDescription: { type: String, required: true },
  Solution: { type: String, required: true },
  SkinProblem: { type: String, required: true },
});

const SkinProblemModel =
  mongoose.models.SkinType || mongoose.model("SkinType", SkinProblemSchema);

export default SkinProblemModel;
