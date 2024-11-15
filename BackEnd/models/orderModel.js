import mongoose from "mongoose"

const orderSchema = new mongoose.Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    //email:{type:String,required:true},
    street:{type:String,required:true},
    city:{type:String,required:true},
    state:{type:String,required:true},
    zipCode:{type:Number,required:true},
    country:{type:String,required:true},
    phone:{type:Number,required:true},
    date:{type:Date,default:Date.now()},
    //cartData: { type: mongoose.Schema.Types.Mixed, default:{} }
},{ minimize: false });

const orderModel = mongoose.models.order || mongoose.model("order",orderSchema);
export default orderModel;