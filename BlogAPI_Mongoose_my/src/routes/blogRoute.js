"use strict";

const { BlogPost, BlogCategoty } = require("../controllers/blogController");

const router = require("express").Router();

router.route("/").get(BlogPost.list).post(BlogPost.create);
router
  .route("/:postId")
  .get(BlogPost.read)
  .post(BlogPost.update)
  .delete(BlogPost.delete);

//------------------------------

router.route("/category").get(BlogCategoty.list).post(BlogCategoty.create);
router
  .route("/:categoryId")
  .get(BlogCategoty.read)
  .post(BlogCategoty.update)
  .delete(BlogCategoty.delete);

module.exports = router;
