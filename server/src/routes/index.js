const userRouter = require("./user/user.routes");

const routes = (app) => {
  app.use("/api/user", userRouter);
};

module.exports = routes;
