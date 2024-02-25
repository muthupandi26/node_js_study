const Product = require("../models/product");

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;

  Product.findById(prodId)
    .then((product) => {
      console.log("success", product);
    })
    .catch((error) => console.log(error));
};
