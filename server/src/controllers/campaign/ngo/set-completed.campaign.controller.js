const Campaign = require("../../../models/campaign/campaign.model");
const setCompletedController = async (req, res) => {
  try {
    const campaign = await Campaign.findByIdAndUpdate(
      req.params.id,
      {
        status: "completed",
      },
      { new: true }
    );
    res
      .status(200)
      .json({
        msg: "Campaign completed successfully",
        status: "success",
        campaign,
      });
  } catch (error) {
    res.status(500).json({ msg: "Error updating campaign", error });
  }
};

module.exports = setCompletedController;
