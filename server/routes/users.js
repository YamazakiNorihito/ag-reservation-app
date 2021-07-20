// node.js express server
const express = require("express");
const User = require("../model/user");
const jwt = require("jsonwebtoken");
// config
const config = require("../config/"); // index.js load

const router = express.Router();

// get
// post
// put
// delete

router.post("/login", function (req, res) {
  const { email, password } = req.body;

  if (!email) {
    return res.status(422).send({
      errors: [{ title: "email error", detail: "Please fill email" }],
    });
  }

  if (!password) {
    return res.status(422).send({
      errors: [{ title: "password error", detail: "Please fill password" }],
    });
  }

  User.findOne({ email }, function (err, foundUser) {
    if (err) {
      return res.status(422).send({
        errors: [{ title: "User error", detail: "Somathing went wrong!!" }],
      });
    }

    if (!foundUser) {
      return res.status(422).send({
        errors: [{ title: "User error", detail: "User already exists!!" }],
      });
    }

    if (!foundUser.hasSamePassword(password)) {
      return res.status(422).send({
        errors: [{ title: "User error", detail: "Incorrect password!!" }],
      });
    }

    const token = jwt.sign(
      {
        userid: foundUser.id,
        username: foundUser.name,
      },
      config.SECRET,
      { expiresIn: "1h" }
    );

    return res.json(token);
  });
});

router.post("/register", function (req, res) {
  let name = req.body.username;
  let pw = req.body.password;
  let pw_conf = req.body.confirmPassword;
  let email = req.body.email;

  if (!name) {
    return res.status(422).send({
      errors: [{ title: "username error", detail: "Please fill username" }],
    });
  }

  if (!pw) {
    return res.status(422).send({
      errors: [{ title: "password error", detail: "Please fill password" }],
    });
  }

  if (pw !== pw_conf) {
    return res.status(422).send({
      errors: [
        { title: "password error", detail: "Please check unmachi password" },
      ],
    });
  }

  if (!email) {
    return res.status(422).send({
      errors: [{ title: "email error", detail: "Please fill email" }],
    });
  }

  User.findOne({ email }, function (err, foundUser) {
    if (err) {
      return res.status(422).send({
        errors: [{ title: "User error", detail: "Somathing went wrong!!" }],
      });
    }

    if (foundUser) {
      return res.status(422).send({
        errors: [{ title: "User error", detail: "User already exists!!" }],
      });
    }

    let password = pw;
    const user = new User({ name, email, password });

    user.save(function (err) {
      if (err) {
        return res.status(422).send({
          errors: [{ title: "User error", detail: "Somathing went wrong!!" }],
        });
      }

      return res.json({ register: true });
    });
  });
});

module.exports = router;
