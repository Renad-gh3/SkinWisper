import express from "express";
import { addProduct , listProducts, removeProduct} from "../controllers/ProductsController.js";
import multer from "multer";

const ProductsRouter = express.Router();

//Image Stroage Engine..

const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
      return cb(null, `${Date.now()}${file.originalname}`);
    },
  });

const upload = multer({ storage : storage });

ProductsRouter.post("/add", upload.single("image") , addProduct);
ProductsRouter.get("/list", listProducts);
ProductsRouter.post("/remove", removeProduct);

export default ProductsRouter;
