"use strict";

const mongoose = require("mongoose");

const blogPostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
    },
    content: {
      type: String,
      required: true,
      trim: true,
    },
    published: {
      type: Boolean,
      default: true,
    },
  },
  {
    collection: "blogPosts",
    timestamps: true,
  }
);
const blogCategotySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
  },
  {
    collection: "blogCategotySchema",
    timestamps: true,
  }
);

module.exports = {
  BlogPost: mongoose.model("BlogPost", blogPostSchema),
  BlogCategotySchema: mongoose.model("BlogCategoty", blogCategotySchema),
};
