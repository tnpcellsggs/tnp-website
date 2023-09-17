const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const adminRoute = require("./routes/adminroute");
const certificateRoute = require("./routes/certificateroute");
const eventRoute = require("./routes/eventroute");

const app = express();
dotenv.config();

app.use(cors());

// Parse JSON request bodies
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGOURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

app.get("/", (req, res) => {
  res.send("Welcome to homepage");
});

app.use("/admin/signin", adminRoute); // Remove trailing slash
app.use("/admin/cert", certificateRoute); // Remove trailing slash
app.use("/admin/events", eventRoute); // Remove trailing slash

const PORT = process.env.PORT || 3010; // Use 3010 as the default port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

