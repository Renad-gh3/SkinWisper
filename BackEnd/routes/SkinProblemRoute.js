import express from "express";
import {
  addSP,
  listSP,
  removeSP,
} from "../controllers/SkinProblemController.js";
import multer from "multer";

const SkinPRouter = express.Router();

//Image Stroage Engine
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

SkinPRouter.post("/add", upload.single("image"), addSP);
SkinPRouter.get("/list", listSP);
SkinPRouter.post("/remove", removeSP);

export default SkinPRouter;
