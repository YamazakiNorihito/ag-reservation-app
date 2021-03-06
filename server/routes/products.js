// node.js express server
const express = require("express");
const Product = require("../model/product");

const router = express.Router();

const UserCtrl = require("../controller/user");

router.get("/secret", UserCtrl.authMiddleware, function (req, res) {
  return res.json({ secret: true });
});

router.get("", function (req, res) {
  Product.find({}, function (err, datas) {
    res.json(datas);
  });
});

router.get("/:productId", UserCtrl.authMiddleware, function (req, res) {
  const id = req.params.productId;
  Product.findById(id, function (err, datas) {
    if (err) {
      return res.status(422).send({
        errors: [{ title: "Product error", detail: "Product not found" }],
      });
    }
    return res.json(datas);
  });
});

module.exports = router;
