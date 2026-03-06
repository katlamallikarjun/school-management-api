const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const schoolRoutes = require("./routes/schoolRoutes");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api", schoolRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log("Server running on port 5000");
});