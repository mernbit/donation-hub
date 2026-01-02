const userRouter = require("./user/user.routes");
const ngoCampaignRouter = require("./campaign/ngo/ngo-campaign.routes");
const donorCampaignRouter = require("./campaign/donor/donor-campaign.routes");

const routes = (app) => {
  app.use("/api/user", userRouter);
  app.use("/api/campaign/", ngoCampaignRouter);
  app.use("/api/campaign/", donorCampaignRouter);
};

module.exports = routes;
