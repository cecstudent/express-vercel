const express = require("express");
const app = express();
const product = require("./api/product");

app.use(express.json();

app.use("/", product);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
