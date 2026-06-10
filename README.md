# KRAS G12C Bioinformatics Analysis - BPRI Presentation

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Web](https://img.shields.io/badge/Web-HTML5%20%7C%20CSS3%20%7C%20JS-orange)](index.html)
[![Bioinformatics](https://img.shields.io/badge/Bioinformatics-Analysis-blue)](https://github.com/SouvikGhorui/Html-Presentation)

A high-fidelity, interactive HTML5 presentation platform developed for the **KRAS G12C Bioinformatics Analysis** project at BPRI. This presentation utilizes a custom-built dynamic slide loading engine designed to deliver a seamless, high-performance, and engaging experience for scientific presentations.

---

## 🚀 Key Features

*   **Dynamic Slide Loading Engine:** Efficiently fetches and injects HTML slide components asynchronously, minimizing initial load times and ensuring fluid transitions.
*   **Interactive Biological Environment:** A custom CSS and JavaScript-based particle system that simulates biological micro-environments in the background.
*   **Professional Typography & Design:** Leverages Google Fonts (Montserrat & Open Sans) for optimal readability and a modern, scientific aesthetic.
*   **Advanced Navigation:** 
    *   Full keyboard support (Arrow keys, Spacebar).
    *   Responsive touch/click controls.
    *   Dedicated Fullscreen mode for an immersive experience.
*   **Visual Feedback:** Integrated progress tracking with a minimalist progress bar and real-time slide counter.

---

## 📂 Project Structure

```text
Html-Presentation/
├── assets/                 # Image assets and biological diagrams
├── slides/                 # Individual HTML slide modules (1-25)
├── index.html              # Main application shell and entry point
├── style.css               # Core styles, animations, and glassmorphism effects
├── script.js               # Slide engine and interactive background logic
├── presentation.pptx       # Original PowerPoint source file
├── LICENSE                 # MIT License
└── README.md               # Project documentation
```

---

## 🛠️ Technology Stack

*   **Core:** HTML5, CSS3 (Vanilla), JavaScript (ES6+)
*   **Layout:** CSS Flexbox & Grid, Custom CSS Variables
*   **Animations:** Keyframe animations & JS-driven particle systems
*   **Typography:** Montserrat & Open Sans

---

## 🎮 Getting Started

### Prerequisites

To view this presentation correctly, you must serve it via a local web server because the `fetch` API is used for dynamic content loading (this prevents CORS issues).

### Running Locally

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/SouvikGhorui/Html-Presentation.git
    cd Html-Presentation
    ```

2.  **Launch a Web Server:**
    *   **VS Code:** Install and use the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension.
    *   **Python 3:**
        ```bash
        python -m http.server 8000
        ```
    *   **Node.js (http-server):**
        ```bash
        npx http-server
        ```

3.  **Access:** Open your browser and navigate to `http://localhost:8000`.

---

## ⌨️ Controls & Shortcuts

| Action | Shortcut |
| :--- | :--- |
| **Next Slide** | `ArrowRight` / `Space` |
| **Previous Slide** | `ArrowLeft` |
| **Toggle Fullscreen** | `F` Key / ⛶ Button |

---

## 📜 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 👥 Author

**Souvik Ghorui** - *Lead Presentation Developer*

---
*Developed for KRAS G12C Bioinformatics Research at BPRI.*
