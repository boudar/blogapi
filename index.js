const express = require("express");
const app = express();
const mongoose = require('mongoose');
require('dotenv').config()

const MONGO_CONNECTION = process.env.MONGO_CONNECTION

app.use(express.json())

const userRoute = require("./routes/userRoute")

mongoose
  .connect(MONGO_CONNECTION).then(() => {
    console.log("connected to MongoDB Atlas");

    app.listen(4000, () => {
      console.log(`Node API app is running on port 3000`);
    });

  })
  .catch((error) => {
    console.log(error);
  });

  app.get("/", function (req, res) {
    res.json({
      "message":"api is running"
    });
  });

  app.use("/api",userRoute)