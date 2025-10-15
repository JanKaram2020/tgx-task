# 🧩 tgx-task

A modern **React Router v7** Rick and Morty character explorer application built with **TypeScript**, **Vite**, and **Tailwind CSS**. 
This project leverages **React Query** for state management, **Vitest** for testing.

---

## 📚 Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Development](#development)
- [Build & Deployment](#build--deployment)
- [Testing](#testing)
- [Configuration](#configuration)

---

##  Features

- ️ **React 19** with TypeScript
- ️ **React Router v7** (App Router + Data APIs)
-  **Tailwind CSS v4** with Vite integration
-  **React Query** for data fetching and caching
-  **Vitest** + **Testing Library** for fast, isolated unit tests
-  **ESLint + Prettier** setup with custom configuration
-  **Dockerfile** for containerized deployment
-  Supports **SSR** (Server-Side Rendering) via \`react-router-serve\`

---

##  Tech Stack

| Category | Tool |
|-----------|------|
| Frontend | React, React Router |
| Styling | Tailwind CSS, tw-animate-css |
| State/Data | React Query |
| Type Checking | TypeScript |
| Linting | ESLint, Prettier |
| Testing | Vitest, Testing Library |
| Build Tool | Vite |
| Deployment | Docker, react-router-serve |

---

##  Project Structure

```bash
tgx-task/
├── app/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── badge/
│   │   │   │   ├── index.tsx
│   │   │   │   ├── badge.tsx
│   │   │   │   └── badge.test.tsx
│   │   │   ├── button/
│   │   │   │   ├── index.tsx
│   │   │   │   ├── button.tsx
│   │   │   │   └── button.test.tsx
│   │   │   ├── card/
│   │   │   │   ├── index.tsx
│   │   │   │   ├── card.tsx
│   │   │   │   └── card.test.tsx
│   │   │   ├── spinner/
│   │   │   │   ├── index.tsx
│   │   │   │   ├── spinner.tsx
│   │   │   │   └── spinner.test.tsx
│   │   │   ├── character-details.tsx
│   │   │   ├── character-list.tsx
│   │   │   ├── character-list-item.tsx
│   │   │   ├── character-list-item-skeleton.tsx
│   │   │   └── layout.tsx
│   ├── lib/
│   │   └── utils.ts
│   ├── routes/
│   │   ├── character.tsx
│   │   ├── index.tsx
│   │   ├── app.css
│   │   ├── root.tsx
│   │   └── routes.ts
├── public/
├── tests/
├── .dockerignore
├── .gitignore
├── components.json
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/tgx-task.git
cd tgx-task

# Install dependencies
yarn install
```

---

##  Development

Start a local development server with hot reloading:

```bash
yarn dev
```

Then open:  
 `http://localhost:5173` (default Vite port)

---

##  Build & Deployment

Build the project for production:

```bash
yarn build
```

This will output files into the \`/build\` directory, ready to be served using:

```bash
yarn start
```
---

## Testing

Run tests:

```bash
yarn test
```

Run tests in watch mode:

```bash
yarn test:watch
```

Generate coverage report:

```bash
yarn test:coverage
```

---

## Configuration

ESLint and Prettier are configured in `eslint.config.ts`.  
TypeScript configuration is in `tsconfig.json`.  
Vite config is in `vite.config.ts`.
