const express = require("express");
const songRoutes = require("./routes/song.route");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use("/", songRoutes);

module.exports = app;
