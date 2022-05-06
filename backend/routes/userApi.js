var express = require("express");
var router = express.Router();
const userService = require("../services/user-services");

/* Get users */
router.get("/users", function (req, res, next) {
  userService.getUsers(req, res, next);
});

/* Create new user */
router.post("/createUser", function (req, res, next) {
  userService.saveUser(req, res, next);
});

module.exports = router;
