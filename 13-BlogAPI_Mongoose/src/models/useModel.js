"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    email: {
      type: String,
      trim: true,
      unique: true,
      required: [true, "Email alanı boş bırkılamaz"],
    },
    password: {
      type: String,
      trim: true,
      required: true,
    },
  },
  {
    collation: "users",
    timestamps: true,
  }
);

module.exports = mongoose.model("user", UserSchema);
