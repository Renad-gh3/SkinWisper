import express from "express";
import { addST, listST, removeST } from "../controllers/SkinTypeController.js";
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
SkinTRouter.get("/list", listST);
SkinTRouter.post("/remove", removeST);

export default SkinTRouter;
