const express = require("express");
const {
  getAllBy,
  send,
  edit,
  remove,
} = require("../controllers/messages.controller");

const router = express.Router();

router.get("/:car_id/:sender_id", getAllBy);

router.post("/chat", send);

router.put("/chat/:id", edit);

router.delete("/chat/:id", remove);

module.exports = router;