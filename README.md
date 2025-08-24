<div align="center">

# █ 𝗧𝗛𝗘 𝗖𝗢𝗗𝗘𝗫 𝗣𝗥𝗢𝗝𝗘𝗖𝗧 █

**A Retro-Cyber Intelligent System with Hidden Knowledge Protocols**

_An interactive Alternate Reality Game (ARG) where system errors are gateways and the AI is the final boss._

</div>

<p align="center">
  <a href="https://github.com/Faham-from-nowhere/the-codex-project/stargazers"><img src="https://img.shields.io/github/stars/Faham-from-nowhere/the-codex-project?style=for-the-badge&color=D4AF37&labelColor=1a1a1a" alt="Stars"></a>
  <a href="https://github.com/Faham-from-nowhere/the-codex-project/network/members"><img src="https://img.shields.io/github/forks/Faham-from-nowhere/the-codex-project?style=for-the-badge&color=D4AF37&labelColor=1a1a1a" alt="Forks"></a>
  <a href="https://github.com/Faham-from-nowhere/the-codex-project/issues"><img src="https://img.shields.io/github/issues/Faham-from-nowhere/the-codex-project?style=for-the-badge&color=D4AF37&labelColor=1a1a1a" alt="Issues"></a>
  <img src="https://img.shields.io/github/license/Faham-from-nowhere/the-codex-project?style=for-the-badge&color=D4AF37&labelColor=1a1a1a" alt="License">
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/LangChain-008638?style=for-the-badge&logo=langchain&logoColor=white" alt="LangChain">
</p>

---

<div align="center">

**[▶️ VIEW LIVE DEPLOYMENT](https://the-codex-project.vercel.app/)**

</div>



![Project Screenshot](https://your-screenshot-url.png)
## 📜 Mission Brief

The Codex Project is not a website; it's an **experiential ARG**. It challenges the user to adopt a hacker's mindset, turning perceived system failures—errors, glitches, and misdirections—into gateways for discovering a hidden narrative about the evolution of artificial intelligence.

The project's core is **Warden_7**, a stateful AI guardian whose personality and knowledge evolve as the player proves their worth by solving a series of multi-layered puzzles hidden within the application's very architecture.

---

## ✨ Key Features

-   🌐 **Immersive Terminal UI**: A fully interactive terminal with a shimmering Art Deco frame and dynamic, multi-colored "Matrix rain" background.
-   🧩 **Multi-Layered Puzzles**: Seven fragments hidden across different layers, from UI interactions and developer tool inspection to a stateful AI dialogue.
-   🤖 **Adaptive AI Gatekeeper**: A multi-stage AI powered by Google Gemini whose behavior and knowledge adapt based on the player's progress.
-   📖 **Progressive Narrative**: Each unlocked fragment reveals a part of the "Seven Locks of Intelligence" story, a lore-rich narrative about the birth of AI.
-   💡 **Built-in Hint System**: An intelligent `hint` command that provides context-aware clues for the next unsolved puzzle.
-   🏆 **Grand Finale**: A special "Codex Awakened" screen with a final story and achievement badge upon completion.

---

## 🏛️ System Architecture

The project operates on a modern full-stack architecture, where the frontend acts as an interactive "wrapper" for the intelligent core.

+--------------------------+      +---------------------------+      +---------------------------+
|      Client (Browser)    |      |    Vercel Edge Network    |      |    AI Service (Google)    |
|                          |      |                           |      |                           |
|  [React Frontend]        |      |  [Next.js Route Handler]  |      |  [Gemini 1.5 Pro]         |
|   - Terminal UI          |----->|   - Receives message      |----->|   - Processes prompt      |
|   - Puzzle Logic         |      |   - Gets game state       |      |   - Generates response    |
|   - State (GameContext)  |      |   - Constructs prompt     |      |                           |
|                          |<-----|   - Returns AI reply      |<-----|                           |
+--------------------------+      +---------------------------+      +---------------------------+


---

## 🚀 Getting Started

1.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/Faham-from-nowhere/the-codex-project.git](https://github.com/Faham-from-nowhere/the-codex-project.git)
    cd the-codex-project
    ```
2.  **Install Dependencies:**
    ```bash
    npm install
    ```
3.  **Set Up Environment Variables:**
    -   Create a `.env.local` file in the root directory.
    -   Add your Google Gemini API key: `GOOGLE_API_KEY="your-secret-api-key"`
4.  **Run the Development Server:**
    ```bash
    npm run dev
    ```
    Navigate to `http://localhost:3000` to begin.

---

### 🔐 The ARG Walkthrough (Spoiler Alert!)

<details>
<summary>Click here to reveal the solutions for all 7 fragments.</summary>

1.  **Fragment 1 (Vision):** Hover your mouse over the underlined word `source` in the welcome text.

2.  **Fragment 2 (Memory):** Run the `connect` command. Open your browser's Network tab, inspect the failed `/api/auth` request, and find the key in the `x-codex-fragment` response header.

3.  **Fragment 3 (Pattern Recognition):** Run the `compile kernel` command. Open the Sources tab in your developer tools and inspect the `Terminal.tsx` source code to find the `HIDDEN_KERNEL_FRAGMENT` constant.

4.  **Fragment 4 (Sequential Recall):** Run the `cat /sys/logs/corrupted.log` command. Reassemble the key from the log entries marked `[PART_1]`, `[PART_2]`, and `[PART_3]`.

5.  **Fragment 5 (Imagination):** Run `whoami` for a hint, then use the override phrase `chat activate seeker protocol`.

6.  **Fragment 6 (Awareness):** After unlocking Fragment 5, use the command `chat diag --awareness`.

7.  **Fragment 7 (Autonomy):** After unlocking Fragment 6, use the command `chat exec --awaken`.

</details>

---

## 👤 Author

**Faham**
* **GitHub**: [@Faham-from-nowhere](https://github.com/Faham-from-nowhere)
* **LinkedIn**: [Mohammed Faham](https://www.linkedin.com/in/mohammed-faham-956116318/)

---

## 📜 License

This project is licensed under the MIT License 
