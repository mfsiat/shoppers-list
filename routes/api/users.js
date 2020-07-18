const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

// Item model
// creates the query
const User = require("../../models/User");

// @route POST api/users
// @desc Register new users
// @access Public
// we are using router so router.get
// we will get the value on req.body
// pull out some data from them
router.post("/", (req, res) => {
  const { name, email, password } = req.body;

  // simple validation
  if (!name || !email || !password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }

  // check for existing user
  User.findOne({ email }).then((user) => {
    if (user) return res.status(400).json({ msg: "User already exists" });

    const newUser = new User({
      name,
      email,
      password,
    });

    // create salt & hash
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser.save().then((user) => {
          res.json({
            user: {
              id: user.id,
              name: user.name,
              email: user.email,
            },
          });
        });
      });
    });
  });
});

// this is es6 fashion
// export default router

// we are not using babel
// so normally exporting
module.exports = router;
