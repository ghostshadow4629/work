import React, { useState } from "react";
import "./App.css";

const personalities = [
  {
    name: "Mentor",
    emoji: "🧠",
    description: "Friendly and patient",
    color: "#7c5cff",
  },
  {
    name: "Teacher",
    emoji: "📚",
    description: "Clear and structured",
    color: "#22d3ee",
  },
  {
    name: "Challenger",
    emoji: "⚡",
    description: "Pushes you harder",
    color: "#f59e0b",
  },
  {
    name: "Analyst",
    emoji: "🔬",
    description: "Logical and precise",
    color: "#34d399",
  },
];

function SoundWave({ speaking = false }) {
  return (
    <div className={`sound-wave ${speaking ? "speaking" : ""}`}>
      {Array.from({ length: 35 }).map((_, i) => (
        <span
          key={i}
          style={{
            animationDelay: `${i * 0.035}s`,
          }}
        />
      ))}
    </div>
  );
}

function App() {
  const [page, setPage] = useState("home");
  const [personality, setPersonality] = useState(personalities[0]);
  const [message, setMessage] = useState("");
  const [speaking, setSpeaking] = useState(false);

  const [chat, setChat] = useState([
    {
      type: "ai",
      text: "Hey! 👋 I'm your AI tutor. Ask me anything about Python, Math, or coding.",
    },
  ]);

  function askAI() {
    if (!message.trim()) return;

    const question = message;

    setChat((old) => [
      ...old,
      {
        type: "user",
        text: question,
      },
    ]);

    setMessage("");
    setSpeaking(true);

    setTimeout(() => {
      let answer;

      if (
        question.toLowerCase().includes("python") ||
        question.toLowerCase().includes("code")
      ) {
        answer = `
Let's look at it step by step.

Python executes instructions from top to bottom.
If your code isn't working, I'll help you find the exact problem.

Try sending me your Python code and I'll explain what each line does.
        `;
      } else if (
        question.toLowerCase().includes("math") ||
        question.toLowerCase().includes("solve") ||
        question.toLowerCase().includes("equation")
      ) {
        answer = `
Let's solve it together.

I'll break the problem into smaller steps and explain the mathematics instead of just giving you the answer.
        `;
      } else {
        answer = `
I'm in ${personality.name} mode.

I can help you learn Python, mathematics, algorithms, programming concepts, and problem solving.

Ask me a specific question and we'll work through it together.
        `;
      }

      setChat((old) => [
        ...old,
        {
          type: "ai",
          text: answer,
        },
      ]);

      setSpeaking(false);
    }, 900);
  }

  return (
    <div className="app">

      {/* SIDEBAR */}

      <aside className="sidebar">

        <div className="logo">
          <div className="logo-wave">
            <SoundWave />
          </div>

          <span>CodeAI</span>
        </div>

        <button
          className={page === "home" ? "nav active" : "nav"}
          onClick={() => setPage("home")}
        >
          🏠 Home
        </button>

        <button
          className={page === "learn" ? "nav active" : "nav"}
          onClick={() => setPage("learn")}
        >
          📚 Learn
        </button>

        <button
          className={page === "python" ? "nav active" : "nav"}
          onClick={() => setPage("python")}
        >
          🐍 Python
        </button>

        <button
          className={page === "math" ? "nav active" : "nav"}
          onClick={() => setPage("math")}
        >
          Σ Math
        </button>

        <button
          className={page === "ai" ? "nav active" : "nav"}
          onClick={() => setPage("ai")}
        >
          ✨ AI Tutor
        </button>

        <button
          className={page === "progress" ? "nav active" : "nav"}
          onClick={() => setPage("progress")}
        >
          🏆 Progress
        </button>

      </aside>


      {/* MAIN */}

      <main className="main">

        {/* HEADER */}

        <header className="header">

          <div>
            <h1>
              {page === "home" && "Welcome back 👋"}
              {page === "learn" && "Learning"}
              {page === "python" && "Python"}
              {page === "math" && "Mathematics"}
              {page === "ai" && "AI Tutor"}
              {page === "progress" && "Your Progress"}
            </h1>

            <p>
              Learn something new today.
            </p>
          </div>

          <div className="xp">
            🔥 7 day streak
          </div>

        </header>


        {/* HOME */}

        {page === "home" && (
          <>
            <section className="hero">

              <div className="online">
                ● AI ONLINE
              </div>

              <h2>
                Your AI tutor.
              </h2>

              <p>
                Learn Python, Math and programming
                with an AI that adapts to you.
              </p>

              <div className="hero-wave">
                <SoundWave speaking={speaking} />
              </div>

              <button
                className="primary"
                onClick={() => setPage("ai")}
              >
                Talk to your AI →
              </button>

            </section>


            <section className="cards">

              <div
                className="learning-card python"
                onClick={() => setPage("python")}
              >
                <span>🐍</span>

                <h3>Python</h3>

                <p>
                  Learn programming from the
                  fundamentals to advanced topics.
                </p>

                <div className="progress">
                  <div style={{ width: "42%" }} />
                </div>

                <small>42% complete</small>
              </div>


              <div
                className="learning-card math"
                onClick={() => setPage("math")}
              >
                <span>Σ</span>

                <h3>Mathematics</h3>

                <p>
                  Algebra, equations, geometry
                  and problem solving.
                </p>

                <div className="progress">
                  <div style={{ width: "28%" }} />
                </div>

                <small>28% complete</small>
              </div>

            </section>
          </>
        )}


        {/* AI */}

        {page === "ai" && (
          <section className="ai-page">

            <div className="ai-header">

              <div className="ai-avatar">
                <SoundWave speaking={speaking} />
              </div>

              <div>
                <h2>AI Tutor</h2>
                <p>
                  {personality.name} personality
                </p>
              </div>

            </div>


            <div className="chat">

              {chat.map((item, index) => (

                <div
                  key={index}
                  className={`message ${item.type}`}
                >

                  {item.type === "ai" && (
                    <div className="message-wave">
                      <SoundWave speaking={speaking} />
                    </div>
                  )}

                  <div className="message-content">
                    {item.text}
                  </div>

                </div>

              ))}

            </div>


            <div className="input-area">

              <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    askAI();
                  }
                }}
                placeholder="Ask about Python, Math..."
              />

              <button onClick={askAI}>
                ➤
              </button>

            </div>


            <h2 className="personality-title">
              AI Personality
            </h2>

            <div className="personalities">

              {personalities.map((p) => (

                <button
                  key={p.name}
                  className={
                    personality.name === p.name
                      ? "personality selected"
                      : "personality"
                  }
                  onClick={() => setPersonality(p)}
                >

                  <div
                    className="personality-wave"
                    style={{
                      "--wave-color": p.color,
                    }}
                  >
                    <SoundWave />
                  </div>

                  <strong>
                    {p.emoji} {p.name}
                  </strong>

                  <small>
                    {p.description}
                  </small>

                </button>

              ))}

            </div>

          </section>
        )}


        {/* PYTHON */}

        {page === "python" && (

          <section className="lesson">

            <div className="lesson-top">
              <span>🐍 Python Basics</span>
              <b>+50 XP</b>
            </div>

            <h2>
              Variables
            </h2>

            <p>
              Variables store information that your
              program can use later.
            </p>

            <div className="code">

              <div>
                <span className="keyword">name</span> ={" "}
                <span className="string">
                  "Adam"
                </span>
              </div>

              <div>
                <span className="keyword">age</span> ={" "}
                <span className="number">
                  20
                </span>
              </div>

              <div>
                print(name)
              </div>

            </div>

            <button
              className="primary"
              onClick={() => setPage("ai")}
            >
              Ask AI to explain →
            </button>

          </section>

        )}


        {/* MATH */}

        {page === "math" && (

          <section className="lesson">

            <div className="lesson-top">
              <span>Σ Mathematics</span>
              <b>+50 XP</b>
            </div>

            <h2>
              Solve the equation
            </h2>

            <div className="equation">
              2x + 6 = 14
            </div>

            <div className="steps">

              <p>
                <b>Step 1:</b> Subtract 6 from both sides.
              </p>

              <p>
                2x = 8
              </p>

              <p>
                <b>Step 2:</b> Divide both sides by 2.
              </p>

              <p>
                x = 4
              </p>

            </div>

            <button
              className="primary"
              onClick={() => setPage("ai")}
            >
              Ask AI for another problem →
            </button>

          </section>

        )}


        {/* LEARN */}

        {page === "learn" && (

          <section>

            <h2>Python Roadmap</h2>

            <div className="roadmap">

              {[
                "Introduction",
                "Variables",
                "Data Types",
                "If Statements",
                "Loops",
                "Functions",
                "Lists",
                "Dictionaries",
              ].map((lesson, index) => (

                <div className="roadmap-item" key={lesson}>

                  <div className="number">
                    {index + 1}
                  </div>

                  <div>
                    <strong>{lesson}</strong>
                    <small>
                      {index < 2
                        ? "Completed ✓"
                        : "Start lesson"}
                    </small>
                  </div>

                </div>

              ))}

            </div>

          </section>

        )}


        {/* PROGRESS */}

        {page === "progress" && (

          <section>

            <div className="level-card">

              <div>
                <small>YOUR LEVEL</small>
                <strong>12</strong>
              </div>

              <div className="big-xp">
                2,450 XP
              </div>

            </div>

            <div className="stats">

              <div>
                🔥
                <strong>7</strong>
                <small>Day streak</small>
              </div>

              <div>
                📚
                <strong>24</strong>
                <small>Lessons</small>
              </div>

              <div>
                🧩
                <strong>18</strong>
                <small>Challenges</small>
              </div>

            </div>

          </section>

        )}

      </main>

    </div>
  );
}

export default App;