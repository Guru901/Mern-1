const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

const PORT = 3001;

mongoose
  .connect("mongodb+srv://Guru:kr$signOP6990@cluster0.3df2kqx.mongodb.net/?retryWrites=true&w=majority")
  .then(() => console.log("Connected!"));

const demoSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const User = mongoose.model("User", demoSchema);

app.use(cors());
app.use(express.json());

app.post("/demo", async (req, res) => {
  let user = new User();

  user.username = req.body.username;
  user.password = req.body.password;

  const doc = await user.save();

  res.json(doc);
  console.log(doc);
});

app.listen(PORT, (req, res) => {
  console.log(`Server Started on Port ${PORT}`);
});
