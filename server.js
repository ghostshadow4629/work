const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000;

// Parse JSON requests
app.use(express.json());


// =====================================================
// API TEST
// =====================================================

app.get("/api/test", (req, res) => {
  res.status(200).json({
    ok: true,
    message: "AI MIMO backend is running.",
    service: "work-ptgl"
  });
});


// =====================================================
// AI CHAT API
// =====================================================

app.post("/api/chat", async (req, res) => {
  try {
    const question = req.body?.question;

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

    console.log(
      "OpenRouter response length:",
      rawText.length
    );

    console.log(
      "OpenRouter response:",
      rawText
    );


    // =================================================
    // OPENROUTER ERROR
    // =================================================

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


    // =================================================
    // EMPTY RESPONSE
    // =================================================

    if (!rawText.trim()) {
      console.error(
        "OpenRouter returned an empty response."
      );

      return res.status(502).json({
        error: "OpenRouter returned an empty response."
      });
    }


    // =================================================
    // PARSE OPENROUTER JSON
    // =================================================

    let data;

    try {
      data = JSON.parse(rawText);
    } catch (error) {
      console.error(
        "Invalid JSON from OpenRouter:",
        rawText
      );

      return res.status(502).json({
        error: "OpenRouter returned invalid JSON.",
        raw: rawText
      });
    }


    // =================================================
    // GET AI MESSAGE
    // =================================================

    const message =
      data?.choices?.[0]?.message;

    if (!message) {
      console.error(
        "OpenRouter response contained no message:",
        data
      );

      return res.status(502).json({
        error: "OpenRouter response contained no message.",
        fullResponse: data
      });
    }


    // =================================================
    // GET AI ANSWER
    // =================================================

    const answer = message.content;

    if (!answer) {
      console.error(
        "OpenRouter message contained no content:",
        message
      );

      return res.status(502).json({
        error: "OpenRouter message contained no content.",
        fullMessage: message
      });
    }


    console.log("AI answer received.");

    return res.status(200).json({
      answer: answer
    });

  } catch (error) {
    console.error(
      "SERVER ERROR:",
      error
    );

    return res.status(500).json({
      error: "Server failed while contacting OpenRouter.",
      message: error.message
    });
  }
});


// =====================================================
// SERVE REACT APP
// =====================================================

const buildPath = path.join(
  __dirname,
  "build"
);

app.use(
  express.static(buildPath)
);


// =====================================================
// REACT SPA FALLBACK
// =====================================================

// Any normal browser route that isn't an API route
// gets the React application.

app.get("*", (req, res) => {
  res.sendFile(
    path.join(
      buildPath,
      "index.html"
    )
  );
});


// =====================================================
// START SERVER
// =====================================================

app.listen(
  PORT,
  "0.0.0.0",
  () => {
    console.log(
      "================================="
    );

    console.log(
      "AI MIMO SERVER STARTED"
    );

    console.log(
      "Port:",
      PORT
    );

    console.log(
      "React build:",
      buildPath
    );

    console.log(
      "================================="
    );
  }
);