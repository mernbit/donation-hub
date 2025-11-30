const Campaign = require("../../../models/campaign/campaign.model");

const getCompletedCampaignController = async (req, res) => {
  try {
    const campaigns = await Campaign.find({
      createdBy: req.user.id || req.user._id,
      status: "completed",
    });
    if (!campaigns) {
      console.log("campaigns not found");
      res.status(404).json({ msg: "Campaigns not found" });
    }
    res.status(200).json({ campaigns, msg: "success" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error fetching campaigns", error });
  }
};

module.exports = getCompletedCampaignController;