const Campaign = require("../../models/campaign/campaign.model");
const fs = require("fs");
const { cloudinary } = require("../../utils/cloudinary/cloudinary");
const createController = async (req, res) => {
  try {
    console.log("Files received:", req.files);
    console.log("Body received:", req.body);

    if (!req.user || (!req.user._id && !req.user.id)) {
      return res.status(401).json({ msg: "Unauthorized" });
    }

    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ msg: "No images uploaded" });
    }

    const uploadResult = await Promise.all(
      req.files.map(async (file) => {
        try {
          const result = await cloudinary.uploader.upload(file.path, {
            folder: "campaign",
          });
          return result.secure_url;
        } catch (error) {
          console.log(error);
        } finally {
          fs.unlinkSync(file.path);
        }
      })
    );

    const { title, goalAmount, category, endDate, description } = req.body;
    const campaign = new Campaign({
      title,
      raisedAmount: 0,
      goalAmount,
      category,
      endDate,
      image: uploadResult,
      description,
      createdBy: req.user._id || req.user.id,
    });
    await campaign.save();
    res.status(201).json({ campaign, msg: "success" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error uploading images", error });
  }
};

const activeController = async (req, res) => {
  try {
    const campaigns = await Campaign.find({
      createdBy: req.user._id || req.user.id,
      status: "active",
    }).sort({ createdAt: -1 });
    console.log(campaigns);
    res.status(200).json({ campaigns, msg: "success" });
  } catch (error) {
    res.status(500).json({ msg: "Error fetching campaigns", error });
  }
};
const getSingleController = async (req, res) => {
  try {
    const campaign = await Campaign.findById(req.params.id);
    if (!campaign) {
      return res.status(404).json({ msg: "Campaign not found" });
    }
    res.status(200).json({ campaign, msg: "success" });
  } catch (error) {
    res.status(500).json({ msg: "Error fetching campaign", error });
  }
};

module.exports = {
  createController,
  activeController,
  getSingleController,
};
