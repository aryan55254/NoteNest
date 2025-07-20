const express = require("express");
const connectDB = require("./db/connectdb");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// --- DEPLOYMENT CODE ---
// This code serves the static files from the React frontend
if (process.env.NODE_ENV === "production") {
  // We are creating an absolute path to the frontend's dist folder
  const frontendDistPath = path.resolve(__dirname, "..", "frontend", "dist");

  // Serve the static files from that absolute path
  app.use(express.static(frontendDistPath));

  // For any other request, send back the index.html file from that absolute path
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(frontendDistPath, "index.html"));
  });
}
// --- END DEPLOYMENT CODE ---
connectDB();

const notesrouter = require("./routes/notes");
app.use("/api/notes", notesrouter);

app.listen(port, () => {
  console.log(`server is running on port : ${port}`);
});
