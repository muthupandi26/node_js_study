const path = require("path");

const express = require("express");

const rootDir = require("../utils/path");
const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  const products = adminData.products;
  console.log(products)
  res.render('shop', {prods: products, docTitle : "dummy shop"})
});

module.exports = router;
