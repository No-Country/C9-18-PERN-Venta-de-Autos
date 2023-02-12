const express = require("express");
const {
  post,
  get,
  getVehiclesBySellerId,
  updateVehicles,
  deleteVehicles
} = require("../controllers/car.controller");

const router = express.Router();

router.post("/publish", post);

router.get("/all", get);
router.get("/all/:seller_id", getVehiclesBySellerId);

router.patch("/edit/:id", updateVehicles);

router.delete("/remove/:id", deleteVehicles);

module.exports = router;
