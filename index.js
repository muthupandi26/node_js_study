const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const mongoConnect = require("./utils/database").mongoConnect;

const User = require("./models/user");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");

const shopRoutes = require("./routes/shop");

const productsController = require("./controllers/error");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// app.set("view engine", "pug");

app.use((req, res, next) => {
  User.findById("65db3c7b4385b7620ca5f2d1")
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => console.log(err));
});

app.use("/admin", adminRoutes);

app.use(shopRoutes);

app.use(productsController.get404Page);

app.listen(4000);

mongoConnect(() => {
  app.listen(3000);
});
