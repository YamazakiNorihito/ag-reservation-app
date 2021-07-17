// node.js express server
const express = require("express");
const User = require("../model/user");

const router = express.Router();

// get
// post
// put
// delete

router.post("/login", function (req, res) {});

router.post("/register", function (req, res) {
  let name = req.body.username;
  let pw = req.body.password;
  let email = req.body.email;
  return res.json({ name, email, pw });
});

module.exports = router;
