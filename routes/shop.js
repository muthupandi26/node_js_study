const path = require("path");

const express = require("express");

const productsController = require("../controllers/products");
const shopController = require("../controllers/shop");

const router = express.Router();

router.get("/", productsController.getProducts);

router.get("/products/:productId", shopController.getProduct);

router.get('/products', shopController.getProducts);

router.get('/cart', shopController.getCart)

router.post("/cart", shopController.postCart)

router.post('/cart-delete-item', shopController.postCartDeleteProduct)

router.post('/create-order', shopController.postOrder)

module.exports = router;
