import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

export default function ThemeToggleButton() {
    //connect to the theme Wi-Fi: theme = the current word | toggleTheme = flips it
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button onClick={toggleTheme}>
            {/* the button says the theme you'll switch TO */}
            {theme === 'light' ? '🌙 Switch to Dark' : '☀️ Switch to Light'}
        </button>
    )
}
