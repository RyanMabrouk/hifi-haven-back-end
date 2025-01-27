import express from "express";
import {
  loginUser,
  registerUser,
  adminLogin,
} from "../src/controllers/userController.js";

const userRouter = express.Router();

userRouter
  .post("/register", registerUsers)
  .post("/login", loginUser)
  .post("/admin", adminLogin);

export default userRouter;
