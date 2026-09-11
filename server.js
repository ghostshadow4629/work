const express = require("express");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Test route
app.get("/api/test", (req, res) => {
  res.json({
    ok: true,
    message: "Backend is responding correctly."
  });
});

// AI route
app.post("/api/chat", async (req, res) => {
  try {
    const question = req.body?.question;

    if (!question) {
      return res.status(400).json({
        error: "No question was provided."
      });
    }

    const apiKey = process.env.OPENROUTER_API_KEY;

    if (!apiKey) {
      return res.status(500).json({
        error: "OPENROUTER_API_KEY is missing on Render."
      });
    }

    console.log("Received question:", question);
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

    console.log("OpenRouter status:", response.status);
    console.log("OpenRouter response length:", rawText.length);

    if (!response.ok) {
      return res.status(response.status).json({
        error: "OpenRouter returned an error.",
        details: rawText
      });
    }

    if (!rawText.trim()) {
      return res.status(502).json({
        error: "OpenRouter returned an empty response."
      });
    }

    let data;

    try {
      data = JSON.parse(rawText);
    } catch {
      return res.status(502).json({
        error: "OpenRouter returned invalid JSON.",
        raw: rawText
      });
    }

    const answer =
      data?.choices?.[0]?.message?.content;

    if (!answer) {
      return res.status(502).json({
        error: "OpenRouter response contained no AI message.",
        response: data
      });
    }

    console.log("AI answer received.");

    // IMPORTANT:
    // This is the response your React app needs.
    return res.status(200).json({
      answer: answer
    });

  } catch (error) {
    console.error("SERVER ERROR:", error);

    return res.status(500).json({
      error: "Server failed while contacting OpenRouter.",
      message: error.message
    });
  }
});

app.listen(PORT, () => {
  console.log(`AI server running on port ${PORT}`);
});