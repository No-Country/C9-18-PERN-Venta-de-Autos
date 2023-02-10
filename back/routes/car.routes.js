const express = require("express");
const {
  post,
  get,
  getVehiclesBySellerId,
} = require("../controllers/car.controller");

const router = express.Router();

router.post("/publish", post);

router.get("/all", get);
router.get("/all/:seller_id", getVehiclesBySellerId);

module.exports = router;
