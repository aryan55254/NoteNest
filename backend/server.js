const express = require("express");
const connectDB = require("./db/connectdb");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
  });
}
connectDB();

const notesrouter = require("./routes/notes");
app.use("/api/notes", notesrouter);

app.listen(port, () => {
  console.log(`server is running on port : ${port}`);
});
