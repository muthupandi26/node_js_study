const Product = require("../models/product");

exports.postAddProduct = (req, res, next) => {
  console.log(req, "requesst");
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;

  const product = new Product(
    title,
    price,
    description,
    imageUrl,
    // null,
    req.user._id
  );

  product
    .save()
    .then((result) => {
      console.log("Created Product");
      res.redirect("/");
    })
    .catch();
};

exports.postDeleteProduct = (req, res, next) => {
  console.log(req.params.productId, "paramssss");
  const prodId = req.params.productId;
  Product.deleteById(prodId)
    .then((product) => product.destroy())
    .then((result) => {
      console.log("Destroyed Product");
      res.redirect("/admin/add-product");
    })
    .catch((err) => console.log(err));
};
