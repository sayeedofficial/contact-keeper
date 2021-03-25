const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const User = require("../models/User");
const Contact = require("../models/Contact");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const auth = require("../middleware/auth");

router.get("/", auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(contacts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.post("/", (req, res) => {
  res.send("Add contacts");
});

router.put("/:id", (req, res) => {
  res.send("Update contacts");
});

router.delete("/:id", (req, res) => {
  res.send("Delete contacts");
});

module.exports = router;
