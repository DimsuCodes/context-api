import { createContext, useState } from 'react'
//The channel
export const ThemeContext = createContext();
//The router
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light'); //theme can only be "light" or "dark"

  //flips the theme: light becomes dark, dark becomes light
  const toggleTheme = () => setTheme((current) => (current === 'light' ? 'dark' : 'light'));

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}
