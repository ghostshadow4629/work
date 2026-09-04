import http from "http";

const PORT = process.env.PORT || 3001;

const API_KEY =
  process.env.OPENROUTER_API_KEY;

const personalities = {
  Mentor:
    "Be supportive, patient and encouraging.",

  Teacher:
    "Explain concepts clearly and step by step.",

  Challenger:
    "Challenge the student to think deeply.",

  Analyst:
    "Be logical, precise and technically accurate.",

  Coach:
    "Be motivating and practical.",

  Zen:
    "Be calm, simple and reassuring.",
};

const server = http.createServer(
  async (req, res) => {
    res.setHeader(
      "Access-Control-Allow-Origin",
      "*"
    );

    res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type"
    );

    res.setHeader(
      "Access-Control-Allow-Methods",
      "POST, OPTIONS"
    );

    if (req.method === "OPTIONS") {
      res.writeHead(204);
      res.end();
      return;
    }

    if (
      req.method !== "POST" ||
      req.url !== "/api/chat"
    ) {
      res.writeHead(404);
      res.end(
        JSON.stringify({
          error: "Not found",
        })
      );
      return;
    }

    if (!API_KEY) {
      res.writeHead(500, {
        "Content-Type":
          "application/json",
      });

      res.end(
        JSON.stringify({
          error:
            "OPENROUTER_API_KEY is missing.",
        })
      );

      return;
    }

    try {
      let body = "";

      for await (const chunk of req) {
        body += chunk;
      }

      const data = JSON.parse(body);

      const personality =
        data.personality || "Mentor";

      const messages =
        Array.isArray(data.messages)
          ? data.messages
          : [];

      const systemMessage = {
        role: "system",

        content: `
You are the AI tutor inside AI MIMO.

The student's name is Adam.

You teach:
- Python
- Programming
- Mathematics
- Computer science

Your personality:
${
  personalities[personality] ||
  personalities.Mentor
}

Help Adam learn rather than simply giving answers.

For Python:
- Explain concepts.
- Explain errors.
- Show corrected code when useful.

For Math:
- Show the important steps.
- Explain why each step works.

Be accurate, helpful and concise.
        `,
      };

      const openRouterResponse =
        await fetch(
          "https://openrouter.ai/api/v1/chat/completions",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",

              "Authorization":
                `Bearer ${API_KEY}`,

              "HTTP-Referer":
                "http://localhost:3000",

              "X-Title":
                "AI MIMO",
            },

            body: JSON.stringify({
              model: "openrouter/free",

              messages: [
                systemMessage,
                ...messages,
              ],
            }),
          }
        );

      const result =
        await openRouterResponse.json();

      if (!openRouterResponse.ok) {
        console.error(
          "OpenRouter:",
          result
        );

        res.writeHead(
          openRouterResponse.status,
          {
            "Content-Type":
              "application/json",
          }
        );

        res.end(
          JSON.stringify({
            error:
              result?.error?.message ||
              "OpenRouter request failed.",
          })
        );

        return;
      }

      const answer =
        result?.choices?.[0]?.message?.content;

      res.writeHead(200, {
        "Content-Type":
          "application/json",
      });

      res.end(
        JSON.stringify({
          answer:
            answer ||
            "I didn't receive an answer from the AI.",
        })
      );
    } catch (error) {
      console.error(error);

      res.writeHead(500, {
        "Content-Type":
          "application/json",
      });

      res.end(
        JSON.stringify({
          error:
            "The AI tutor could not process the request.",
        })
      );
    }
  }
);

server.listen(PORT, () => {
  console.log(
    `AI MIMO backend running on port ${PORT}`
  );
});