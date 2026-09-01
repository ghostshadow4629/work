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

    const apiKey = process.env.OPENROUTER_API_KEY;

    if (!apiKey) {
      return res.status(500).json({
        error: "OpenRouter API key is not configured.",
      });
    }

    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "openrouter/free",
          messages: [
            {
              role: "user",
              content: message,
            },
          ],
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("OpenRouter error:", data);

      return res.status(response.status).json({
        error:
          data?.error?.message ||
          "OpenRouter request failed.",
      });
    }

    const reply =
      data?.choices?.[0]?.message?.content;

    if (!reply) {
      return res.status(502).json({
        error: "OpenRouter returned no response.",
      });
    }

    res.json({
      reply,
    });
  } catch (error) {
    console.error("AI request error:", error);

    res.status(500).json({
      error: "Server error while contacting AI.",
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