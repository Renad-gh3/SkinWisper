import orderModel from "../models/orderModel.js";
import userModel from '../models/userModel.js'
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)


// placing user order for frontend
const placeOrder = async (req, res) => {

    const user = await userModel.findById(req.body.userId);

    //const frontend_url = "http://localhost:5000"; /*************************/

        const newOrder = new orderModel({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            //email: user.email,
            street: req.body.street,
            city: req.body.city,
            state: req.body.state,
            zipCode: req.body.zipCode,
            country: req.body.country,
            phone: req.body.phone,
            //cartData: user.cartData,
        })
        
        try {
            await newOrder.save();
            //await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });

            res.json({ success: true, massage: "order placed" });
          } catch (error) {
            console.log(error);
            res.json({ success: false, massage: "ERROR" });
          }
    }

const verifyOrder = async (req,res) => {
    const {orderId,success} = req.body;
    try {
        if (success=="true") {
            await orderModel.findByIdAndUpdate(orderId,{payment:true});
            res.json({success:true,message:"Paid"})
        }
        else{
            await orderModel.findByIdAndDelete(orderId);
            res.json({success:false,message:"Not Paid"})
        }
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

export {placeOrder,verifyOrder}