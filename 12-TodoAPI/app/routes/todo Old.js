"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */
const router = require("express").Router();

const todo = require("../controllers/todo");

router.route("/").get(todo.list()).post(todo.create());

router.route("/:id").get(todo.read()).put(todo.update()).delete(todo.update());

module.exports = router;
