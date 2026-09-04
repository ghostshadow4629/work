import React, { useState } from "react";
import "./App.css";

const personalities = {
  Mentor: "Supportive, patient, and encouraging.",
  Teacher: "Clear, structured, and educational.",
  Challenger: "Pushes you to think deeply.",
  Analyst: "Logical, precise, and technical.",
  Coach: "Motivating and practical.",
  Zen: "Calm, simple, and reassuring.",
};

function Wave({ small = false }) {
  return (
    <div className={small ? "wave small-wave" : "wave"}>
      {Array.from({ length: small ? 12 : 34 }).map((_, i) => (
        <span
          key={i}
          style={{
            animationDelay: `${i * 0.04}s`,
          }}
        />
      ))}
    </div>
  );
}

function WaveOrb({ thinking }) {
  return (
    <div className={`wave-orb ${thinking ? "thinking" : ""}`}>
      <div className="orb-ring ring-1" />
      <div className="orb-ring ring-2" />

      <div className="orb">
        <Wave />
      </div>
    </div>
  );
}

function Navigation({ page, setPage }) {
  return (
    <nav className="navigation">
      <button
        className={page === "display" ? "active" : ""}
        onClick={() => setPage("display")}
      >
        <span>〰</span>
        <strong>Display</strong>
      </button>

      <button
        className={page === "knowledge" ? "active" : ""}
        onClick={() => setPage("knowledge")}
      >
        <span>▱</span>
        <strong>Knowledge</strong>
      </button>

      <button
        className={page === "settings" ? "active" : ""}
        onClick={() => setPage("settings")}
      >
        <span>⚙</span>
        <strong>Settings</strong>
      </button>
    </nav>
  );
}

function Display({
  personality,
  setPersonality,
}) {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);
  const [thinking, setThinking] = useState(false);

  async function ask(text = question) {
    const value = text.trim();

    if (!value || thinking) return;

    const newMessages = [
      ...messages,
      {
        role: "user",
        content: value,
      },
    ];

    setMessages(newMessages);
    setQuestion("");
    setThinking(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          personality,
          messages: newMessages,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Request failed"
        );
      }

      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content: data.answer,
        },
      ]);
    } catch (error) {
      console.error(error);

      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content:
            "Sorry Adam, I couldn't connect to the AI tutor.",
        },
      ]);
    } finally {
      setThinking(false);
    }
  }

  return (
    <section className="screen display-screen">
      <header className="screen-header">
        <div>
          <h1>AI Tutor</h1>

          <div className="online">
            <span />
            Online
          </div>
        </div>

        <div className="header-buttons">
          <button>🔊</button>
          <button>•••</button>
        </div>
      </header>

      {messages.length === 0 ? (
        <div className="display-center">
          <WaveOrb thinking={thinking} />

          <div className="listening">
            {thinking ? "Thinking..." : "Listening"}
            <span>✦</span>
          </div>

          <h2>Hey Adam! 👋</h2>

          <p className="intro">
            I'm your AI tutor. Ask me anything about
            Python, Math, or coding.
          </p>

          <div className="suggestions">
            <button
              onClick={() =>
                ask("Explain Python lists")
              }
            >
              <span className="suggestion-icon">
                🐍
              </span>

              <span>
                <strong>
                  Explain Python lists
                </strong>

                <small>
                  Learn how lists work in Python
                </small>
              </span>

              <b>›</b>
            </button>

            <button
              onClick={() =>
                ask(
                  "Solve this equation: 2x + 5 = 15"
                )
              }
            >
              <span className="suggestion-icon math">
                ∑
              </span>

              <span>
                <strong>
                  Solve this equation
                </strong>

                <small>
                  2x + 5 = 15
                </small>
              </span>

              <b>›</b>
            </button>

            <button
              onClick={() =>
                ask(
                  "What is a for loop in Python?"
                )
              }
            >
              <span className="suggestion-icon code">
                &lt;/&gt;
              </span>

              <span>
                <strong>
                  What is a for loop in Python?
                </strong>

                <small>
                  Explain it with an example
                </small>
              </span>

              <b>›</b>
            </button>
          </div>
        </div>
      ) : (
        <div className="chat">
          {messages.map((message, index) => (
            <div
              key={index}
              className={
                message.role === "user"
                  ? "user-message"
                  : "ai-message"
              }
            >
              {message.role === "assistant" && (
                <div className="answer-wave">
                  <Wave small />
                </div>
              )}

              {message.content}
            </div>
          ))}

          {thinking && (
            <div className="ai-message">
              <div className="answer-wave">
                <Wave small />
              </div>

              Thinking...
            </div>
          )}
        </div>
      )}

      <div className="input-area">
        <input
          value={question}
          onChange={(e) =>
            setQuestion(e.target.value)
          }
          onKeyDown={(e) => {
            if (e.key === "Enter") ask();
          }}
          placeholder="Ask me anything..."
        />

        <button className="mic">🎙</button>

        <button
          className="send"
          onClick={() => ask()}
          disabled={thinking}
        >
          ↑
        </button>
      </div>
    </section>
  );
}

function Knowledge() {
  const [subject, setSubject] = useState("Python");

  const python = [
    ["Introduction", "Basics & Setup", 100],
    ["Variables & Types", "Numbers & Strings", 100],
    ["Control Flow", "if, else, elif", 80],
    ["Loops", "for & while", 60],
    ["Functions", "Defining Functions", 40],
    ["Lists", "List Methods", 30],
    ["Dictionaries", "Key-Value Pairs", 20],
    ["Modules", "Importing Modules", 0],
  ];

  const math = [
    ["Algebra", "Equations & Expressions", 75],
    ["Geometry", "Shapes & Theorems", 50],
    ["Functions", "Graphs & Relations", 40],
    ["Statistics", "Data & Probability", 25],
  ];

  const topics = subject === "Python"
    ? python
    : math;

  return (
    <section className="screen knowledge-screen">
      <header className="screen-header">
        <div>
          <h1>Knowledge</h1>
          <p>Explore topics & lessons</p>
        </div>
      </header>

      <div className="knowledge-content">
        <div className="search">
          <span>⌕</span>
          <input placeholder="Search topics..." />
        </div>

        <div className="subject-tabs">
          <button
            className={
              subject === "Python"
                ? "selected"
                : ""
            }
            onClick={() => setSubject("Python")}
          >
            Python
          </button>

          <button
            className={
              subject === "Math"
                ? "selected"
                : ""
            }
            onClick={() => setSubject("Math")}
          >
            Math
          </button>
        </div>

        <div className="section-title">
          <h2>{subject} Roadmap</h2>
          <button>View all</button>
        </div>

        <div className="topic-list">
          {topics.map(
            ([name, description, progress], i) => (
              <div className="topic" key={name}>
                <div
                  className={
                    progress === 100
                      ? "topic-number completed"
                      : "topic-number"
                  }
                >
                  {progress === 100
                    ? "✓"
                    : i + 1}
                </div>

                <div className="topic-content">
                  <div className="topic-heading">
                    <div>
                      <strong>{name}</strong>
                      <small>
                        {description}
                      </small>
                    </div>

                    <span>{progress}%</span>
                  </div>

                  <div className="progress">
                    <div
                      style={{
                        width: `${progress}%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

function Toggle({ value, setValue }) {
  return (
    <button
      className={`toggle ${value ? "on" : ""}`}
      onClick={() => setValue(!value)}
    >
      <span />
    </button>
  );
}

function Settings({
  personality,
  setPersonality,
}) {
  const [theme, setTheme] = useState("Dark");
  const [voice, setVoice] = useState(true);
  const [sounds, setSounds] = useState(true);
  const [thinking, setThinking] = useState(true);

  return (
    <section className="screen settings-screen">
      <header className="screen-header">
        <div>
          <h1>Settings</h1>
          <p>Customize your AI tutor</p>
        </div>
      </header>

      <div className="settings-content">
        <div className="settings-section">
          <h3>Appearance</h3>

          <div className="theme-grid">
            {["Dark", "Deep Blue", "Midnight"].map(
              (item) => (
                <button
                  key={item}
                  className={
                    theme === item
                      ? "theme selected"
                      : "theme"
                  }
                  onClick={() =>
                    setTheme(item)
                  }
                >
                  <div
                    className={`theme-preview ${item
                      .toLowerCase()
                      .replace(" ", "-")}`}
                  />

                  <strong>{item}</strong>

                  {theme === item && (
                    <b>✓</b>
                  )}
                </button>
              )
            )}
          </div>
        </div>

        <div className="settings-section">
          <h3>Tutor Personality</h3>

          <p className="settings-description">
            Choose how your AI tutor responds.
          </p>

          <div className="personality-list">
            {Object.entries(personalities).map(
              ([name, description]) => (
                <button
                  key={name}
                  className={
                    personality === name
                      ? "personality selected"
                      : "personality"
                  }
                  onClick={() =>
                    setPersonality(name)
                  }
                >
                  <span className="personality-wave">
                    <Wave small />
                  </span>

                  <span>
                    <strong>{name}</strong>
                    <small>
                      {description}
                    </small>
                  </span>

                  <b>
                    {personality === name
                      ? "●"
                      : "○"}
                  </b>
                </button>
              )
            )}
          </div>
        </div>

        <div className="settings-section">
          <h3>Chat Settings</h3>

          <div className="settings-list">
            <div>
              <span>Voice Input</span>

              <Toggle
                value={voice}
                setValue={setVoice}
              />
            </div>

            <div>
              <span>Sound Effects</span>

              <Toggle
                value={sounds}
                setValue={setSounds}
              />
            </div>

            <div>
              <span>
                Show Thinking Animation
              </span>

              <Toggle
                value={thinking}
                setValue={setThinking}
              />
            </div>
          </div>
        </div>

        <div className="settings-section">
          <h3>Other</h3>

          <div className="other-list">
            <button>
              <span>Language</span>
              <span>English ›</span>
            </button>

            <button>
              <span>Clear Chat History</span>
              <span>›</span>
            </button>

            <button>
              <span>About AI MIMO</span>
              <span>v1.0.0 ›</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [page, setPage] = useState("display");

  const [personality, setPersonality] =
    useState("Mentor");

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-wave">
            <Wave small />
          </div>

          <div>
            <strong>AI MIMO</strong>
            <small>Your AI Tutor</small>
          </div>
        </div>

        <Navigation
          page={page}
          setPage={setPage}
        />

        <div className="side-info">
          <small>Daily Goal</small>
          <strong>20 / 20 min</strong>

          <div className="goal-progress">
            <span />
          </div>

          <div className="streak">
            🔥 7 Day Streak
          </div>
        </div>
      </aside>

      <main className="main">
        {page === "display" && (
          <Display
            personality={personality}
            setPersonality={setPersonality}
          />
        )}

        {page === "knowledge" && (
          <Knowledge />
        )}

        {page === "settings" && (
          <Settings
            personality={personality}
            setPersonality={setPersonality}
          />
        )}
      </main>

      <div className="mobile-navigation">
        <Navigation
          page={page}
          setPage={setPage}
        />
      </div>
    </div>
  );
}