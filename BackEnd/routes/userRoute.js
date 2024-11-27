import express from "express";
import { loginUser , registerUser, getSkinType, updateSkinType } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/skin-type", getSkinType);         // Route for getting skin type
userRouter.put("/update-skin-type", updateSkinType);

export default userRouter;