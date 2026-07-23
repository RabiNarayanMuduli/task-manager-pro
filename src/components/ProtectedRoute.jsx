// Import useSelector to read data from the Redux store
import { useSelector } from 'react-redux'
// Import Navigate to programmatically redirect the user to a different route
import { Navigate } from 'react-router-dom'

// This component acts as a guard. It wraps any page that requires a user to be logged in.
// 'children' is a special prop representing the components nested inside <ProtectedRoute> in App.jsx.
function ProtectedRoute({ children }) {
    // Read the 'isLoggedIn' boolean from the 'auth' slice of our Redux store
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

    // Check if the user is NOT logged in
    if (!isLoggedIn) {
        // If not logged in, redirect them to the /login page.
        // The 'replace' prop replaces the current history entry so they can't hit the back button to return here.
        return <Navigate to="/login" replace />
    }

    // If they ARE logged in, simply render the protected content (e.g., the Dashboard)
    return children
}

// Export the component for use in App.jsx
export default ProtectedRoute
