const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    max: [60, "ユーザー最大60文字までです"],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    max: [256, "Eメール最大256文字までです"],
  },
  password: {
    type: String,
    required: true,
    min: [6, "パスワード6文字以上で入力してください。"],
    max: [10, "パスワード最大10文字までです"],
  },
});

// function create add
UserSchema.methods.hasSamePassword = function (password) {
  const user = this;
  return bcrypt.compareSync(password, user.password);
};

UserSchema.pre("save", function (next) {
  let user = this;
  const saltRounds = 10;
  bcrypt.genSalt(saltRounds, function (err, salt) {
    bcrypt.hash(user.password, salt, function (err, hash) {
      // Store hash in your password DB.
      user.password = hash;
      next();
    });
  });
});

module.exports = mongoose.model("User", UserSchema);
