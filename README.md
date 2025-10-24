## Idea Weave AI

React + TypeScript single-page app (CRA) with Tailwind CSS, Redux Toolkit, Radix UI primitives, i18n, routing, and syntax-highlighted markdown chat UI.

### Description

Idea Weave AI is an AI‑assisted ideation playground. It lets you chat, experiment with agent behaviors, and organize prompts while keeping settings, themes, and language preferences persistent. The UI focuses on speed and clarity using Radix primitives and Tailwind.

- Interactive chat with typing effect, markdown rendering, and code highlighting
- Prompt library (create/edit), agent selection, output and regular settings panels
- User profile, API key and license key drawers; image previews in chat
- Light/dark themes, English/French localization
- State management via Redux Toolkit with persistence

### Prerequisites

- Node.js 18+ (LTS recommended)
- npm 8+

### Quick start

```bash
npm install
npm start
```

App runs at `http://localhost:3000/`.

### Available scripts

- `npm start`: Start dev server (CRA / react-scripts)
- `npm run build`: Production build to `build/`
- `npm test`: Run tests
- `npm run lint`: Lint `src/**/*.{js,jsx,ts,tsx}`
- `npm run lint:fix`: Lint with autofix
- `npm run format`: Prettier format for TS/JS/CSS/MD

### Tech stack

- React 18, TypeScript 4.9
- React Router v6
- Redux Toolkit + Redux Persist
- Tailwind CSS + tailwind-merge
- Radix UI primitives (Accordion, Select, Dialog, Tooltip, etc.)
- i18next + react-i18next (locales in `src/locales/`)
- Markdown rendering with `react-markdown` and code highlighting via `react-syntax-highlighter`

### Project structure (high level)

```
public/              # static assets
src/
  components/        # UI and shared components
  pages/home/        # main page
  reducers/          # Redux slices and root reducer
  routes/            # router setup
  lib/utils/         # utilities (e.g., className merge)
  i18n.ts            # i18n configuration
  index.tsx          # app bootstrap
```

### Troubleshooting

- "react-scripts is not recognized": run `npm install` to install dependencies, then `npm start`.
- TS2786 errors for React icons: we pin `react-icons` to `4.12.0` and `@types/react`/`@types/react-dom` to 18.2.x to align with TypeScript 4.9. If upgrading TypeScript, you can revisit these pins.

### License

Private project. All rights reserved.
