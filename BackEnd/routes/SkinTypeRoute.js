import express from "express";
import { addST } from "../controllers/SkinTypeController.js";
import multer from "multer";

const SkinTRouter = express.Router();

//Image Stroage Engine

const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

SkinTRouter.post("/add", upload.single("image"), addST);

export default SkinTRouter;
