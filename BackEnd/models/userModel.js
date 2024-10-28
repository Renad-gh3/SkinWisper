import mongoose from "mongoose";
//comment
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true , unique: true},
  password: { type: String, required: true },
  cartData: { type: mongoose.Schema.Types.Mixed, default:{} }
}, {minimize: false} );

const userModel =
  mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;