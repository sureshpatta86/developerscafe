const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const registerRoute = require("./routers/register");
const loginRoute = require("./routers/login");
const allprofilesRoute = require("./routers/allprofiles");
const myprofileRoute = require("./routers/myprofile");
const addreviewRoute = require("./routers/addreview");
const myreviewRoute = require("./routers/myreview");
const middleware = require("./middleware");

const app = express();

const PORT = process.env.PORT || 5000;

//Connect to DB
connectDB();

app.use(express.json());
app.use(cors({ origin: "*" }));

app.get("/", (req, res) => res.send("API running..."));

app.post("/register", async (req, res) => {
  registerRoute(req, res);
});
app.post("/login", async (req, res) => {
  loginRoute(req, res);
});
app.get("/allprofiles", middleware, async (req, res) => {
  allprofilesRoute(req, res);
});
app.get("/myprofile", middleware, async (req, res) => {
  myprofileRoute(req, res);
});
app.post("/addreview", middleware, async (req, res) => {
  addreviewRoute(req, res);
});
app.get("/myreview", middleware, async (req, res) => {
  myreviewRoute(req, res);
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
