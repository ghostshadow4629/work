const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Allow your React app to communicate with this server
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");

  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }

  next();
});

// Simple backend test
app.get("/api/test", (req, res) => {
  res.status(200).json({
    ok: true,
    message: "AI MIMO backend is running."
  });
});

// AI CHAT
app.post("/api/chat", async (req, res) => {
  try {
    const question = req.body?.question;

    console.log("=================================");
    console.log("POST /api/chat");
    console.log("Question:", question);
    console.log("=================================");

    if (!question || !question.trim()) {
      return res.status(400).json({
        error: "No question was provided."
      });
    }

    const apiKey = process.env.OPENROUTER_API_KEY;

    if (!apiKey) {
      console.error("OPENROUTER_API_KEY is missing.");

      return res.status(500).json({
        error: "OPENROUTER_API_KEY is missing on Render."
      });
    }

    console.log("Calling OpenRouter...");

    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          "Authorization": apiKey.startsWith("Bearer ")
            ? apiKey
            : `Bearer ${apiKey}`
        },

        body: JSON.stringify({
          model: "openrouter/free",

          messages: [
            {
              role: "user",
              content: question
            }
          ]
        })
      }
    );

    const rawText = await response.text();

    console.log("OpenRouter HTTP status:", response.status);
    console.log(
      "OpenRouter response length:",
      rawText.length
    );

    // OpenRouter returned an HTTP error
    if (!response.ok) {
      console.error(
        "OpenRouter error:",
        rawText
      );

      return res.status(response.status).json({
        error: "OpenRouter returned an error.",
        details: rawText
      });
    }

    // OpenRouter returned nothing
    if (!rawText.trim()) {
      console.error(
        "OpenRouter returned an empty response."
      );

      return res.status(502).json({
        error: "OpenRouter returned an empty response."
      });
    }

    let data;

    try {
      data = JSON.parse(rawText);
    } catch (error) {
      console.error(
        "OpenRouter returned invalid JSON:",
        rawText
      );

      return res.status(502).json({
        error: "OpenRouter returned invalid JSON.",
        raw: rawText
      });
    }

    // Get the AI's actual message
    const answer =
      data?.choices?.[0]?.message?.content;

    if (!answer) {
      console.error(
        "No AI message found:",
        JSON.stringify(data)
      );

      return res.status(502).json({
        error:
          "OpenRouter response contained no AI message.",
        response: data
      });
    }

    console.log("AI answer received successfully.");

    // This is what App.jsx receives
    return res.status(200).json({
      answer: answer
    });

  } catch (error) {
    console.error(
      "SERVER ERROR:",
      error
    );

    return res.status(500).json({
      error:
        "Server failed while contacting OpenRouter.",
      message: error.message
    });
  }
});

app.get("/api/test", (req, res) => {
  res.json({
    ok: true,
    message: "Backend is responding correctly."
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(
    `AI MIMO backend running on port ${PORT}`
  );
});