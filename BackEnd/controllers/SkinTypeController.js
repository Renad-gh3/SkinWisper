import SkinTypeModel from "../models/SkinTypeModels.js";
import fs from "fs";

//add Product Items

const addST = async (req, res) => {
  //  there is ERROR here
  //let image_filename = `${req.file.filename}`;

  const SkinType = new SkinTypeModel({
    stage: req.body.stage,
    product: req.body.product,
    suggestion: req.body.suggestion,
    skinType: req.body.skinType,
    period: req.body.period
  });
  try {
    await SkinType.save();
    res.json({ success: true, massage: "SkinType Item Added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, massage: "ERROR" });
  }
};

//all SkinType list
const listST = async (req,res) =>{
  try {
      const SkinType = await SkinTypeModel.find({});
      res.json({success: true , data:SkinType})
  } catch (error) {
      console.log(error);
      res.json({ success: false, massage: "ERROR" });
  }
}

//remove SkinType
const removeST = async (req,res) =>{
  try {

      const SkinType = await SkinTypeModel.findById(req.body.id);
      fs.unlink(`uploads/${SkinType.image}`,()=>{});

      await SkinTypeModel.findByIdAndDelete(req.body.id);
      res.json({success: true, massage: "Skin Type removed"});

  } catch (error) {

      console.log(error);
      res.json({ success: false, massage: "ERROR" });

  }
}

export { addST , listST , removeST};
