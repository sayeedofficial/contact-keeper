const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  res.send("Registers a users");
});

module.exports = router;
