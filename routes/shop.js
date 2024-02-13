const path = require("path");

const express = require("express");

const rootDir = require("../utils/path");

const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("I'm static always runs!");
  //   res.send("<h1>This is Express page</h1>");
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;
