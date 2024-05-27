const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const patientRoutes = require("./routes/patientRoutes");
const hospitalRoutes = require("./routes/hospitalRoutes");

const app = express();
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/hospitalAPI", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/api/patients", patientRoutes);
app.use("/api/hospitals", hospitalRoutes);

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
