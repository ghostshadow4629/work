import React, { useState } from "react";
import "./App.css";

const pythonTopics = [
  ["Introduction", "Basics & Setup", 100],
  ["Variables & Types", "Numbers, Strings, Booleans", 100],
  ["Control Flow", "if, else, elif", 80],
  ["Loops", "for & while loops", 60],
  ["Functions", "Defining & Calling", 40],
  ["Lists", "List Methods & Operations", 30],
  ["Dictionaries", "Key-Value Pairs", 20],
  ["Modules", "Importing & Modules", 0],
];

const mathTopics = [
  ["Algebra", "Equations & Expressions", 75],
  ["Geometry", "Shapes & Theorems", 50],
  ["Functions", "Graphs & Relations", 40],
  ["Statistics", "Data & Probability", 25],
];

const personalities = [
  ["Mentor", "Supportive and patient"],
  ["Teacher", "Clear and structured"],
  ["Challenger", "Pushes you to think deeper"],
  ["Analyst", "Logical and precise"],
  ["Coach", "Motivates you to improve"],
  ["Zen", "Calm and mindful"],
];

function Wave({ count = 31 }) {
  return (
    <div className="wave">
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          style={{
            animationDelay: `${i * 0.035}s`,
            height: `${25 + Math.abs(Math.sin(i * 0.55)) * 60}%`,
          }}
        />
      ))}
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
        <span className="nav-icon">〰</span>

        <span className="nav-text">
          <strong>Display</strong>
          <small>AI Tutor</small>
        </span>
      </button>

      <button
        className={page === "knowledge" ? "active" : ""}
        onClick={() => setPage("knowledge")}
      >
        <span className="nav-icon">▱</span>

        <span className="nav-text">
          <strong>Knowledge</strong>
          <small>Learn</small>
        </span>
      </button>

      <button
        className={page === "settings" ? "active" : ""}
        onClick={() => setPage("settings")}
      >
        <span className="nav-icon">⚙</span>

        <span className="nav-text">
          <strong>Settings</strong>
          <small>Customize</small>
        </span>
      </button>

    </nav>
  );
}

function WaveOrb() {
  return (
    <div className="wave-orb">

      <div className="orb-ring orb-ring-one" />
      <div className="orb-ring orb-ring-two" />

      <div className="orb">
        <Wave count={35} />
      </div>

    </div>
  );
}

function Display() {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);

  function getAnswer(text) {
    const lower = text.toLowerCase();

    if (lower.includes("list")) {
      return (
        "A Python list stores multiple values in one variable. " +
        "For example, numbers = [1, 2, 3]. You can access " +
        "items with numbers[0] and add items with .append()."
      );
    }

    if (
      lower.includes("2x") ||
      lower.includes("equation")
    ) {
      return (
        "Let's solve it step by step. 2x + 5 = 15. " +
        "Subtract 5 from both sides: 2x = 10. " +
        "Divide by 2, so x = 5."
      );
    }

    if (lower.includes("for loop")) {
      return (
        "A for loop repeats code for each item in a sequence. " +
        "For example: for number in [1, 2, 3]: print(number)."
      );
    }

    return (
      "Great question, Adam! I can help you with Python, " +
      "Math and programming. Ask me something specific " +
      "and I'll explain it step by step."
    );
  }

  function ask(text = question) {
    if (!text.trim()) return;

    setMessages((old) => [
      ...old,
      {
        question: text,
        answer: getAnswer(text),
      },
    ]);

    setQuestion("");
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

        <div className="display-content">

          <WaveOrb />

          <div className="listening">
            Listening <span>✦</span>
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
              <span className="suggestion-icon python">
                🐍
              </span>

              <span>
                <strong>Explain Python lists</strong>
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
                <strong>Solve this equation</strong>
                <small>2x + 5 = 15</small>
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

          <div className="mini-wave">
            <Wave count={17} />
          </div>

          {messages.map((message, index) => (
            <div key={index}>

              <div className="user-message">
                {message.question}
              </div>

              <div className="ai-message">

                <div className="answer-wave">
                  <Wave count={12} />
                </div>

                {message.answer}

              </div>

            </div>
          ))}

        </div>

      )}

      <div className="input-area">

        <input
          value={question}
          onChange={(e) =>
            setQuestion(e.target.value)
          }
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              ask();
            }
          }}
          placeholder="Ask me anything..."
        />

        <button className="mic">
          🎙
        </button>

        <button
          className="send"
          onClick={() => ask()}
        >
          ↑
        </button>

      </div>

    </section>
  );
}

function Knowledge() {
  const [subject, setSubject] = useState("Python");
  const topics =
    subject === "Python"
      ? pythonTopics
      : mathTopics;

  return (
    <section className="screen knowledge-screen">

      <header className="screen-header">
        <div>
          <h1>Knowledge</h1>
          <p>Explore topics & lessons</p>
        </div>
      </header>

      <div className="search">
        <span>⌕</span>

        <input
          placeholder="Search topics..."
        />
      </div>

      <div className="subject-tabs">

        <button
          className={subject === "Python" ? "selected" : ""}
          onClick={() => setSubject("Python")}
        >
          Python
        </button>

        <button
          className={subject === "Math" ? "selected" : ""}
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
          ([name, description, progress], index) => (
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
                  : index + 1}
              </div>

              <div className="topic-content">

                <div className="topic-heading">

                  <div>
                    <strong>{name}</strong>
                    <small>{description}</small>
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

    </section>
  );
}

function Toggle({ enabled, setEnabled }) {
  return (
    <button
      className={`toggle ${enabled ? "on" : ""}`}
      onClick={() => setEnabled(!enabled)}
    >
      <span />
    </button>
  );
}

function Settings() {
  const [theme, setTheme] = useState("Dark");
  const [personality, setPersonality] =
    useState("Mentor");

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
                >
                  <span />
                </div>

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

          {personalities.map(
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
                  <Wave count={8} />
                </span>

                <span>
                  <strong>{name}</strong>
                  <small>{description}</small>
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
              enabled={voice}
              setEnabled={setVoice}
            />
          </div>

          <div>
            <span>Sound Effects</span>
            <Toggle
              enabled={sounds}
              setEnabled={setSounds}
            />
          </div>

          <div>
            <span>Show Thinking Animation</span>
            <Toggle
              enabled={thinking}
              setEnabled={setThinking}
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

    </section>
  );
}

export default function App() {
  const [page, setPage] = useState("display");

  return (
    <div className="app">

      <aside className="sidebar">

        <div className="brand">
          <div className="brand-wave">
            <Wave count={9} />
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

          <div>
            <small>Daily Goal</small>
            <strong>20 / 20 min</strong>

            <div className="goal-progress">
              <span />
            </div>
          </div>

          <div className="streak">
            🔥 7 Day Streak
          </div>

        </div>

      </aside>

      <main className="main">

        {page === "display" && <Display />}

        {page === "knowledge" && <Knowledge />}

        {page === "settings" && <Settings />}

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