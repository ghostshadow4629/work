const express = require("express");

const app = express();

const PORT = process.env.PORT || 10000;

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("AI MIMO BACKEND IS RUNNING");
});

app.get("/api/test", (req, res) => {
  console.log("TEST ROUTE WAS HIT");

  res.status(200).json({
    ok: true,
    test: "SERVER.JS IS DEFINITELY RUNNING",
    timestamp: new Date().toISOString()
  });
});

app.post("/api/chat", async (req, res) => {
  console.log("CHAT ROUTE WAS HIT");

  try {
    const question = req.body?.question;

    console.log("Question:", question);

    if (!question) {
      return res.status(400).json({
        error: "No question was provided."
      });
    }

    const apiKey = process.env.OPENROUTER_API_KEY;

    if (!apiKey) {
      console.error("OPENROUTER_API_KEY IS MISSING");

      return res.status(500).json({
        error: "OPENROUTER_API_KEY is missing on Render."
      });
    }

    console.log("OPENROUTER KEY EXISTS");
    console.log("CALLING OPENROUTER");

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

    console.log("OPENROUTER STATUS:", response.status);

    const rawText = await response.text();

    console.log("OPENROUTER BODY LENGTH:", rawText.length);
    console.log("OPENROUTER BODY:", rawText);

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
    } catch (error) {
      return res.status(502).json({
        error: "OpenRouter returned invalid JSON.",
        raw: rawText
      });
    }

    const answer = data?.choices?.[0]?.message?.content;

    if (!answer) {
      return res.status(502).json({
        error: "OpenRouter response contained no AI message.",
        response: data
      });
    }

    console.log("AI ANSWER RECEIVED");

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

app.listen(PORT, "0.0.0.0", () => {
  console.log("=================================");
  console.log("AI MIMO BACKEND STARTED");
  console.log("PORT:", PORT);
  console.log("=================================");
});