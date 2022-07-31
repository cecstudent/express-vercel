const express = require("express");
const router = express.Router();
const axios = require('axios');

/**
 * GET product list.
 *
 * @return product list | empty.
 */
router.post("/", async (req, res) => {
  try {
  var body = req.body;
  const data = (await axios(body)).data;
  res.json(data);
  }catch(e) {
  res.json({error: `${e}`});
  }
});

router.get("/", (req,res) => res.send("OK"))

module.exports = router;
