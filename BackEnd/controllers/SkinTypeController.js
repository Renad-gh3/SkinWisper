import SkinTypeModel from "../models/SkinTypeModels.js";
import fs from "fs";

// Add Product Items
const addST = async (req, res) => {
  const SkinType = new SkinTypeModel({
    stage1: req.body.stage1,
    stage2: req.body.stage2,
    stage3: req.body.stage3,
    S1product: req.body.S1product,
    S1suggestion: req.body.S1suggestion,
    S2product: req.body.S2product,
    S2suggestion: req.body.S2suggestion,
    S3product: req.body.S3product,
    S3suggestion: req.body.S3suggestion,
    skinType: req.body.skinType.toLowerCase(), // Ensure consistency in skinType input
    period: req.body.period.toLowerCase(), // Ensure consistency in period input
  });

  try {
    await SkinType.save();
    res.json({ success: true, message: "SkinType Item Added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "ERROR" });
  }
};

// List all SkinType items
const listST = async (req, res) => {
  try {
    const SkinType = await SkinTypeModel.find({});
    res.json({ success: true, data: SkinType });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "ERROR" });
  }
};

// Remove SkinType item
const removeST = async (req, res) => {
  try {
    const SkinType = await SkinTypeModel.findById(req.body.id);

    if (SkinType) {
      if (SkinType.image) {
        // fs.unlink(uploads/${SkinType.image}, () => {});
      }
      await SkinTypeModel.findByIdAndDelete(req.body.id);
      res.json({ success: true, message: "Skin Type removed" });
    } else {
      res.json({ success: false, message: "Skin Type not found" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "ERROR" });
  }
};

export { addST, listST, removeST };
