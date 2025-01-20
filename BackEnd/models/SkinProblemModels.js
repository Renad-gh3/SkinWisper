import mongoose from "mongoose";

const SkinProblemSchema = new mongoose.Schema({
  ProblemDescription: { type: String, required: true },
  Solution: { type: String, required: true },
  SkinProblem: { type: String, required: true },
});

const SkinProblemModel =
  mongoose.models.SkinProblem ||
  mongoose.model("SkinProblem", SkinProblemSchema);

export default SkinProblemModel;
