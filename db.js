const mongoose = require("mongoose");

const MONGO_URI =
  "mongodb+srv://amawickramasinghe2001:ODYDsI0B9RJBnRhF@cluster0.lphuis6.mongodb.net/";

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
