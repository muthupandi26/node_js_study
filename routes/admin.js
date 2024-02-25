const path = require("path");

const express = require("express");

const productsController = require("../controllers/products");

const adminController = require("../controllers/admin");

const router = express.Router();

// /admin/products => GET
router.get("/add-product", productsController.getAddProduct);

// /admin/add-product => POST
router.post("/add-product", adminController.postAddProduct);

router.get("delete/:productId", adminController.postDeleteProduct);

module.exports = router;
