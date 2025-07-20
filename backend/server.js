const express = require("express");
const connectDB = require("./db/connectdb");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({
  origin: 'https://note-nest-fe.vercel.app',
  credentials: true
}));
app.use(express.json());

connectDB();

const notesrouter = require("./routes/notes");
app.use("/api/notes", notesrouter);

app.listen(port, () => {
  console.log(`server is running on port : ${port}`);
});
