const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.MONGO_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once("open", () => {
  console.log(" MONGO DB connection established succesfully ");
});

const notesrouter = require("./routes/notes");
app.use("/api/notes", notesrouter);

app.listen(port, () => {
  console.log(`server is running on port : ${port}`);
});
