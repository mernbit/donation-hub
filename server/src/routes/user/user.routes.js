const express = require("express");
const {
  registerController,
  loginController,
  fetchProfile,
} = require("../../controllers/user/user.controller");
const verifyToken = require("../../middlewares/verifyToken");
const userRouter = express.Router();

userRouter.post("/register", registerController);
userRouter.post("/login", loginController);
userRouter.get("/profile", verifyToken, fetchProfile);

module.exports = userRouter;
