const express = require("express");
const app = express();
const product = require("./api/product");

app.use(express.json());


const axios = require('axios');

app.post("/", async(req,res) => {
  try {
  var body = req.body;
  const data = (await axios(body)).data;
  res.json(data);
  }catch(e) {
  res.json({error: `${e}`});
  }
})

app.get('/', (req,res) => res.send('OK'))

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
