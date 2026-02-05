# Experiment 5: Optimize Frontend Performance using Lazy Loading

## Aim
To optimize the performance of a React application by implementing lazy loading and code splitting so that components are loaded only when required.

---

## Learning Objectives
- Understand frontend performance issues
- Explain the concept of code splitting
- Implement lazy loading using React.lazy()
- Use Suspense for fallback UI
- Observe performance improvement using browser developer tools

---

## Theory
Frontend performance refers to how fast a web application loads and responds to user interactions. Large JavaScript bundles increase initial load time and negatively impact performance.

Lazy loading is a performance optimization technique in which components are loaded only when they are needed. React provides `React.lazy()` for dynamic imports and `Suspense` to show fallback UI while the component is loading.

This approach reduces the initial bundle size and improves page load speed.

---

## Key Concepts

| Concept | Description |
|------|------------|
| Code Splitting | Dividing JavaScript bundle into smaller chunks |
| React.lazy() | Dynamically imports components |
| Suspense | Displays fallback UI during loading |
| Lazy Loading | Loads components only when required |

---

## Tools & Technologies Used
- React
- Vite
- JavaScript (ES6)
- Git & GitHub
- Netlify (for deployment)

---

## Project Setup

```bash
npm create vite@latest experiment-5 -- --template react
cd experiment-5
npm install
npm run dev
