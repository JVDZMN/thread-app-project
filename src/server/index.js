const express = require("express");
const path = require("path");

const app = express();
app.use(express.static("dist"));

const buildDirectory = path.join(__dirname, "../../dist");

// Serve the static files from the React app
app.use(express.static(buildDirectory));

app.get("/api/hello", (req, res) => {
  res.send({
    hello: "world"
  });
});

// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(path.join(buildDirectory, "index.html"));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
