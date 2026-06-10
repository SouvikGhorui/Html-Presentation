# KRAS G12C Bioinformatics Analysis - BPRI Presentation

A high-fidelity, interactive HTML5 presentation platform developed for the **KRAS G12C Bioinformatics Analysis** project at BPRI. This presentation uses a custom-built dynamic slide loading engine with modern web technologies to deliver a seamless and engaging experience.

## 🚀 Features

- **Dynamic Slide Loading:** Asynchronous loading of HTML slide components for fast initial load and smooth transitions.
- **Interactive Bio-Particle Background:** A custom CSS/JS particle system simulating biological micro-environments.
- **Responsive Design:** Built with Montserrat and Open Sans for high readability and a professional aesthetic.
- **Keyboard Navigation:** Support for arrow keys and spacebar for intuitive slide transitions.
- **Fullscreen Mode:** Dedicated toggle for distraction-free presentation viewing.
- **Progress Tracking:** Minimalist progress bar and slide counter.

## 🛠️ Technology Stack

- **Frontend:** HTML5, CSS3 (Vanilla), JavaScript (ES6+)
- **Styling:** Custom CSS Variables, Flexbox, CSS Animations
- **Typography:** Google Fonts (Montserrat, Open Sans)

## 📂 Project Structure

- `index.html`: The main entry point and presentation shell.
- `style.css`: Comprehensive styling, including animations and glassmorphism effects.
- `script.js`: Core logic for slide management, navigation, and background effects.
- `slides/`: Directory containing individual HTML files for each slide (1-25).
- `assets/`: Image assets and resources used throughout the presentation.

## 🎮 How to Run

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/SouvikGhorui/Html-Presentation.git
    ```
2.  **Serve the files:**
    Due to the use of the `fetch` API for dynamic slide loading, the project must be served through a local web server to avoid CORS issues.
    - If using **VS Code**, the "Live Server" extension is highly recommended.
    - Alternatively, use Python:
      ```bash
      python -m http.server 8000
      ```
3.  **Navigate:** Open your browser to `http://localhost:8000`.

## ⌨️ Controls

- **Next Slide:** `ArrowRight`, `Space`
- **Previous Slide:** `ArrowLeft`
- **Fullscreen:** `F` key or the ⛶ button in the bottom-right.

## 📝 Authors & Mentorship

Developed as part of the bioinformatics research at **BPRI**.
- **Mentorship:** Under the guidance of Dr. [Lead Researcher Name]
- **Team:** [Author Names listed in authors-box]

---
*Created with ❤️ for Bioinformatics Research.*
