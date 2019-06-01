const express = require("express");


const router = new express.Router();

router.get("/example", async (req, res) => {
  res.status(200).send("Your mom is your dad");
});

module.exports = router;
