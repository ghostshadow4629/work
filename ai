* {
  box-sizing: border-box;
}

html,
body,
#root {
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100%;
}

body {
  font-family:
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Arial,
    sans-serif;

  color: #eaf7ff;

  background:
    radial-gradient(
      circle at 50% 40%,
      rgba(0, 100, 255, 0.12),
      transparent 45%
    ),
    #020711;

  overflow: auto;

  -webkit-overflow-scrolling: touch;
}

button,
input {
  font-family: inherit;
}


/* =========================================================
   MAIN
========================================================= */

.assistant {
  position: relative;

  width: 100%;

  min-height: 100vh;

  padding: 14px 14px 90px;

  display: grid;

  grid-template-columns:
    230px
    minmax(420px, 1fr)
    minmax(420px, 1fr);

  gap: 14px;

  overflow-x: auto;
  overflow-y: visible;
}


/* =========================================================
   SIDEBAR
========================================================= */

.sidebar {
  width: 230px;
  min-width: 230px;

  display: flex;
  flex-direction: column;

  gap: 14px;
}

.brand {
  height: 80px;

  display: flex;
  align-items: center;

  gap: 12px;
}

.brandIcon {
  width: 48px;
  height: 48px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 2px solid #00aaff;

  border-radius: 14px;

  background:
    rgba(0, 130, 255, 0.08);

  box-shadow:
    0 0 18px rgba(0, 150, 255, 0.4);
}

.brandSymbol {
  color: #43d9ff;

  font-size: 17px;
  font-weight: bold;

  text-shadow:
    0 0 12px #00cfff;
}

.brand h1 {
  margin: 0;

  font-size: 17px;
  font-weight: 600;

  white-space: nowrap;
}

.brand p {
  margin: 5px 0 0;

  color: #7387a9;

  font-size: 11px;
}


/* =========================================================
   SIDEBAR NAV
========================================================= */

.sideNavigation {
  overflow: hidden;

  border:
    1px solid rgba(0, 140, 255, 0.3);

  border-radius: 15px;

  background:
    linear-gradient(
      145deg,
      rgba(7, 24, 48, 0.92),
      rgba(2, 11, 25, 0.92)
    );
}

.navButton {
  position: relative;

  width: 100%;
  height: 68px;

  display: flex;
  align-items: center;

  gap: 15px;

  padding: 0 18px;

  border: 0;

  border-bottom:
    1px solid rgba(90, 140, 200, 0.1);

  background: transparent;

  color: #91a5c7;

  font-size: 15px;

  text-align: left;

  cursor: pointer;
}

.navButton:last-child {
  border-bottom: 0;
}

.navButton:hover {
  color: white;

  background:
    rgba(0, 130, 255, 0.08);
}

.navButton.active {
  color: white;

  background:
    linear-gradient(
      90deg,
      rgba(0, 130, 255, 0.3),
      rgba(0, 110, 255, 0.06)
    );

  box-shadow:
    inset 3px 0 0 #00baff;
}

.navIcon {
  width: 28px;

  color: #55cfff;

  font-size: 12px;
  font-weight: bold;

  text-align: center;
}


/* =========================================================
   SIDEBAR CARDS
========================================================= */

.sideCard {
  padding: 15px;

  border:
    1px solid rgba(0, 135, 255, 0.28);

  border-radius: 14px;

  background:
    linear-gradient(
      145deg,
      rgba(5, 22, 44, 0.85),
      rgba(2, 11, 24, 0.85)
    );
}

.cardTitle {
  display: block;

  margin-bottom: 9px;

  color: #7388aa;

  font-size: 11px;
}

.online {
  color: #18ff99;

  font-size: 19px;

  font-weight: 600;

  text-shadow:
    0 0 12px rgba(0, 255, 150, 0.4);
}

.connected {
  display: flex;

  align-items: center;

  gap: 7px;

  margin-top: 6px;

  color: #8498b7;

  font-size: 11px;
}

.connected span {
  width: 7px;
  height: 7px;

  border-radius: 50%;

  background: #19ff9b;

  box-shadow:
    0 0 10px #19ff9b;
}

.mood {
  color: #d35cff;

  font-size: 18px;

  text-shadow:
    0 0 12px rgba(210, 70, 255, 0.45);
}


/* =========================================================
   WAVE
========================================================= */

.moodWave {
  height: 28px;

  display: flex;

  align-items: center;

  gap: 4px;

  overflow: hidden;
}

.moodWave span {
  width: 26px;
  height: 2px;

  background: #c151ff;

  box-shadow:
    0 0 8px #c151ff;
}


/* =========================================================
   NEW CHAT
========================================================= */

.newConversation {
  height: 58px;

  border:
    1px solid rgba(0, 145, 255, 0.4);

  border-radius: 13px;

  background:
    rgba(0, 100, 255, 0.07);

  color: #b7d1f4;

  font-size: 14px;

  cursor: pointer;
}

.newConversation:hover {
  background:
    rgba(0, 130, 255, 0.14);
}


/* =========================================================
   AI DISPLAY
========================================================= */

.mainDisplay {
  position: relative;

  min-width: 420px;

  min-height: calc(100vh - 105px);

  padding: 20px;

  border:
    1px solid rgba(0, 160, 255, 0.55);

  border-radius: 20px;

  background:
    radial-gradient(
      circle at 50% 35%,
      rgba(0, 115, 255, 0.12),
      transparent 50%
    ),
    linear-gradient(
      145deg,
      rgba(5, 19, 39, 0.96),
      rgba(1, 9, 22, 0.96)
    );

  box-shadow:
    0 0 30px rgba(0, 130, 255, 0.1);

  overflow-y: auto;
  overflow-x: hidden;

  -webkit-overflow-scrolling: touch;
}

.panelTitle {
  height: 38px;

  display: flex;
  align-items: center;

  gap: 12px;

  color: #52d8ff;

  font-size: 16px;
}

.titleLine {
  flex: 1;

  height: 1px;

  background:
    linear-gradient(
      90deg,
      rgba(0, 180, 255, 0.5),
      transparent
    );
}


/* =========================================================
   ROBOT
========================================================= */

.robotArea {
  position: relative;

  height: 500px;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
}

.robot {
  position: relative;

  z-index: 5;

  animation:
    robotFloat 4s ease-in-out infinite;
}

@keyframes robotFloat {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-7px);
  }
}

.robotHead {
  position: relative;

  width: 270px;
  height: 240px;

  border-radius: 33%;

  background:
    linear-gradient(
      145deg,
      #152541,
      #030a18 55%,
      #0d1b32
    );

  border:
    2px solid #009eff;

  box-shadow:
    0 0 25px rgba(0, 160, 255, 0.55),
    inset 0 0 35px rgba(0, 120, 255, 0.15);
}

.robotScreen {
  position: absolute;

  left: 30px;
  right: 30px;

  top: 28px;
  bottom: 26px;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  border-radius: 28%;

  background:
    radial-gradient(
      circle,
      rgba(0, 130, 255, 0.16),
      rgba(0, 0, 0, 0.4)
    );

  overflow: hidden;
}

.robotScreen::before {
  content: "";

  position: absolute;

  inset: 0;

  background:
    radial-gradient(
      circle,
      rgba(0, 190, 255, 0.18) 1px,
      transparent 1.5px
    );

  background-size: 7px 7px;
}

.robotEyes {
  position: relative;

  z-index: 2;

  display: flex;

  gap: 50px;
}

.robotEye {
  width: 38px;
  height: 58px;

  border-radius: 50%;

  background: #43ddff;

  box-shadow:
    0 0 15px #00caff,
    0 0 35px rgba(0, 190, 255, 0.75);

  animation:
    eyeGlow 2s infinite;
}

@keyframes eyeGlow {
  50% {
    box-shadow:
      0 0 20px #00d9ff,
      0 0 50px rgba(0, 190, 255, 0.9);
  }
}

.robotSmile {
  position: relative;

  z-index: 2;

  width: 58px;
  height: 25px;

  margin-top: 20px;

  border-bottom:
    6px solid #48ddff;

  border-radius: 50%;

  filter:
    drop-shadow(0 0 8px #00cfff);
}


/* =========================================================
   ROBOT SIDES
========================================================= */

.robotSide {
  position: absolute;

  top: 65px;

  width: 30px;
  height: 105px;

  border:
    2px solid #009eff;

  background:
    rgba(0, 130, 255, 0.08);

  box-shadow:
    0 0 15px rgba(0, 150, 255, 0.45);
}

.leftSide {
  left: -24px;

  border-radius:
    14px 0 0 14px;
}

.rightSide {
  right: -24px;

  border-radius:
    0 14px 14px 0;
}

.robotNeck {
  width: 70px;
  height: 28px;

  margin: -3px auto 0;

  border:
    1px solid #008bdc;

  background: #071428;
}

.robotBody {
  width: 230px;
  height: 70px;

  margin: auto;

  border:
    1px solid #008bdc;

  border-radius:
    22px 22px 8px 8px;

  background: #071427;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 12px;
}

.bodyLight {
  width: 35px;
  height: 5px;

  background: #00cfff;

  box-shadow:
    0 0 12px #00cfff;
}


/* =========================================================
   ORBITS
========================================================= */

.orbit {
  position: absolute;

  left: 50%;
  top: 45%;

  transform:
    translate(-50%, -50%);

  border-radius: 50%;

  pointer-events: none;
}

.orbit1 {
  width: 410px;
  height: 410px;

  border:
    1px solid rgba(0, 160, 255, 0.28);

  animation:
    orbitRotate 14s linear infinite;
}

.orbit2 {
  width: 330px;
  height: 330px;

  border:
    1px dashed rgba(0, 160, 255, 0.28);

  animation:
    orbitRotate 9s linear infinite reverse;
}

.orbit3 {
  width: 470px;
  height: 470px;

  border:
    1px solid rgba(0, 110, 255, 0.1);

  animation:
    orbitRotate 22s linear infinite;
}

@keyframes orbitRotate {
  from {
    transform:
      translate(-50%, -50%)
      rotate(0deg);
  }

  to {
    transform:
      translate(-50%, -50%)
      rotate(360deg);
  }
}


/* =========================================================
   THINKING
========================================================= */

.thinkingLabel {
  position: relative;

  z-index: 8;

  margin-top: 18px;

  padding: 10px 38px;

  border:
    1px solid #008cdb;

  border-radius: 20px;

  background:
    rgba(0, 100, 255, 0.1);

  color: #50d8ff;

  font-size: 13px;

  box-shadow:
    0 0 20px rgba(0, 140, 255, 0.15);
}


/* =========================================================
   WAVEFORM
========================================================= */

.waveform {
  width: 82%;
  height: 70px;

  margin-top: 10px;

  display: flex;

  align-items: center;
  justify-content: center;

  gap: 4px;

  border:
    1px solid rgba(0, 130, 255, 0.18);

  border-radius: 12px;
}

.waveform span {
  width: 4px;

  min-height: 5px;

  background: #00c5ff;

  box-shadow:
    0 0 8px #00bfff;

  animation:
    wave 1s infinite ease-in-out;
}

.waveform span:nth-child(2n) {
  animation-delay: 0.15s;
}

.waveform span:nth-child(3n) {
  animation-delay: 0.3s;
}

@keyframes wave {
  0%,
  100% {
    transform: scaleY(0.4);
  }

  50% {
    transform: scaleY(1.7);
  }
}


/* =========================================================
   PROCESSING
========================================================= */

.processingCard {
  margin-top: 12px;

  padding: 14px 17px;

  border:
    1px solid rgba(0, 130, 255, 0.25);

  border-radius: 14px;

  background:
    rgba(3, 15, 31, 0.8);
}

.processingHeader {
  display: flex;

  justify-content: space-between;

  margin-bottom: 9px;

  color: #45d4ff;

  font-size: 14px;
}

.processingHeader strong {
  font-size: 16px;
}

.processingBar {
  height: 7px;

  overflow: hidden;

  border-radius: 10px;

  background: #06162b;
}

.processingProgress {
  height: 100%;

  border-radius: 10px;

  background:
    linear-gradient(
      90deg,
      #00aaff,
      #25dfff
    );

  box-shadow:
    0 0 10px #00bfff;

  transition:
    width 0.25s ease;
}


/* =========================================================
   SYSTEM CARDS
========================================================= */

.systemCards {
  display: grid;

  grid-template-columns:
    1fr
    80px
    1fr;

  gap: 10px;

  margin-top: 12px;
}

.systemCard {
  min-height: 75px;

  display: flex;

  align-items: center;

  gap: 10px;

  padding: 10px;

  border:
    1px solid rgba(0, 125, 255, 0.25);

  border-radius: 14px;

  background:
    rgba(3, 15, 31, 0.8);
}

.systemCard small {
  color: #7c91b4;

  font-size: 9px;
}

.systemCard strong {
  display: block;

  margin-top: 3px;

  color: #a8c9ed;

  font-size: 10px;
}

.core {
  display: flex;

  align-items: center;
  justify-content: center;
}

.core div {
  width: 50px;
  height: 50px;

  border-radius: 50%;

  border:
    1px solid #00baff;

  box-shadow:
    0 0 20px rgba(0, 180, 255, 0.5);

  animation:
    corePulse 2s infinite;
}

@keyframes corePulse {
  50% {
    transform: scale(0.88);
  }
}


/* =========================================================
   CHAT
========================================================= */

.chatPanel {
  position: relative;

  min-width: 420px;

  min-height: calc(100vh - 105px);

  display: flex;
  flex-direction: column;

  border:
    1px solid rgba(0, 130, 255, 0.3);

  border-radius: 20px;

  background:
    linear-gradient(
      145deg,
      rgba(3, 14, 29, 0.97),
      rgba(1, 8, 18, 0.97)
    );

  overflow: hidden;
}


/* =========================================================
   CHAT HEADER
========================================================= */

.chatHeader {
  height: 62px;

  flex-shrink: 0;

  display: flex;

  align-items: center;
  justify-content: space-between;

  padding: 0 18px;

  border-bottom:
    1px solid rgba(70, 130, 200, 0.12);
}

.chatHeader h2 {
  margin: 0;

  color: #48d8ff;

  font-size: 17px;
}

.chatHeader button {
  padding: 8px 12px;

  border:
    1px solid rgba(70, 130, 210, 0.3);

  border-radius: 8px;

  background:
    rgba(20, 40, 70, 0.35);

  color: #9eb2d0;

  cursor: pointer;
}


/* =========================================================
   MESSAGES
========================================================= */

.messages {
  flex: 1;

  min-height: 0;

  overflow-x: auto;
  overflow-y: auto;

  padding: 18px;

  scroll-behavior: smooth;

  -webkit-overflow-scrolling: touch;
}

.messages::-webkit-scrollbar {
  width: 7px;
  height: 7px;
}

.messages::-webkit-scrollbar-thumb {
  background:
    rgba(0, 140, 255, 0.35);

  border-radius: 10px;
}


/* =========================================================
   MESSAGE
========================================================= */

.messageRow {
  display: flex;

  gap: 10px;

  width: 100%;

  margin-bottom: 22px;
}

.messageRow.user {
  justify-content: flex-end;
}

.messageRow.ai {
  justify-content: flex-start;
}

.smallRobot,
.userAvatar {
  width: 38px;
  height: 38px;

  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  font-size: 10px;
  font-weight: bold;
}

.smallRobot {
  border:
    1px solid #00bfff;

  color: #40ddff;

  background:
    rgba(0, 110, 255, 0.08);

  box-shadow:
    0 0 15px rgba(0, 160, 255, 0.3);
}

.userAvatar {
  border:
    1px solid #697d9f;

  color: #b4c3dc;

  background:
    #172033;
}

.messageContent {
  max-width: calc(100% - 50px);

  min-width: 0;
}

.messageInfo {
  margin-bottom: 6px;

  color: #7589aa;

  font-size: 10px;
}

.messageRow.user .messageInfo {
  text-align: right;
}

.messageBubble {
  max-width: 100%;

  padding: 13px 16px;

  border:
    1px solid rgba(70, 130, 210, 0.25);

  border-radius: 14px;

  background:
    linear-gradient(
      145deg,
      rgba(8, 27, 52, 0.95),
      rgba(2, 12, 26, 0.95)
    );

  color: #e0edff;

  font-size: 13px;

  line-height: 1.65;

  white-space: pre-wrap;

  overflow-wrap: anywhere;

  word-break: break-word;
}

.messageRow.user .messageBubble {
  background:
    linear-gradient(
      135deg,
      #0758d8,
      #1747af
    );

  border-color:
    #216cff;
}


/* =========================================================
   TYPING
========================================================= */

.typing {
  display: flex;

  align-items: center;

  gap: 7px;

  width: fit-content;

  padding: 12px 15px;

  border:
    1px solid rgba(0, 130, 255, 0.25);

  border-radius: 13px;

  background:
    rgba(4, 18, 38, 0.85);
}

.typing span {
  width: 7px;
  height: 7px;

  border-radius: 50%;

  background: #00bfff;

  box-shadow:
    0 0 8px #00bfff;

  animation:
    typingDot 1s infinite;
}

.typing span:nth-child(2) {
  animation-delay: 0.15s;
}

.typing span:nth-child(3) {
  animation-delay: 0.3s;
}

@keyframes typingDot {
  50% {
    transform: translateY(-5px);

    opacity: 0.4;
  }
}


/* =========================================================
   CHAT INPUT
========================================================= */

.chatInput {
  height: 66px;

  flex-shrink: 0;

  display: flex;

  gap: 8px;

  padding: 8px 10px;

  border-top:
    1px solid rgba(70, 130, 200, 0.12);

  background:
    rgba(2, 9, 20, 0.98);
}

.chatInput input {
  flex: 1;

  min-width: 0;

  height: 50px;

  padding: 0 14px;

  border:
    1px solid rgba(70, 130, 210, 0.25);

  border-radius: 11px;

  outline: none;

  background:
    #071326;

  color: white;

  font-size: 13px;
}

.chatInput input:focus {
  border-color:
    #009dff;

  box-shadow:
    0 0 15px rgba(0, 140, 255, 0.12);
}

.chatInput input::placeholder {
  color: #637591;
}

.micButton,
.sendButton {
  width: 50px;
  height: 50px;

  flex-shrink: 0;

  border-radius: 11px;

  cursor: pointer;
}

.micButton {
  border:
    1px solid rgba(80, 140, 220, 0.3);

  background:
    #081426;

  color: #8ca2c4;

  font-size: 9px;
}

.sendButton {
  border: 0;

  background:
    linear-gradient(
      135deg,
      #00aaff,
      #145aff
    );

  color: white;

  font-size: 9px;

  box-shadow:
    0 0 18px rgba(0, 140, 255, 0.3);
}

.sendButton:disabled {
  opacity: 0.5;
}


/* =========================================================
   BOTTOM NAV
========================================================= */

.bottomNavigation {
  position: fixed;

  z-index: 999;

  left: 10px;
  right: 10px;
  bottom: 8px;

  height: 62px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  border:
    1px solid rgba(0, 135, 255, 0.3);

  border-radius: 15px;

  background:
    rgba(2, 10, 22, 0.96);

  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);

  box-shadow:
    0 -5px 30px rgba(0, 70, 160, 0.12);
}

.bottomButton {
  flex: 1;

  min-width: 80px;

  height: 52px;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  gap: 3px;

  border: 0;

  background: transparent;

  color: #7f91af;

  cursor: pointer;
}

.bottomButton.active {
  color: #48d9ff;

  text-shadow:
    0 0 12px rgba(0, 190, 255, 0.5);
}

.bottomButton span:first-child {
  font-size: 9px;
  font-weight: bold;
}

.bottomButton span:last-child {
  font-size: 10px;
}

.aiBottomButton {
  width: 62px;
  height: 62px;

  flex-shrink: 0;

  margin-top: -22px;

  border:
    1px solid #00bfff;

  border-radius: 50%;

  background:
    radial-gradient(
      circle,
      #0c2d52,
      #031021
    );

  color: #45dfff;

  font-size: 18px;

  box-shadow:
    0 0 20px rgba(0, 180, 255, 0.45);

  cursor: pointer;
}


/* =========================================================
   IPAD
========================================================= */

@media (max-width: 1100px) {

  .assistant {
    min-width: 1170px;

    grid-template-columns:
      210px
      470px
      470px;
  }

  .sidebar {
    width: 210px;
    min-width: 210px;
  }

  .mainDisplay {
    min-width: 470px;
  }

  .chatPanel {
    min-width: 470px;
  }
}


/* =========================================================
   SCROLLBAR
========================================================= */

::-webkit-scrollbar {
  width: 7px;
  height: 7px;
}

::-webkit-scrollbar-track {
  background:
    rgba(0, 0, 0, 0.15);
}

::-webkit-scrollbar-thumb {
  background:
    rgba(0, 140, 255, 0.4);

  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background:
    rgba(0, 180, 255, 0.7);
}


/* =========================================================
   SELECTION
========================================================= */

::selection {
  background:
    rgba(0, 150, 255, 0.35);

  color: white;
}