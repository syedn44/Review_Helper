# Editorial Review Coach (Local-First AI)

A modern, privacy-focused product review interface that uses on-device LLMs to provide real-time writing suggestions. Built with WebGPU and WebLLM, all AI processing happens entirely in your browser—no data ever leaves your machine.

![Project Preview](https://lh3.googleusercontent.com/aida-public/AB6AXuBViHFaPPCkhTP1rNk9RYzKka_DW_KOm57ILwSdWnxh4YAfiQYmjDNFCZTkTVxArJxnfsPzGYQhGlAZu8ORVkgI0nc8_mn94YHrF1cRWPxRDp-KOtVrP49NOZnH4jOvDg7HVnUzYa1QHYELDzpV1ybm75T-UHpdPcd_fJ8UqGQ3rDSY1e2uMPrzyFj54OHfyhzcJuNHa2kTSEo_-Z7RO0ZYBx4LIvFFjqdfyHHh2kESK5CqBDJAWAR21_97OItEYVK3XE63RuBeH-lU)

## 🚀 Key Features

- **Local-First AI**: Powered by **SmolLM2-360M-Instruct** via `@mlc-ai/web-llm`.
- **Privacy by Design**: Zero API calls to external servers for text evaluation.
- **Web Worker Orchestration**: AI engine runs in a background thread to keep the UI buttery smooth.
- **Dynamic Feedback Loop**: Debounced input (1.5s) triggers context-aware coaching suggestions.
- **Visual Progress Tracking**: Real-time status bar for model weight downloads.
- **Premium UI**: Built with Tailwind CSS and Google Inter typography.

## 🛠️ Tech Stack

- **Frontend**: HTML5, Vanilla JavaScript (ES Modules)
- **Styling**: Tailwind CSS
- **AI Core**: [WebLLM](https://webllm.mlc.ai/)
- **Model**: SmolLM2-360M-Instruct
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Compute**: WebGPU (falls back to WebAssembly if needed)

## 🚦 Getting Started

### Prerequisites

- A modern browser with **WebGPU** support (Chrome 113+, Edge 113+, or Safari 17+).
- [Node.js](https://nodejs.org/) (v18 or higher recommended).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/editorial-review-coach.git
   cd editorial-review-coach
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser to the local URL (usually `http://localhost:5173`).

## 🧠 How It Works

1. **Initialization**: On first load, the app initializes a Web Worker which begins downloading the quantized model shards (~400MB) into the browser's IndexedDB.
2. **Persistence**: Weights are cached locally, so subsequent visits load nearly instantly.
3. **Execution**: Every time you stop typing for 1.5 seconds, the main thread sends your draft to the worker. The worker executes a few-shot prompt against the local LLM and returns specific editorial improvements.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
*Created as a demonstration of high-performance local AI integration in the browser.*
