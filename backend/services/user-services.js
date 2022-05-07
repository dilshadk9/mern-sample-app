const User = require("../models/user");
const bcrypt = require("bcrypt");

var userService = {};

userService.getUsers = (req, res, next) => {
  User.find(function (err, users) {
    if (err) return next(err);
    res.json({ users });
  });
};

userService.saveUser = (req, res, next) => {
  console.log(req.body);
  let hashPass = bcrypt.hashSync(req.body.input.password, 10);

  let user = new User({
    firstName: req.body.input.firstName,
    lastName: req.body.input.lastName,
    email: req.body.input.email,
    gender: req.body.input.gender,
    dateOfBirth: req.body.input.dateOfBirth,
    password: hashPass,
  });

  user.save(function (err) {
    if (err) {
      return next(err);
    }
    res
      .status(200)
      .json({ message: "New user created successfully.", status: 200 });
  });
};

module.exports = userService;
