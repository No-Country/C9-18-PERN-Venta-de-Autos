const express = require("express");
const {
  post,
  get,
  getVehiclesBySellerId,
  updateVehicles
} = require("../controllers/car.controller");

const router = express.Router();

router.post("/publish", post);

router.get("/all", get);
router.get("/all/:seller_id", getVehiclesBySellerId);

router.patch("/edit/:id", updateVehicles);

module.exports = router;
