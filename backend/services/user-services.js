const User = require("../models/user");

var userService = {};

userService.getUsers = (req, res, next) => {
  User.find(function (err, users) {
    if (err) return next(err);
    res.json({ users });
  });
};

userService.saveUser = (req, res, next) => {
  let user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    gender: req.body.gender,
    dateOfBirth: req.body.dateOfBirth,
    password: req.body.password,
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
