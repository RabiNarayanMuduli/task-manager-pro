// Import the custom hook we created to access the theme context
import { useTheme } from '../context/ThemeContext'

// A functional component that renders a button to toggle the theme
function ThemeToggle() {
    // Destructure the current 'theme' (string) and the 'toggleTheme' (function) from our context
    const { theme, toggleTheme } = useTheme()

    // Render a button element
    return (
        // When the button is clicked, execute the toggleTheme function to flip the state
        <button onClick={toggleTheme}>
            {/* Dynamically change the button text based on the current theme */}
            Switch to {theme === 'dark' ? 'light' : 'dark'} mode
        </button>
    )
}

// Export the component so it can be used in other files (like Dashboard.jsx)
export default ThemeToggle
