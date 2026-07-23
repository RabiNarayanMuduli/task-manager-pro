import { createContext, useContext, useState } from 'react'

// Context lives here on purpose, NOT in Redux — theme changes rarely
// and only a few components need it, so a full slice would be overkill.
const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('dark')

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

// Custom hook wrapping useContext — components import this instead of
// importing ThemeContext + useContext separately every time.
export function useTheme() {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error('useTheme must be used inside a ThemeProvider')
    }
    return context
}
