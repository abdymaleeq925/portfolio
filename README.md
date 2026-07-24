# Abdymalik Batyrkulov — Portfolio

A single-page portfolio and résumé site built as a smooth-scrolling, animated experience. No page routing — every section lives on one scroll-driven canvas.

**Live demo:**

---

## ✨ Features

- **Single-page, scroll-based navigation** — smooth section transitions powered by [Lenis](https://lenis.darkroom.engineering/), no jarring hash jumps
- **Animated UI** — gradient accents, hover states, and scroll-triggered reveals
- **Fully responsive** — mobile-first layout across all sections
- **Accessible navigation** — real anchor links with keyboard support, ARIA labels on icon-only controls
- **Dynamic tech stack showcase** — icon grid pulled from Devicon and Simple Icons, with hover tooltips

## 🛠️ Tech Stack

| Category | Tools |
|---|---|
| Core | React, TypeScript, Vite |
| Styling | Tailwind CSS |
| Animation & Scroll | Lenis (`lenis/react`), CSS transitions |
| Icons | lucide-react, Devicon, Simple Icons |

## 📂 Project Structure

```
src/
├── assets/              # Images and CV-file
├── components/
│   ├── sections/        # Header, Hero, About, Projects, Experience, Contact
│   └── ui/              # Reusable UI primitives (Button, etc.)
├── data/                # Static content — cv data
├── hooks/               # Custom hooks (useScrollTo, etc.)
├── App.tsx
└── main.tsx
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/abdymaleeq925/portfolio.git
cd portfolio
npm install
```

### Development

```bash
npm run dev
```

Runs the app locally at `http://localhost:5173`.

### Build

```bash
npm run build
```

Outputs a production-ready build to `dist/`.

### Preview production build

```bash
npm run preview
```

## 📄 Sections

- **Hero** — Introduction and primary calls to action
- **About** — Summary, Photo, and Tech Stack
- **Projects** — Selected pet projects
- **Experience** — Professional background
- **Contact** — Ways to get in touch

## 🌐 Deployment

Static build, deployable to Vercel:

```bash
npm run build
```

Then deploy the contents of `dist/`.

## 📬 Contact

- **Email:** abdymalikbatyrkulov@gmail.com
- **Phone:** +90 546 827 09 23

## 📝 License

This project is personal portfolio work. Feel free to reference the structure, but please don't reuse the content as your own.
