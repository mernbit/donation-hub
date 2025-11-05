const Campaign = require("../../models/campaign/campaign.model");

const createController = async (req, res) => {
  try {
    const { title, goalAmount, category, endDate, image, description } =
      req.body;
    const campaign = new Campaign({
      title,
      goalAmount,
      category,
      endDate,
      image,
      description,
      createdBy: req.user._id,
    });
    await campaign.save();
    res.status(201).json(campaign);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createController,
};

