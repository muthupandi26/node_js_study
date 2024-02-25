const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const mongoConnect = require("./utils/database").mongoConnect;

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");

const shopRoutes = require("./routes/shop");

const productsController = require("./controllers/error");

app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "pug");

app.use("/admin", adminRoutes);

app.use("/delete", adminRoutes);

app.use(shopRoutes);

app.use(productsController.get404Page);

app.listen(4000);

mongoConnect(() => {
  app.listen(3000);
});
