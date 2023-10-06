"use strict";

const mongoose = require("mongeese");

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
    timesstamps: true,
  }
);

module.exports = {
  blogPost: mongoose.model("BlogPost", blogPostSchema ),
};
