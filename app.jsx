import React, { useEffect, useRef, useState } from "react";
import "./App.css";

const initialMessages = [
  {
    id: 1,
    sender: "ai",
    text: "Hello. I am your AI Assistant. Ask me anything and I will do my best to help.",
  },
];

const knowledgeItems = [
  {
    title: "React",
    text: "React is a JavaScript library used to build interactive user interfaces from components.",
  },
  {
    title: "Python",
    text: "Python is a programming language commonly used for automation, applications, games, data and AI.",
  },
  {
    title: "Artificial Intelligence",
    text: "Artificial intelligence allows computer systems to perform tasks that normally require human-like reasoning or pattern recognition.",
  },
  {
    title: "Robotics",
    text: "Robotics combines programming, electronics and mechanical systems to create machines that can sense and perform actions.",
  },
  {
    title: "JavaScript",
    text: "JavaScript is a programming language commonly used to make websites and web applications interactive.",
  },
];

function getLocalAnswer(question) {
  const q = question.toLowerCase().trim();

  if (!q) {
    return "Please type a question first.";
  }

  if (
    q.includes("hello") ||
    q.includes("hi") ||
    q.includes("hey")
  ) {
    return "Hello. All systems are online. What would you like to work on?";
  }

  if (
    q.includes("your name") ||
    q.includes("who are you")
  ) {
    return "I am your AI Assistant. I am currently running through your React interface.";
  }

  if (q.includes("react")) {
    return `React is used to build interactive websites and applications.

React applications are built from components.

For example:

function App() {
  return <h1>Hello World</h1>;
}

You can combine many components to create a complete application.`;
  }

  if (q.includes("python")) {
    return `Python is a programming language that can be used for applications, automation, games and AI.

Example:

name = "AI Assistant"
print("Hello " + name)

Python can also be used to create a backend for your React application.`;
  }

  if (
    q.includes("robot") ||
    q.includes("robot arm")
  ) {
    return `A robot arm normally uses motors or servos to control its joints.

A basic robot arm system can contain:

1. A controller
2. Motors or servos
3. A power supply
4. Wiring
5. Software

The exact components depend on the robot arm you are building.`;
  }

  if (q.includes("javascript")) {
    return `JavaScript is the programming language used by React.

It allows your application to:
- Respond to button clicks
- Change the screen
- Store information
- Send requests to servers
- Create animations
- Communicate with APIs`;
  }

  if (q.includes("ai")) {
    return `An AI assistant normally has three major parts:

1. Frontend
The React application that the user interacts with.

2. Backend
The server that receives messages.

3. AI model
The system that generates the answer.

Your current React interface is the frontend.`;
  }

  if (q.includes("how are you")) {
    return "All systems are online and ready.";
  }

  return `I received your question:

"${question}"

The React interface is working correctly. For unrestricted AI answers, connect the /api/chat endpoint to your AI backend.`;
}

export default function App() {
  const [activePage, setActivePage] = useState("Chat");

  const [messages, setMessages] =
    useState(initialMessages);

  const [message, setMessage] = useState("");

  const [isThinking, setIsThinking] =
    useState(false);

  const [processing, setProcessing] =
    useState(100);

  const [memory, setMemory] =
    useState([]);

  const [memoryEnabled, setMemoryEnabled] =
    useState(true);

  const [voiceEnabled, setVoiceEnabled] =
    useState(false);

  const [notifications, setNotifications] =
    useState(true);

  const [autoScroll, setAutoScroll] =
    useState(true);

  const [theme, setTheme] =
    useState("dark");

  const [knowledgeSearch, setKnowledgeSearch] =
    useState("");

  const messagesRef = useRef(null);

  useEffect(() => {
    if (
      autoScroll &&
      messagesRef.current
    ) {
      messagesRef.current.scrollTop =
        messagesRef.current.scrollHeight;
    }
  }, [
    messages,
    isThinking,
    autoScroll,
  ]);

  useEffect(() => {
    document.body.className =
      theme === "light"
        ? "lightTheme"
        : "";
  }, [theme]);

  useEffect(() => {
    if (!isThinking) {
      setProcessing(100);
      return;
    }

    let value = 25;

    const interval = setInterval(() => {
      value += Math.floor(
        Math.random() * 10
      ) + 5;

      if (value >= 96) {
        value = 96;
      }

      setProcessing(value);
    }, 250);

    return () => clearInterval(interval);
  }, [isThinking]);

  function changePage(page) {
    setActivePage(page);
  }

  function clearChat() {
    setMessages([]);

    if (notifications) {
      console.log("Chat cleared");
    }
  }

  function newConversation() {
    setMessages([
      {
        id: Date.now(),
        sender: "ai",
        text: "New conversation started. What would you like to ask?",
      },
    ]);

    setActivePage("Chat");
  }

  function clearMemory() {
    setMemory([]);
  }

  function speak(text) {
    if (
      !voiceEnabled ||
      !window.speechSynthesis
    ) {
      return;
    }

    window.speechSynthesis.cancel();

    const speech =
      new SpeechSynthesisUtterance(text);

    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(
      speech
    );
  }

  async function askAI() {
    const question = message.trim();

    if (!question || isThinking) {
      return;
    }

    const userMessage = {
      id: Date.now(),
      sender: "user",
      text: question,
    };

    setMessages((previous) => [
      ...previous,
      userMessage,
    ]);

    if (memoryEnabled) {
      setMemory((previous) => [
        ...previous,
        {
          id: Date.now(),
          text: question,
          time: new Date().toLocaleString(),
        },
      ]);
    }

    setMessage("");
    setIsThinking(true);

    try {
      const response = await fetch(
        "/api/chat",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            message: question,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(
          "Backend unavailable"
        );
      }

      const data =
        await response.json();

      const answer =
        data.answer ||
        data.message ||
        data.response ||
        getLocalAnswer(question);

      setMessages((previous) => [
        ...previous,
        {
          id: Date.now() + 1,
          sender: "ai",
          text: answer,
        },
      ]);

      speak(answer);
    } catch (error) {
      await new Promise((resolve) =>
        setTimeout(resolve, 700)
      );

      const answer =
        getLocalAnswer(question);

      setMessages((previous) => [
        ...previous,
        {
          id: Date.now() + 1,
          sender: "ai",
          text: answer,
        },
      ]);

      speak(answer);
    }

    setIsThinking(false);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      askAI();
    }
  }

  function toggleVoice() {
    if (voiceEnabled) {
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }

      setVoiceEnabled(false);
    } else {
      setVoiceEnabled(true);
    }
  }

  const filteredKnowledge =
    knowledgeItems.filter((item) =>
      item.title
        .toLowerCase()
        .includes(
          knowledgeSearch.toLowerCase()
        )
    );

  return (
    <div
      className={
        "assistant " +
        (theme === "light"
          ? "lightAssistant"
          : "")
      }
    >

      {/* SIDEBAR */}

      <aside className="sidebar">

        <div className="brand">

          <div className="brandIcon">
            <div className="brandSymbol">
              AI
            </div>
          </div>

          <div>
            <h1>MY AI ASSISTANT</h1>
            <p>Your Personal AI</p>
          </div>

        </div>


        <div className="sideNavigation">

          <button
            className={
              "navButton " +
              (activePage === "Chat"
                ? "active"
                : "")
            }
            onClick={() =>
              changePage("Chat")
            }
          >
            <span className="navIcon">
              []
            </span>
            Chat
          </button>


          <button
            className={
              "navButton " +
              (activePage === "Memory"
                ? "active"
                : "")
            }
            onClick={() =>
              changePage("Memory")
            }
          >
            <span className="navIcon">
              M
            </span>
            Memory
          </button>


          <button
            className={
              "navButton " +
              (activePage === "Knowledge"
                ? "active"
                : "")
            }
            onClick={() =>
              changePage("Knowledge")
            }
          >
            <span className="navIcon">
              K
            </span>
            Knowledge
          </button>


          <button
            className={
              "navButton " +
              (activePage === "Voice"
                ? "active"
                : "")
            }
            onClick={() =>
              changePage("Voice")
            }
          >
            <span className="navIcon">
              V
            </span>
            Voice
          </button>


          <button
            className={
              "navButton " +
              (activePage === "Settings"
                ? "active"
                : "")
            }
            onClick={() =>
              changePage("Settings")
            }
          >
            <span className="navIcon">
              S
            </span>
            Settings
          </button>

        </div>


        <div className="sideCard">

          <span className="cardTitle">
            AI STATUS
          </span>

          <div className="online">
            ONLINE
          </div>

          <div className="connected">
            <span></span>
            Connected
          </div>

        </div>


        <div className="sideCard">

          <span className="cardTitle">
            AI MOOD
          </span>

          <div className="mood">
            CURIOUS
          </div>

          <div className="moodWave">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

        </div>


        <button
          className="newConversation"
          onClick={newConversation}
        >
          + New Conversation
        </button>

      </aside>


      {/* MAIN CONTENT */}

      {activePage === "Chat" && (

        <main className="mainDisplay">

          <div className="panelTitle">
            AI DISPLAY
            <span className="titleLine"></span>
          </div>


          <div className="robotArea">

            <div className="orbit orbit1"></div>
            <div className="orbit orbit2"></div>
            <div className="orbit orbit3"></div>


            <div className="robot">

              <div className="robotSide leftSide"></div>
              <div className="robotSide rightSide"></div>

              <div className="robotHead">

                <div className="robotScreen">

                  <div className="robotEyes">

                    <div className="robotEye"></div>
                    <div className="robotEye"></div>

                  </div>

                  <div className="robotSmile"></div>

                </div>

              </div>


              <div className="robotNeck"></div>

              <div className="robotBody">

                <div className="bodyLight"></div>
                <div className="bodyLight"></div>
                <div className="bodyLight"></div>

              </div>

            </div>


            <div className="thinkingLabel">
              {isThinking
                ? "AI IS THINKING..."
                : "AI IS READY"}
            </div>


            <div className="waveform">

              {Array.from(
                { length: 32 },
                (_, index) => (
                  <span
                    key={index}
                    style={{
                      height:
                        `${8 + ((index * 17) % 42)}px`,
                    }}
                  />
                )
              )}

            </div>

          </div>


          <div className="processingCard">

            <div className="processingHeader">

              <span>
                PROCESSING
              </span>

              <strong>
                {processing}%
              </strong>

            </div>

            <div className="processingBar">

              <div
                className="processingProgress"
                style={{
                  width:
                    `${processing}%`,
                }}
              />

            </div>

          </div>


          <div className="systemCards">

            <div className="systemCard">

              <div className="core">
                <div></div>
              </div>

              <div>
                <small>
                  NEURAL
                </small>

                <strong>
                  NETWORK
                </strong>
              </div>

            </div>


            <div className="systemCard core">
              <div></div>
            </div>


            <div className="systemCard">

              <div className="core">
                <div></div>
              </div>

              <div>
                <small>
                  ANALYSING
                </small>

                <strong>
                  INFORMATION
                </strong>
              </div>

            </div>

          </div>

        </main>

      )}


      {/* MEMORY */}

      {activePage === "Memory" && (

        <main className="featurePage">

          <div className="featureHeader">
            <h2>MEMORY</h2>

            <button
              onClick={clearMemory}
            >
              Clear Memory
            </button>
          </div>


          <div className="featureIntro">
            <div className="featureIcon">
              MEMORY
            </div>

            <h1>
              Conversation Memory
            </h1>

            <p>
              Questions saved by your AI Assistant
              appear here.
            </p>
          </div>


          <div className="memoryList">

            {memory.length === 0 ? (

              <div className="emptyState">
                <strong>
                  No memories yet
                </strong>

                <p>
                  Ask the AI a question and it
                  can be saved here.
                </p>
              </div>

            ) : (

              memory.map((item) => (

                <div
                  className="memoryItem"
                  key={item.id}
                >
                  <strong>
                    {item.text}
                  </strong>

                  <small>
                    {item.time}
                  </small>
                </div>

              ))

            )}

          </div>

        </main>

      )}


      {/* KNOWLEDGE */}

      {activePage === "Knowledge" && (

        <main className="featurePage">

          <div className="featureHeader">

            <h2>
              KNOWLEDGE
            </h2>

          </div>


          <div className="featureIntro">

            <div className="featureIcon">
              KNOW
            </div>

            <h1>
              Knowledge Base
            </h1>

            <p>
              Search the assistant's built-in
              knowledge topics.
            </p>

          </div>


          <input
            className="knowledgeSearch"
            value={knowledgeSearch}
            onChange={(event) =>
              setKnowledgeSearch(
                event.target.value
              )
            }
            placeholder="Search knowledge..."
          />


          <div className="knowledgeGrid">

            {filteredKnowledge.map(
              (item) => (

                <button
                  className="knowledgeCard"
                  key={item.title}
                  onClick={() =>
                    setMessage(
                      `Tell me more about ${item.title}`
                    )
                  }
                >

                  <strong>
                    {item.title}
                  </strong>

                  <p>
                    {item.text}
                  </p>

                  <span>
                    Ask AI
                  </span>

                </button>

              )
            )}

          </div>

        </main>

      )}


      {/* VOICE */}

      {activePage === "Voice" && (

        <main className="featurePage">

          <div className="featureHeader">

            <h2>
              VOICE
            </h2>

          </div>


          <div className="voicePanel">

            <div className="voiceCircle">
              VOICE
            </div>

            <h1>
              AI Voice
            </h1>

            <p>
              Your browser can read AI responses
              aloud using its built-in speech system.
            </p>


            <button
              className={
                "largeAction " +
                (voiceEnabled
                  ? "enabled"
                  : "")
              }
              onClick={toggleVoice}
            >
              {voiceEnabled
                ? "VOICE ON"
                : "VOICE OFF"}
            </button>


            {voiceEnabled && (

              <div className="voiceStatus">
                Voice responses are enabled.
              </div>

            )}

          </div>

        </main>

      )}


      {/* SETTINGS */}

      {activePage === "Settings" && (

        <main className="featurePage">

          <div className="featureHeader">

            <h2>
              SETTINGS
            </h2>

          </div>


          <div className="settingsList">

            <div className="settingItem">

              <div>
                <strong>
                  Automatic Memory
                </strong>

                <p>
                  Save questions you ask the AI.
                </p>
              </div>

              <button
                className={
                  "switch " +
                  (memoryEnabled
                    ? "on"
                    : "")
                }
                onClick={() =>
                  setMemoryEnabled(
                    !memoryEnabled
                  )
                }
              >
                <span></span>
              </button>

            </div>


            <div className="settingItem">

              <div>
                <strong>
                  Voice Responses
                </strong>

                <p>
                  Read AI responses aloud.
                </p>
              </div>

              <button
                className={
                  "switch " +
                  (voiceEnabled
                    ? "on"
                    : "")
                }
                onClick={toggleVoice}
              >
                <span></span>
              </button>

            </div>


            <div className="settingItem">

              <div>
                <strong>
                  Auto Scroll
                </strong>

                <p>
                  Automatically scroll to new messages.
                </p>
              </div>

              <button
                className={
                  "switch " +
                  (autoScroll
                    ? "on"
                    : "")
                }
                onClick={() =>
                  setAutoScroll(
                    !autoScroll
                  )
                }
              >
                <span></span>
              </button>

            </div>


            <div className="settingItem">

              <div>
                <strong>
                  Notifications
                </strong>

                <p>
                  Enable application notifications.
                </p>
              </div>

              <button
                className={
                  "switch " +
                  (notifications
                    ? "on"
                    : "")
                }
                onClick={() =>
                  setNotifications(
                    !notifications
                  )
                }
              >
                <span></span>
              </button>

            </div>


            <div className="settingItem">

              <div>
                <strong>
                  Appearance
                </strong>

                <p>
                  Change the application theme.
                </p>
              </div>

              <button
                className="themeButton"
                onClick={() =>
                  setTheme(
                    theme === "dark"
                      ? "light"
                      : "dark"
                  )
                }
              >
                {theme === "dark"
                  ? "DARK"
                  : "LIGHT"}
              </button>

            </div>

          </div>

        </main>

      )}


      {/* CHAT PANEL */}

      {activePage === "Chat" && (

        <section className="chatPanel">

          <header className="chatHeader">

            <h2>
              CHAT
            </h2>

            <button
              onClick={clearChat}
            >
              Clear Chat
            </button>

          </header>


          <div
            className="messages"
            ref={messagesRef}
          >

            {messages.map((item) => (

              <div
                key={item.id}
                className={
                  "messageRow " +
                  item.sender
                }
              >

                {item.sender === "ai" && (

                  <div className="smallRobot">
                    AI
                  </div>

                )}


                <div className="messageContent">

                  <div className="messageInfo">

                    {item.sender === "ai"
                      ? "AI ASSISTANT"
                      : "YOU"}

                  </div>


                  <div className="messageBubble">
                    {item.text}
                  </div>

                </div>


                {item.sender === "user" && (

                  <div className="userAvatar">
                    YOU
                  </div>

                )}

              </div>

            ))}


            {isThinking && (

              <div className="messageRow ai">

                <div className="smallRobot">
                  AI
                </div>

                <div className="messageContent">

                  <div className="messageInfo">
                    AI ASSISTANT IS THINKING...
                  </div>

                  <div className="typing">

                    <span></span>
                    <span></span>
                    <span></span>

                  </div>

                </div>

              </div>

            )}

          </div>


          <div className="chatInput">

            <button
              className="micButton"
              onClick={() =>
                changePage("Voice")
              }
            >
              MIC
            </button>


            <input
              value={message}
              onChange={(event) =>
                setMessage(
                  event.target.value
                )
              }
              onKeyDown={handleKeyDown}
              placeholder="Ask me anything..."
              disabled={isThinking}
            />


            <button
              className="sendButton"
              onClick={askAI}
              disabled={isThinking}
            >
              SEND
            </button>

          </div>

        </section>

      )}


      {/* BOTTOM NAVIGATION */}

      <nav className="bottomNavigation">

        <button
          className={
            "bottomButton " +
            (activePage === "Chat"
              ? "active"
              : "")
          }
          onClick={() =>
            changePage("Chat")
          }
        >
          <span>CHAT</span>
          <span>Chat</span>
        </button>


        <button
          className={
            "bottomButton " +
            (activePage === "Memory"
              ? "active"
              : "")
          }
          onClick={() =>
            changePage("Memory")
          }
        >
          <span>MEM</span>
          <span>Memory</span>
        </button>


        <button
          className="aiBottomButton"
          onClick={() =>
            changePage("Chat")
          }
        >
          AI
        </button>


        <button
          className={
            "bottomButton " +
            (activePage === "Knowledge"
              ? "active"
              : "")
          }
          onClick={() =>
            changePage("Knowledge")
          }
        >
          <span>BOOK</span>
          <span>Knowledge</span>
        </button>


        <button
          className={
            "bottomButton " +
            (activePage === "Settings"
              ? "active"
              : "")
          }
          onClick={() =>
            changePage("Settings")
          }
        >
          <span>SET</span>
          <span>Settings</span>
        </button>

      </nav>

    </div>
  );
}