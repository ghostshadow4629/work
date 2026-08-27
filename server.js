const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
// Serve React build
const buildPath = path.join(__dirname, "build");
app.use(express.static(buildPath));
// Backend status
app.get("/api/status", (req, res) => {
  res.json({
    online: true,
    message: "AI backend is running",
  });
});
// AI endpoint
app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body;
    if (!message || typeof message !== "string") {
      return res.status(400).json({
        error: "Message is required.",
      });
    }
    // Temporary test response
    const reply = `Backend received: ${message}`;
    res.json({ reply });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Server error",
    });
  }
});
// React fallback
app.get("*", (req, res) => {
  res.sendFile(path.join(buildPath, "index.html"));
});
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});