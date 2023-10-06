"use strict";

const { BlogPost } = require("../controllers/blogController");

const router = require("express").Router();

router.route('/').get(BlogPost.list).post(BlogPost.create);
router
  .route("/:postId")
  .get(BlogPost.read)
  .post(BlogPost.update)
  .delete(BlogPost.delete);

module.exports = router;
