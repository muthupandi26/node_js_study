const path = require("path");

const rootDir = require("../utils/path");

const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
};

exports.postAddProduct = (req, res, next) => {
  console.log(req.body.title);
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    console.log(products);
    // in a render i didn't map just priniting 1st one value
    res.render("shop", { prods: products, docTitle: "dummy shop" });
  });
  // res.sendFile(path.join(rootDir, "views", "shop.html"));
};
