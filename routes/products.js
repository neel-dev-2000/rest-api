const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getAllProductstesting,
} = require("../controllers/products");

router.route("/").get(getAllProducts);
router.route("/testing").get(getAllProductstesting);

module.exports = router;
