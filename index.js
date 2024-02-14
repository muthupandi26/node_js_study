const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const expressHbs = require('express-handlebars');


const app = express();

app.engine('hbs', expressHbs.engine({ extname: '.hbs', defaultLayout: "404"}));

app.set('view engine', 'hbs');
app.set('views', 'views')

const adminData = require("./routes/admin");

const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminData.routes);

app.use(shopRoutes);

app.use((req, res, next) => {
  // res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
  res.status(404).render('404')
});

app.listen(4000);
