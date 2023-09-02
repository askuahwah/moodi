const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
app.use(cors());

dotenv.config({ path: "./config.env" });
const PORT = process.env.PORT;

// const User = require('./models/user');

require("./db/conn");
app.use(express.json());

app.use(require("./router/auth"));

app.listen(PORT, () => {
  console.log("server is running ", PORT);
});
