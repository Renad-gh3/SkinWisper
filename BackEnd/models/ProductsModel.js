import mongoose from "mongoose";

const ProductsSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  period: { type: String, required: true },
  skinType: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  image: { type: String, required: true },
});
const ProductsModel =
  mongoose.models.Product || mongoose.model("Product", ProductsSchema);

export default ProductsModel;
