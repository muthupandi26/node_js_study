const path = require("path");

const express = require("express");

const rootDir = require("../utils/path");

const router = express.Router();

const products = [];

router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
  //   res.send(
  //     '<form action="/admin/product" method="POST"><input type="text" name="title"><button type="submit"> Add Product </button></form>'
  //   );
});

router.post("/product", (req, res, next) => {
  console.log(req.body);
  products.push({ title: req.body.title });

  res.redirect("/");
});

exports.routes = router;
exports.products = products;
