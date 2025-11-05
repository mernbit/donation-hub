const express = require("express");
const campaignRouter = express.Router();
const Campaign = require("../../models/campaign/campaign.model");
const { createController } = require("../../controllers/campaign/campaign.controller");
const verifyToken = require("../../middlewares/verifyToken");

campaignRouter.post("/campaign",verifyToken, async (req, res) => createController);

module.exports = campaignRouter;


