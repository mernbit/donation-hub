const Campaign = require("../../models/campaign/campaign.model");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const fs = require("fs");
const { upload: cloudinaryUpload } = require("../../utils/cloudinary/cloudinary");
const createController = async (req, res) => {
  try {
    const { title, goalAmount, category, endDate, image, description } =
      req.body;
    const campaign = new Campaign({
      title,
      raisedAmount: 0,
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

