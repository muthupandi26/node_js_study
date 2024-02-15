const path = require("path");

const rootDir = require("../utils/path");

const Product  = require("../models/product")

exports.getAddProduct = (req, res, next) => {
    res.sendFile(path.join(rootDir, "views", "add-product.html"));
}

exports.postAddProduct = (req, res, next) => {
    console.log(req.body.title);
    const product = new Product(req.body.title);
    product.save();
    res.redirect("/");
}

exports.getProducts =  (req, res, next) => {
    const products = Product.fetchAll()
    // res.sendFile(path.join(rootDir, "views", "shop.html"));
    res.render('shop', { prods: products, docTitle: "dummy shop" });
}

