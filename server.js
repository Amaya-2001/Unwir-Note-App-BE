const express = require("express");
const routes = require("./route/noteRoute");
const connect = require("./db");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT;

const app = express();

// to allow headers for axios requests
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use(cors());
app.use(bodyParser.json());

app.use("/", routes);

// listen on port
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
