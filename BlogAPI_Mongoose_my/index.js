"use strict";

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

app.use(express.json());

require("./src/dbconnection");

//deneme 
app.all("/", (req, res) => {
  res.send("Running!!!");
});

app.use(require('./src/routes/blogRoute'))

app.use(require("./src/errorHandler"));

app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));
