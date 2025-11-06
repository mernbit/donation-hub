const userRouter = require("./user/user.routes");
const campaignRouter = require("./campaign/campaign.route");

const routes = (app) => {
  app.use("/api/user", userRouter);
  app.use("/api/campaign", campaignRouter);
};

module.exports = routes;
