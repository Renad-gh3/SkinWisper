import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

// Place a new order
const placeOrder = async (req, res) => {
  try {
    const user = await userModel.findById(req.body.userId);

    // Return error if user is not found
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    // Create new order with user and cart data
    const newOrder = new orderModel({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: user.email,
      street: req.body.street,
      city: req.body.city,
      state: req.body.state,
      zipCode: req.body.zipCode,
      country: req.body.country,
      phone: req.body.phone,
      cartData: user.cartData,
    });

    await newOrder.save();
    await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} }); // Clear cart after order

    res.json({
      success: true,
      message: "Order placed successfully",
      orderId: newOrder._id,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Error placing order" });
  }
};

// Verify payment status for an order
const verifyOrder = async (req, res) => {
  const { orderId, success } = req.body;
  try {
    if (success === "true") {
      await orderModel.findByIdAndUpdate(orderId, { payment: true });
      res.json({ success: true, message: "Payment successful" });
    } else {
      await orderModel.findByIdAndDelete(orderId); // Cancel order if payment fails
      res.json({
        success: false,
        message: "Payment not completed, order canceled",
      });
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Error verifying payment" });
  }
};

export { placeOrder, verifyOrder };
