import { log } from "console";
import ProductsModel from "../models/ProductsModel.js";
import fs from "fs";

//add product Items

const addProduct = async (req, res) => {
  
    let image_filename = `${req.file.filename}`;

    const Product = new ProductsModel({
        id: req.body.ID,
        name: req.body.name,
        description: req.body.description,
        period: req.body.period,
        skinType:req.body.skinType,
        category:req.body.category,
        price:req.body.price,
        quantity:req.body.quantity,
        image: image_filename,
      });

      try {
        await Product.save();
        res.json({ success: true, massage: "Product Item Added" });
      } catch (error) {
        console.log(error);
        res.json({ success: false, massage: "ERROR" });
      }
};

//all products list
const listProducts = async (req,res) =>{
    try {
        const Products = await ProductsModel.find({});
        res.json({success: true , data:Products})
    } catch (error) {
        console.log(error);
        res.json({ success: false, massage: "ERROR" });
    }
}

//remove Product
const removeProduct = async (req,res) =>{
    try {

        const Products = await ProductsModel.findById(req.body.id);
        fs.unlink(`uploads/${Products.image}`,()=>{});

        await ProductsModel.findByIdAndDelete(req.body.id);
        res.json({success: true, massage: "Product removed"});

    } catch (error) {

        console.log(error);
        res.json({ success: false, massage: "ERROR" });

    }
}

export { addProduct, listProducts, removeProduct};
