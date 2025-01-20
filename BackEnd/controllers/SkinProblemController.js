import SkinProblemModel from "../models/SkinProblemModels.js";
import fs from "fs";

//add Product Items
const addSP = async (req, res) => {
  //let image_filename = `${req.file.filename}`;
  const SkinProblem = new SkinProblemModel({
    ProblemDescription: req.body.ProblemDescription,
    Solution: req.body.Solution,
    SkinProblem: req.body.SkinProblem,
  });
  try {
    await SkinProblem.save();
    res.json({ success: true, massage: "SkinProblem Item Added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, massage: "ERROR" });
  }
};

//all SkinProblem list
const listSP = async (req, res) => {
  try {
    const SkinProblem = await SkinProblemModel.find({});
    res.json({ success: true, data: SkinProblem });
  } catch (error) {
    console.log(error);
    res.json({ success: false, massage: "ERROR" });
  }
};

//remove SkinProblem
const removeSP = async (req, res) => {
  try {
    const SkinProblem = await SkinProblemModel.findById(req.body.id);
    fs.unlink(`uploads/${SkinProblem.image}`, () => {});

    await SkinProblemModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, massage: "Skin problem removed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, massage: "ERROR" });
  }
};

export { addSP, listSP, removeSP };
