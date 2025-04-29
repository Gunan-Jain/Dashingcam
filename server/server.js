const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose
  .connect(
    "mongodb+srv://gunanjain809:1i5ADgQOt5gwk8ZT@cluster0.lniy4s7.mongodb.net/",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Schema & Model
const EmployeeSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const EmployeeModel = mongoose.model("employees", EmployeeSchema);

// Register Route
app.post("/register", (req, res) => {
  EmployeeModel.create(req.body)
    .then((employee) => res.json(employee))
    .catch((err) => res.json(err));
});

// Login Route
app.post("/login", (req, res) => {
  const { username, email, password } = req.body;
  console.log("Login attempt:", username, email, password);

  EmployeeModel.findOne({ $or: [{ email: email }, { username: username }] })
    .then((user) => {
      if (user) {
        if (user.password === password) {
          res.json("Success");
        } else {
          res.json("Password is Incorrect");
        }
      } else {
        res.json("No record found");
      }
    })
    .catch((err) => res.json(err));
});

// New GET User Route
app.get("/getUser", async (req, res) => {
  try {
    const user = await EmployeeModel.findOne(); // Find the first employee
    if (user) {
      res.json({ name: user.name, email: user.email }); // Sending name and email
    } else {
      res.status(404).json({ message: "No user found" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Start Server
app.listen(5009, () => {
  console.log("Server is running on port 5009");
});
