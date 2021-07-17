const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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

module.exports = mongoose.model("User", UserSchema);
