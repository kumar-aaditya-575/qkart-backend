const express = require("express");
const userRoute = require("./user.route");

const router = express.Router();

router.use("/users", userRoute);
const authRoute = require("./auth.route");
const productRoute = require("./product.route");
const cartRoute = require("./cart.route");

router.use("/products", productRoute);
router.use("/auth", authRoute);
router.use("/cart", cartRoute);

module.exports = router;
