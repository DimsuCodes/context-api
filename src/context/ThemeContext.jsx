import { createContext, useState, useEffect, useCallback, useMemo } from 'react'
//The channel
export const ThemeContext = createContext();

//DISCLAIMER: this whole file was written by Claude (AI)
//rehydrate: when the app opens, load the saved theme (or start with "light")
function loadTheme() {
  try {
    return localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';
  } catch {
    return 'light';
  }
}

//The router
export function ThemeProvider({ children }) {
  //passing loadTheme (no parentheses) means it only runs once, when the app first opens
  const [theme, setTheme] = useState(loadTheme); //theme can only be "light" or "dark"

  //persist: every time the theme changes, save it to localStorage
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  //flips the theme: light becomes dark, dark becomes light
  //useCallback = keep the same function each render
  const toggleTheme = useCallback(() => setTheme((current) => (current === 'light' ? 'dark' : 'light')), []);

  //useMemo = only build a new value object when the theme changes
  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
