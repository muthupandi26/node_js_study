const path = require("path");

const express = require("express");

const productsController = require("../controllers/products");

const adminController = require("../controllers/admin");

const router = express.Router();

router.get("/add-product", productsController.getAddProduct);

router.post("/product", adminController.postAddProduct);

router.get("/:productId", adminController.postDeleteProduct);

module.exports = router;
