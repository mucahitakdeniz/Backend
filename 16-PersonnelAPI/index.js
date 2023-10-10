"use strict";

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT;

require("express-async-errors");

const { dbConnection } = require("./src/configs/dbConnection");
dbConnection();

// continue from here...
app.use(express.json());

// SessionsCookies:
app.use(require("cookie-session")({ secret: process.env.SECRET_KEY }));

// res.getModelList():
app.use(require("./src/middlewares/findSearchSortPage"));

app.all("/", (req, res) => {
  res.send({
    error: false,
    message: "Welcome to PERSONNEL API",
  });
});

//department

app.use("/departments", require("./src/routes/department.router"));
app.use("/personnel", require("./src/routes/personnel.router"));

/* ------------------------------------------------------- */

// errorHandler:
app.use(require("./src/middlewares/errorHandler"));
// RUN SERVER:
app.listen(PORT, () => console.log("http://127.0.0.1:" + PORT));

/* ------------------------------------------------------- */
// Syncronization (must be in commentLine):
// require('./src/helpers/sync')()
