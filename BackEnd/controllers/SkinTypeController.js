import SkinTypeModel from "../models/SkinTypeModels.js";
import fs from "fs";

//add Skin Type Items

const addST = async (req, res) => {
  //  there is ERROR here
  let image_filename = `${req.file.filename}`;

  const SkinType = new SkinTypeModel({
    name: req.body.name,
    description: req.body.description,
    category: req.body.category,
    link: req.body.link,
    image: image_filename,
  });
  try {
    await SkinType.save();
    res.json({ success: true, massage: "SkinType Item Added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, massage: "ERROR" });
  }
};

export { addST };
