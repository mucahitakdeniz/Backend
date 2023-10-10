"use strict";
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */
const Personnel = require("../controllers/Personnel.controller");

router.route("/").get(Personnel.list).post(Personnel.create);

router
  .route("/:id")
  .get(Personnel.read)
  .post(Personnel.update)
  .delete(Personnel.delete);

  router.get("/:id/personnels",Personnel.personels)
/* ------------------------------------------------------- */
module.exports = router;
