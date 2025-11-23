const express = require("express");
const campaignRouter = express.Router();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const Campaign = require("../../models/campaign/campaign.model");
const {
  createController,
  activeController,
  getSingleController,
  updateController,
  deleteController,
} = require("../../controllers/campaign/campaign.controller");
const verifyToken = require("../../middlewares/verifyToken");

campaignRouter.post(
  "/create",
  verifyToken,
  upload.array("images"),
  createController
);

campaignRouter.get("/active", verifyToken, activeController);
campaignRouter.get("/get/:id", verifyToken, getSingleController);
campaignRouter.put("/update/:id", verifyToken, upload.array("images"), updateController);
campaignRouter.delete("/delete/:id", verifyToken, deleteController);

module.exports = campaignRouter;
