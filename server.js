const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./rout");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(cors);
app.use(routes);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
