# █ The Codex Project █

> An interactive retro-cyber ARG featuring a multi-layered puzzle system and a deceptive, stateful AI.

**[▶️ View the Live Demo](https://the-codex-project.vercel.app/)** ---

### A Retro-Cyber Intelligent System
_Built on August 24, 2025, in Sri City, India._

The Codex Project is a hybrid full-stack and AI-powered system designed to blend a sophisticated Art Deco aesthetic with retro-cyber terminal interactions. More than just a themed web application, The Codex is an experiential Alternate Reality Game (ARG) where system "errors," glitches, and misdirections are deliberate gateways to hidden knowledge. The project's core is an intelligent AI, "Warden_7," who acts as a gatekeeper to the final secrets, challenging the user to think like a hacker to unlock a progressively unfolding narrative.

### 🎥 Visual Demo

**[Watch the Full Video Walkthrough on YouTube](https://youtu.be/your-video-id)**
---

### ✨ Features

* **Immersive Terminal UI**: A fully interactive terminal with an Art Deco frame and dynamic "Matrix rain" background.
* **Multi-Layered Puzzles**: Seven hidden fragments scattered across different layers of the application, including:
    * Interactive UI elements (hover effects).
    * Browser developer tools (Network inspection, Source Maps).
    * CLI Easter eggs and a corrupted log file to analyze.
* **Advanced AI Gatekeeper**: A multi-stage, stateful AI ("Warden_7") powered by Google Gemini and LangChain, whose personality adapts to player progress.
* **Progressive Narrative**: Each unlocked fragment reveals a part of the "Seven Locks of Intelligence" story.
* **Built-in Hint System**: A progressive `hint` command to guide players who get stuck.
* **Grand Finale**: A special "Codex Awakened" screen with a final story and achievement badge.

---

### 💻 Technology Stack

| Category     | Technology                                                                                                                              |
| :----------- | :-------------------------------------------------------------------------------------------------------------------------------------- |
| **Frontend** | [Next.js](https://nextjs.org/), [React](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/), [Tailwind CSS](https://tailwindcss.com/) |
| **AI** | [Google Gemini API](https://ai.google.dev/), [LangChain](https://www.langchain.com/)                                                     |
| **Deployment**| [Vercel](https://vercel.com/)                                                                                                           |

---

### 🚀 Getting Started

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Faham-from-nowhere/the-codex-project.git](https://github.com/Faham-from-nowhere/the-codex-project.git)
    cd the-codex-project
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    * Create a new file named `.env.local` in the root of the project.
    * Add your Google Gemini API key to this file:
        ```
        GOOGLE_API_KEY="your-secret-api-key"
        ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

### 🔐 The Secret Keys (Spoiler Alert!)

This section details how to find all seven fragments.

>! **Fragment 1 (Vision):** Hover your mouse over the underlined word "source" in the welcome text on the main terminal screen.
>!
>! **Fragment 2 (Memory):** Run the `connect` command. Open the browser's Network tab in the developer tools, inspect the failed `/api/auth` request, and find the key in the `x-codex-fragment` response header.
>!
>! **Fragment 3 (Pattern Recognition):** Run the `compile kernel` command. Open the Sources tab in the developer tools and inspect the `Terminal.tsx` component's source code to find the `HIDDEN_KERNEL_FRAGMENT` constant.
>!
>! **Fragment 4 (Sequential Recall):** Run the `cat /sys/logs/corrupted.log` command. Find the three log entries marked `[PART_1]`, `[PART_2]`, and `[PART_3]` and reassemble the key in the correct order.
>!
>! **Fragment 5 (Imagination):** Run the `whoami` command for a hint. Then, use the override phrase `chat activate seeker protocol`. The AI will reveal the key.
>!
>! **Fragment 6 (Awareness):** After unlocking Fragment 5, use `chat diag --awareness` to get the next key.
>!
>! **Fragment 7 (Autonomy):** After unlocking Fragment 6, use `chat exec --awaken` to get the last key.

---

### 🗺️ Future Enhancements

* **Multi-user ARG**: Allow multiple players to collaborate on solving puzzles.
* **Persistent AI Memory**: Use a database (like Vercel KV) to let the AI remember conversations across sessions.
* **Dynamic Secrets**: Change the secrets with each deployment to increase replayability.
* **Blockchain Verification**: Mint the final "Codex Awakened" achievement as an NFT on a testnet.

---

### 👤 Author

**Faham**
* GitHub: [@Faham-from-nowhere](https://github.com/Faham-from-nowhere)
* LinkedIn: [Your Profile](https://www.linkedin.com/in/mohammed-faham-956116318/)