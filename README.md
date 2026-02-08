# React Battleship

A modern, responsive, and tactical Battleship game built with **React**, **Vite**, and **Tailwind CSS**. Features immersive visual effects, smart AI (with adjustable difficulty), and a sleek dark-mode UI.

## Features

- 🚢 **Strategic Gameplay**: Classic naval warfare mechanics.
- 🧠 **Smart AI**: Three difficulty levels (Easy, Medium, Hard/Hunter-Killer).
- 🎨 **Modern UI**: Full dark/light mode support, responsive layout, and beautiful SVG ship graphics.
- 🔊 **Sound Effects**: Immersive audio synthesized in real-time (no heavy assets).
- 🇮🇹 **Multi-language**: Support for English and Italian.
- ☁️ **Cloud Ready**: Configured for instant deployment on Cloudflare Pages.
- 🔗 **External AI**: Support for connecting to custom AI endpoints (REST/MCP).

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm, yarn, or bun

### Installation

1.  Clone the repository (or download the source):
    ```bash
    git clone https://github.com/yourusername/react-battleship.git
    cd react-battleship
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Run the development server:
    ```bash
    npm run dev
    ```
    Open `http://localhost:5173` in your browser.

## Deployment on Cloudflare Pages

This project is pre-configured for Cloudflare Pages (Static Assets).

1.  **Build the project**:
    ```bash
    npm run build
    ```
    This generates a `dist` folder with the static assets.

2.  **Deploy via Wrangler**:
    If you have the [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-and-update/) installed and authenticated:
    ```bash
    npx wrangler deploy
    ```
    *Note: The project includes a `wrangler.json` file pointing to the `./dist` directory.*

3.  **Deploy via Git Integration**:
    - Push your code to GitHub/GitLab.
    - Connect your repository to Cloudflare Pages.
    - **Build Command**: `npm run build`
    - **Build Output Directory**: `dist`

## Project Structure

- `src/components`: React UI components (Board, Cell, GameControls).
- `src/lib`: Game logic, audio engine, and utilities.
- `src/types`: TypeScript definitions.
- `src/constants.ts`: Game configuration (grid size, ships).

## License

MIT License. Free to use and modify.
