import React, { useState } from "react";
import "./App.css";

function Icon({ name, size = 22 }) {
  const paths = {
    chat: (
      <>
        <path d="M20 11.5a7.5 7.5 0 0 1-8 7.5 8.5 8.5 0 0 1-4-.9L3 20l1.8-4A7.4 7.4 0 0 1 4 11.5 7.5 7.5 0 0 1 12 4a7.5 7.5 0 0 1 8 7.5Z" />
        <circle cx="9" cy="12" r=".7" />
        <circle cx="12" cy="12" r=".7" />
        <circle cx="15" cy="12" r=".7" />
      </>
    ),

    code: (
      <>
        <path d="m8 7-5 5 5 5" />
        <path d="m16 7 5 5-5 5" />
        <path d="m14 3-4 18" />
      </>
    ),

    quiz: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M9.7 9a2.4 2.4 0 1 1 4.1 1.7c-1.2.9-1.8 1.3-1.8 2.8" />
        <circle cx="12" cy="16.8" r=".7" />
      </>
    ),

    history: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
        <path d="M3 8V4h4" />
      </>
    ),

    bookmark: (
      <path d="M6 4.5A1.5 1.5 0 0 1 7.5 3h9A1.5 1.5 0 0 1 18 4.5V21l-6-3.5L6 21Z" />
    ),

    settings: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.8 1.8 0 0 0 .4 2l.1.1-1.7 1.7-.1-.1a1.8 1.8 0 0 0-2-.4 1.8 1.8 0 0 0-1.1 1.7V20h-2.4v-.1a1.8 1.8 0 0 0-1.1-1.7 1.8 1.8 0 0 0-2 .4l-.1.1-1.7-1.7.1-.1a1.8 1.8 0 0 0 .4-2 1.8 1.8 0 0 0-1.7-1.1H4v-2.4h.1a1.8 1.8 0 0 0 1.7-1.1 1.8 1.8 0 0 0-.4-2l-.1-.1L7 6.5l.1.1a1.8 1.8 0 0 0 2 .4 1.8 1.8 0 0 0 1.1-1.7V5h2.4v.3a1.8 1.8 0 0 0 1.1 1.7 1.8 1.8 0 0 0 2-.4l.1-.1 1.7 1.7-.1.1a1.8 1.8 0 0 0-.4 2 1.8 1.8 0 0 0 1.7 1.1h.3v2.4h-.3a1.8 1.8 0 0 0-1.3 1.2Z" />
      </>
    ),

    person: (
      <>
        <circle cx="12" cy="8" r="3.5" />
        <path d="M5 20c.7-3.5 3-5.5 7-5.5s6.3 2 7 5.5" />
      </>
    ),

    send: (
      <>
        <path d="m4 4 17 8-17 8 3-8Z" />
        <path d="M7 12h14" />
      </>
    ),

    mic: (
      <>
        <rect
          x="9"
          y="3"
          width="6"
          height="11"
          rx="3"
        />
        <path d="M5 10a7 7 0 0 0 14 0" />
        <path d="M12 17v4M8 21h8" />
      </>
    ),

    plus: (
      <>
        <path d="M12 5v14" />
        <path d="M5 12h14" />
      </>
    ),

    volume: (
      <>
        <path d="M4 10v4h4l5 4V6l-5 4Z" />
        <path d="M16 9a4 4 0 0 1 0 6" />
        <path d="M18.5 6.5a8 8 0 0 1 0 11" />
      </>
    ),

    more: (
      <>
        <circle cx="5" cy="12" r="1" />
        <circle cx="12" cy="12" r="1" />
        <circle cx="19" cy="12" r="1" />
      </>
    ),

    copy: (
      <>
        <rect
          x="8"
          y="8"
          width="11"
          height="12"
          rx="2"
        />
        <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h2" />
      </>
    ),

    like: (
      <path d="M7 10v10H4V10Zm3 10h6.7a2 2 0 0 0 1.9-1.4l1.3-4.1A2 2 0 0 0 18 12h-4l.6-4.1A2.4 2.4 0 0 0 12.2 5L10 10v10Z" />
    ),

    dislike: (
      <path d="M7 14V4H4v10Zm3-10h6.7a2 2 0 0 1 1.9 1.4l1.3 4.1A2 2 0 0 1 18 12h-4l.6 4.1a2.4 2.4 0 0 1-2.4 2.9L10 14v-10Z" />
    ),

    check: (
      <path d="m5 12 4 4L19 6" />
    ),

    lightbulb: (
      <>
        <path d="M9 18h6M10 21h4" />
        <path d="M8.5 14.5A7 7 0 1 1 15.5 14c-.8.7-1.2 1.5-1.4 2.5h-4.2c-.2-1-.6-1.8-1.4-2.5Z" />
      </>
    )
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  );
}

function Wave({ small = false }) {
  return (
    <div
      className={`wave ${
        small ? "wave-small" : ""
      }`}
    >
      {Array.from({
        length: small ? 24 : 60
      }).map((_, i) => {
        const height = small
          ? Math.round(
              Math.abs(
                Math.sin(i * 0.7)
              ) *
                10 +
                3
            )
          : Math.round(
              Math.abs(
                Math.sin(i * 0.55)
              ) *
                32 +
                5
            );

        return (
          <span
            key={i}
            style={{
              height: `${height}px`
            }}
          />
        );
      })}
    </div>
  );
}

function LeftRail({
  active,
  setActive
}) {
  const items = [
    ["chat", "Chat"],
    ["code", "Python"],
    ["quiz", "Quizzes"],
    ["history", "History"],
    ["bookmark", "Bookmarks"],
    ["settings", "Settings"]
  ];

  return (
    <aside className="rail">
      <div className="rail-brand">
        <div className="brand-orb">
          <Wave small />
        </div>

        <div>
          <strong>AI MIMO</strong>
          <span>Your AI Tutor</span>
        </div>
      </div>

      <nav className="rail-nav">
        {items.map(
          ([icon, label]) => (
            <button
              key={label}
              className={`rail-item ${
                active === label
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                setActive(label)
              }
            >
              <Icon
                name={icon}
                size={21}
              />
              <span>{label}</span>
            </button>
          )
        )}
      </nav>

      <div className="rail-bottom">
        <div className="rail-user">
          <div className="avatar">
            A
          </div>

          <div>
            <strong>Alex</strong>
            <span>Level 12</span>
          </div>
        </div>

        <div className="rail-status">
          <i />
          Online
        </div>
      </div>
    </aside>
  );
}

function ChatPage() {
  const [messages, setMessages] =
    useState([
      {
        role: "assistant",
        content:
          "Hey Alex 👋 I'm your AI Tutor. Ask me anything about Python, Math, coding, or your studies."
      }
    ]);

  const [input, setInput] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const suggestions = [
    "Explain Python lists",
    "Solve 2x + 5 = 15",
    "What is a for loop?"
  ];

  const sendMessage = async () => {
    const text = input.trim();

    if (!text || loading) {
      return;
    }

    setMessages((old) => [
      ...old,
      {
        role: "user",
        content: text
      }
    ]);

    setInput("");
    setLoading(true);

    const controller =
      new AbortController();

    const timeout = setTimeout(() => {
      controller.abort();
    }, 90000);

    try {
      const response = await fetch(
        "/api/chat",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json"
          },

          body: JSON.stringify({
            question: text
          }),

          signal:
            controller.signal
        }
      );

      const raw =
        await response.text();

      console.log(
        "Backend HTTP status:",
        response.status
      );

      console.log(
        "FULL BACKEND RESPONSE:",
        raw
      );

      if (!response.ok) {
        let errorData = null;

        try {
          errorData =
            JSON.parse(raw);
        } catch {
          // Not JSON
        }

        throw new Error(
          `HTTP ${response.status}: ${
            errorData?.error ||
            raw ||
            "Request failed"
          }`
        );
      }

      if (!raw.trim()) {
        throw new Error(
          "The server returned HTTP 200 but sent an empty response."
        );
      }

      let data;

      try {
        data =
          JSON.parse(raw);
      } catch {
        throw new Error(
          `Server returned invalid JSON: ${raw}`
        );
      }

      /*
       * DIAGNOSTIC MODE
       *
       * Display the ENTIRE JSON
       * returned by OpenRouter.
       */
      const fullJson =
        JSON.stringify(
          data,
          null,
          2
        );

      setMessages((old) => [
        ...old,
        {
          role: "assistant",
          content: fullJson
        }
      ]);

    } catch (error) {
      console.error(
        "Chat error:",
        error
      );

      let message;

      if (
        error?.name ===
        "AbortError"
      ) {
        message =
          "The AI took longer than 90 seconds to respond. Please try again.";
      } else {
        message =
          "Sorry, I couldn't reach the AI.\n\n" +
          `ERROR: ${
            error?.name ||
            "Unknown"
          }\n` +
          `MESSAGE: ${
            error?.message ||
            "No error message"
          }`;
      }

      setMessages((old) => [
        ...old,
        {
          role: "assistant",
          content: message
        }
      ]);
    } finally {
      clearTimeout(timeout);
      setLoading(false);
    }
  };

  const useSuggestion = (
    text
  ) => {
    setInput(text);
  };

  return (
    <section className="chat-page">
      <header className="chat-header">
        <div className="chat-title">
          <div className="ai-avatar">
            <Wave small />
          </div>

          <div>
            <h1>AI Tutor</h1>

            <div className="online">
              <i />
              Online
            </div>
          </div>
        </div>

        <div className="chat-header-actions">
          <button
            className="icon-button"
            title="Sound"
          >
            <Icon
              name="volume"
              size={19}
            />
          </button>

          <button className="personality-button">
            <Icon
              name="person"
              size={18}
            />
            Change Personality
          </button>

          <button
            className="icon-button"
            title="More"
          >
            <Icon
              name="more"
              size={20}
            />
          </button>
        </div>
      </header>

      <div className="chat-wave">
        <Wave />
      </div>

      <div className="chat-day">
        Today
      </div>

      <div className="messages">
        {messages.map(
          (message, index) => (
            <React.Fragment
              key={index}
            >
              <div
                className={
                  message.role ===
                  "user"
                    ? "message-row user-row"
                    : "message-row assistant-row"
                }
              >
                {message.role ===
                  "assistant" && (
                  <div className="message-avatar">
                    <Wave small />
                  </div>
                )}

                <div
                  className={
                    message.role ===
                    "user"
                      ? "user-bubble"
                      : "assistant-bubble"
                  }
                >
                  <p
                    style={{
                      whiteSpace:
                        "pre-wrap"
                    }}
                  >
                    {message.content}
                  </p>

                  <div className="message-meta">
                    <span>
                      Now
                    </span>

                    {message.role ===
                      "user" && (
                      <span className="checks">
                        ✓✓
                      </span>
                    )}
                  </div>

                  {message.role ===
                    "assistant" &&
                    index !== 0 && (
                      <div className="message-tools">
                        <button>
                          <Icon
                            name="copy"
                            size={16}
                          />
                        </button>

                        <button>
                          <Icon
                            name="like"
                            size={16}
                          />
                        </button>

                        <button>
                          <Icon
                            name="dislike"
                            size={16}
                          />
                        </button>
                      </div>
                    )}
                </div>
              </div>
            </React.Fragment>
          )
        )}

        {loading && (
          <div className="message-row assistant-row">
            <div className="message-avatar">
              <Wave small />
            </div>

            <div className="assistant-bubble">
              <p>
                Thinking...
              </p>

              <div className="message-meta">
                <span>
                  AI Tutor
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="suggestions">
        {suggestions.map(
          (suggestion) => (
            <button
              key={suggestion}
              onClick={() =>
                useSuggestion(
                  suggestion
                )
              }
              disabled={loading}
            >
              {suggestion}
              <span>→</span>
            </button>
          )
        )}
      </div>

      <div className="composer-wrap">
        <div className="composer">
          <input
            value={input}
            onChange={(e) =>
              setInput(
                e.target.value
              )
            }
            onKeyDown={(e) => {
              if (
                e.key === "Enter" &&
                !e.shiftKey
              ) {
                e.preventDefault();
                sendMessage();
              }
            }}
            placeholder={
              loading
                ? "AI Tutor is thinking..."
                : "Ask anything..."
            }
            disabled={loading}
          />

          <button
            className="mic-button"
            title="Voice input"
            disabled={loading}
          >
            <Icon
              name="mic"
              size={20}
            />
          </button>

          <button
            className="send-button"
            onClick={
              sendMessage
            }
            title="Send"
            disabled={
              loading ||
              !input.trim()
            }
          >
            <Icon
              name="send"
              size={21}
            />
          </button>
        </div>

        <div className="composer-hint">
          Press Enter to send
        </div>
      </div>
    </section>
  );
}

function PythonPage() {
  const [output, setOutput] =
    useState("");

  const runCode = () => {
    setOutput("120");
  };

  return (
    <section className="python-page">
      <header className="page-header">
        <div>
          <h1>
            Python Mode
          </h1>

          <span>
            Learn, experiment
            &amp; build
          </span>
        </div>

        <button className="small-action">
          <Icon
            name="more"
            size={20}
          />
        </button>
      </header>

      <div className="python-editor">
        <div className="editor-bar">
          <span>
            <i />
            main.py
          </span>

          <b>
            Python 3
          </b>
        </div>

        <div className="code-area">
          <div>
            <em>1</em>

            <span className="pink">
              def factorial
            </span>
            (n):
          </div>

          <div>
            <em>2</em>
            &nbsp;&nbsp;&nbsp;&nbsp;

            <span className="pink">
              if
            </span>{" "}
            n == 0:
          </div>

          <div>
            <em>3</em>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <span className="green">
              return
            </span>{" "}
            1
          </div>

          <div>
            <em>4</em>
            &nbsp;&nbsp;&nbsp;&nbsp;

            <span className="pink">
              else
            </span>
            :
          </div>

          <div>
            <em>5</em>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <span className="green">
              return
            </span>{" "}
            n *
            factorial(n-1)
          </div>

          <div>
            <em>6</em>
          </div>

          <div>
            <em>7</em>

            n ={" "}

            <span className="orange">
              5
            </span>
          </div>

          <div>
            <em>8</em>

            <span className="yellow">
              print
            </span>
            (factorial(n))
          </div>
        </div>
      </div>

      <div className="python-actions">
        <button
          className="run-button"
          onClick={runCode}
        >
          ▶ Run Code
        </button>

        <button
          className="reset-button"
          onClick={() =>
            setOutput("")
          }
        >
          Reset
        </button>
      </div>

      <div className="output-card">
        <span>
          Output
        </span>

        <strong>
          {output || "—"}
        </strong>

        {output && (
          <div className="output-success">
            <Icon
              name="check"
              size={19}
            />
          </div>
        )}
      </div>

      <div className="insight-card">
        <div className="insight-icon">
          <Icon
            name="lightbulb"
            size={25}
          />
        </div>

        <div>
          <h3>
            AI Insight
          </h3>

          <p>
            Recursion solves a
            problem by calling the
            same function with a
            smaller input until it
            reaches a base case.
          </p>

          <span>
            Concept: Recursion
          </span>
        </div>
      </div>
    </section>
  );
}

function PlaceholderPage({
  title,
  icon
}) {
  return (
    <section className="placeholder-page">
      <div className="placeholder-icon">
        {icon}
      </div>

      <h1>
        {title}
      </h1>

      <p>
        This section is ready
        for the next feature.
      </p>
    </section>
  );
}

export default function App() {
  const [active, setActive] =
    useState("Chat");

  const renderContent = () => {
    switch (active) {
      case "Chat":
        return <ChatPage />;

      case "Python":
        return <PythonPage />;

      case "Quizzes":
        return (
          <PlaceholderPage
            title="Quizzes"
            icon="?"
          />
        );

      case "History":
        return (
          <PlaceholderPage
            title="History"
            icon="◷"
          />
        );

      case "Bookmarks":
        return (
          <PlaceholderPage
            title="Bookmarks"
            icon="🔖"
          />
        );

      case "Settings":
        return (
          <PlaceholderPage
            title="Settings"
            icon="⚙"
          />
        );

      default:
        return <ChatPage />;
    }
  };

  return (
    <main className="app">
      <LeftRail
        active={active}
        setActive={setActive}
      />

      <div className="main-area">
        {renderContent()}
      </div>
    </main>
  );
}