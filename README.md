## AI Disclaimer

I wrote most of this project myself with step-by-step coaching from Claude (AI). These parts were written by Claude, not by me:

**Saving (`localStorage`) and optimization**
- `loadTodos`, the `useEffect` that saves todos, and the `useMemo` and `useCallback` in `src/context/TodoContext.jsx`

**Theme**
- The theme code in `src/App.jsx` (reading the theme and adding it as a class)
- Wrapping the app in `ThemeProvider` in `src/main.jsx`
- The theme colors at the bottom of `src/index.css`

**Filter**
- All of `src/components/FilterButtons.jsx`
- The filtering code in `src/components/TodoList.jsx` (connecting to `FilterContext` and `visibleTodos`)

**Other help**
- Claude showed me the full layout of `src/components/TodoList.jsx` when I got stuck, and I typed it in.
- Some explanation comments in `TodoInput.jsx`, `main.jsx` and `TodoContext.jsx` were added by Claude.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
