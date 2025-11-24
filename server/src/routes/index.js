const userRouter = require("./user/user.routes");
const ngoCampaignRouter = require("./campaign/ngo/ngo-campaign.routes");

const routes = (app) => {
  app.use("/api/user", userRouter);
  app.use("/api/campaign/ngo/", ngoCampaignRouter);
};

module.exports = routes;
