"use strict";
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */
const department = require("../controllers/department.controller");

router.route("/").get(department.list).post(department.create);

router
  .route("/:id")
  .get(department.read)
  .post(department.update)
  .delete(department.delete);

/* ------------------------------------------------------- */
module.exports = router;
