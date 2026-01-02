const express = require("express");
const donorRouter = express.Router();
const verifyToken = require("../../../middlewares/verifyToken");

const healthCampaigns = require("../../../controllers/campaign/donor/health-campaigns.controller");
const educationCampaigns = require("../../../controllers/campaign/donor/education-campaigns.controller");
const disasterCampaigns = require("../../../controllers/campaign/donor/disaster-campaigns.controller");
const otherCampaigns = require("../../../controllers/campaign/donor/other-campaigns.controller");

donorRouter.get("/health-campaigns", verifyToken, healthCampaigns);
donorRouter.get("/education-campaigns", verifyToken, educationCampaigns);
donorRouter.get("/disaster-campaigns", verifyToken, disasterCampaigns);
donorRouter.get("/other-campaigns", verifyToken, otherCampaigns);

module.exports = donorRouter;
