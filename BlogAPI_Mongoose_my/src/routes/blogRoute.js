"use strict";

const { BlogPost } = require("../controllers/blogController");

const router = require("express").Router();

router.route('/').get(BlogPost.list).post(BlogPost.create);



