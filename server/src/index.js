const app = require("./app/app");
const PORT = process.env.PORT || 8000;
const connectDB = require("./db/db");
const routes = require("./routes/index");

connectDB();

routes(app);

app.get("/", (req, res) => {
  res.send("Server is Online!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
