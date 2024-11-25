import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

//login user
const loginUser = async (req, res) => {
    const {email, password} = req.body;
    try {
        const user = await userModel.findOne({email})

        if (!user){
           return res.json({success: false, message:"User doesn't exist"})
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch){
           return res.json({success: false, message:"Invalid password"})
        }

        const token = createToken(user._id);
        res.json({success: true, token})

    } catch (error) {
        console.log(error);
        return res.json({success: false, message:"Error"})
    }
}



const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET)
}



//register user

const registerUser = async (req, res) => {
    const {name, password, email} = req.body;
    try {
        //check is the user already exists
        const exists = await userModel.findOne({email});
        if(exists){
            return res.json({success: false, message:"User already exists"})
        }

        // validating email format & strong password
        if(!validator.isEmail(email)){
            return res.json({success: false, message:"Please enter a valid email"})
        }

        if(password.length<8){
            return res.json({success: false, message:"Please enter a strong password"})
        }

        // hashing user password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            name: name,
            email: email,
            password: hashedPassword
        })

        const user = await newUser.save()
        const token = createToken(user._id)
        res.json({success: true, token})
        
    } catch (error) {
        console.log(error);
        res.json({success: false, message:"Error"})
    }
}

const getSkinType = async (req, res) => {
    try {
        const userData = await userModel.findById(req.body.userId);
        
        if (!userData) {
            return res.json({ success: false, message: "User not found" });
        }

        res.json({ success: true, skinType: userData.skinType });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

// Update Skin Type
const updateSkinType = async (req, res) => {
    try {
        const userData = await userModel.findById(req.body.userId);
        
        if (!userData) {
            return res.json({ success: false, message: "User not found" });
        }

        // Update skin type
        userData.skinType = req.body.skinType;
        await userData.save();

        res.json({ success: true, message: "Skin type updated successfully" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

export { loginUser, registerUser, getSkinType, updateSkinType };

