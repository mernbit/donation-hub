const express = require("express");
const campaignRouter = express.Router();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const Campaign = require("../../models/campaign/campaign.model");
const {
  createController,
} = require("../../controllers/campaign/campaign.controller");
const verifyToken = require("../../middlewares/verifyToken");

campaignRouter.post(
  "/create",
  verifyToken,
  upload.array("images"),
  async (req, res) => createController
);

module.exports = campaignRouter;
